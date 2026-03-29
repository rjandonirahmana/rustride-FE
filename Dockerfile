# ── Stage 1: deps ──────────────────────────────────────
FROM oven/bun:1-alpine AS deps
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile

# ── Stage 2: builder ───────────────────────────────────
FROM oven/bun:1-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
ARG NEXT_PUBLIC_GRPC_HOST
ENV NEXT_PUBLIC_GRPC_HOST=$NEXT_PUBLIC_GRPC_HOST
RUN bun run build

# ── Stage 3: runner ────────────────────────────────────
FROM gcr.io/distroless/nodejs20-debian12:nonroot
WORKDIR /app
COPY --from=builder --chown=nonroot:nonroot /app/.next/standalone ./
COPY --from=builder --chown=nonroot:nonroot /app/.next/static ./.next/static
COPY --from=builder --chown=nonroot:nonroot /app/public ./public

ENV NODE_ENV=production
ENV PORT=3100

EXPOSE 3100
USER nonroot

CMD ["node", "server.js"]