# ── Stage 1: deps ──────────────────────────────────────
FROM oven/bun:1-alpine AS deps
WORKDIR /app

# Copy package files
COPY package.json bun.lockb* ./

# Install dependencies dengan retry mechanism
RUN bun install --frozen-lockfile --production=false || \
    (sleep 3 && bun install --frozen-lockfile --production=false)

# ── Stage 2: builder ───────────────────────────────────
FROM oven/bun:1-alpine AS builder
WORKDIR /app

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_GRPC_HOST=${NEXT_PUBLIC_GRPC_HOST}

# Build dengan konfigurasi standalone
RUN bun run build

# ── Stage 3: runner (minimal) ──────────────────────────
FROM oven/bun:1-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3100
ENV HOSTNAME="0.0.0.0"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs \
    && adduser --system --uid 1001 nextjs

# Copy public files
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Copy standalone build dengan benar
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Pastikan file server.js ada
RUN ls -la && echo "Checking files:" && ls -la ./

USER nextjs

EXPOSE 3100

# Start the Next.js standalone server
CMD ["bun", "server.js"]