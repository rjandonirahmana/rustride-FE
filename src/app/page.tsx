import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RustRide - The Future of Mobility",
};

export default function LandingPage() {
  const avatars = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB8TjpKPZXC2eteFLrolUjs1DYXiLoTkCHVVl-Os-vzjRZxyMatL0ulDIpocda8uc_qPCF0xuPhZb2uw63mZPjuBDjEk0Eje9vPYzKZJLlmn4akvr8A2jPQyAVvwEftBSMtJYDtGsBPcT60pV0PZayxynyQGS8JE7dGRbxaJAvo1Fkbb-432e7-y8Dx2ymQF__4eQrwAQtVegvYIMPHRKeSqhnwCQyq3998RWEE3H8ZhhNn2CnnGOMBRT7SmTE6wJ9TxXUOK7Ta2JdB",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAjkofcp785Eg8AnqtF0Qed1n-G7rVEa2fqoeTCvgLQNBpvGrX3DrlDT7btQh1ZdJ7tUHfRVpxE40hlM0JyWejUnlhsB-rOOmWq88r2CQ13LcX4_r7Oh6asqRvl1NuHvXQlbsLl0RGrC0-VLhDjV_xsDMw4ooThhRZdb_BJNRxPHfxjUyPNHqVhYOUMhgtER4OPGkTbGKus4ielDSdNpj8nYhR6S4mV70nKjaymPyQv5aBDK7Wd7re4EF6DYaHsAWW66pJS8UL7bjnM",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA6wCy-Rf5g9pzng0gbIODiRW7Yr2EANj0mwtCW7fxUMLpUPG4bJSxW9aQwd4QfRh8ZiBfn5ns0CBXHO8XSkic5iNkAsH_2zNYREmdRP8nVK1x9MbqKRLMo86PZo4dOIZl4OsIRjXz8cC13sT1UZmV0KnpZVxJXLUH-Yk4a2UeF0dJRre6p-5QTbHh66my-5_tvsj4rKI3S-0IdrpdgPLfqfJyrmAXY9cS9BSZL-cbmhY8eWfVZRuZAgnIZHHE9PvIaPDI-ik-5hGqF",
  ];

  const heroImage =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB3iYGiJMFzqM5KVLDP3mMQbgVKJ0W5Nbd-bxtEy75aASDspGabi61eHFJ0TmPxKFqv3kpdLoNFxZwXOrQkHC15ZCl6ZwB9F3tAWmEozAxK19423hcr1Mi3Z5Rxwvkc2yjYnIKkoFJ40dk_S2KzHwz0LE2DJd7ZMKpf3WhQREVR1FjAq8SMJEYr9eb0AgI-jyZoxh1qudA705OzEoB6bUFdTjP2uiyqNJbis8IQAE7aMr-xlWv8AneO2m7hLeF3X5BJX73FrPWfJWKS";

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">

        {/* ── HEADER ── */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e6f4f3] px-6 md:px-20 lg:px-40 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50">
          <div className="flex items-center gap-3 text-[#0c1d1b]">
            <span className="material-symbols-outlined text-3xl font-bold">electric_car</span>
            <h2 className="text-[#0c1d1b] text-xl font-extrabold leading-tight tracking-tight">RustRide</h2>
          </div>
          <div className="hidden md:flex flex-1 justify-end gap-10">
            <nav className="flex items-center gap-8">
              {["Features", "How it Works", "Safety", "Support"].map((item) => (
                <a key={item} className="text-[#0c1d1b] text-sm font-semibold hover:text-[#00d1bc] transition-colors" href="#">
                  {item}
                </a>
              ))}
            </nav>
            <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-11 px-5 bg-[#00d1bc] text-[#0c1d1b] text-sm font-bold shadow-lg hover:scale-105 transition-transform active:scale-95">
              Download Now
            </button>
          </div>
          <div className="md:hidden">
            <span className="material-symbols-outlined text-[#0c1d1b]">menu</span>
          </div>
        </header>

        <main className="flex-1">

          {/* ── HERO ── */}
          <section className="px-6 md:px-20 lg:px-40 py-12">
            <div className="flex flex-col gap-10 md:flex-row items-center">

              {/* Left */}
              <div className="flex flex-col gap-8 flex-1">
                <div className="flex flex-col gap-4">
                  <span className="text-[#00d1bc] font-bold tracking-widest uppercase text-xs">Modern Mobility</span>
                  <h1 className="text-[#0c1d1b] text-5xl md:text-6xl font-black leading-[1.1] tracking-tight">
                    Fast, Secure, and Built with{" "}
                    <span className="text-[#00d1bc]">Rust</span>
                  </h1>
                  <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-[540px]">
                    Experience the next generation of mobility with unmatched reliability and performance.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-[#00d1bc] text-[#0c1d1b] text-lg font-bold shadow-xl hover:shadow-[#00d1bc]/40 transition-all">
                    Download the App
                  </button>
                  <button className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-xl h-14 px-8 bg-[#e6f4f3] text-[#0c1d1b] text-lg font-bold hover:bg-[#e6f4f3]/70 transition-all border border-[#e6f4f3]">
                    Learn More
                  </button>
                </div>

                {/* Avatars */}
                <div className="flex items-center gap-4 mt-2">
                  <div className="flex -space-x-3">
                    {avatars.map((src, i) => (
                      <div
                        key={i}
                        className="h-10 w-10 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
                        style={{ backgroundImage: `url('${src}')` }}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Trusted by 50,000+ daily riders</p>
                </div>
              </div>

              {/* Right: image */}
              <div className="w-full flex-1 relative">
                <div
                  className="relative z-10 w-full aspect-square bg-center bg-no-repeat bg-cover rounded-3xl shadow-2xl"
                  style={{ backgroundImage: `url('${heroImage}')` }}
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#00d1bc]/20 rounded-full blur-3xl" />
                <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#00d1bc]/10 rounded-full blur-3xl" />
              </div>
            </div>
          </section>

          {/* ── WHY CHOOSE US ── */}
          <section className="px-6 md:px-20 lg:px-40 py-20 bg-white">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4 text-center items-center">
                <h2 className="text-[#0c1d1b] text-4xl font-black leading-tight tracking-tight">Why Choose Us</h2>
                <div className="h-1.5 w-20 bg-[#00d1bc] rounded-full" />
                <p className="text-slate-600 text-lg font-medium max-w-[700px]">
                  Our platform is engineered from the ground up for the highest performance and safety standards in the industry.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "bolt",
                    title: "Ultimate Speed",
                    desc: "Powered by high-performance routing algorithms to find the fastest path and nearest driver in milliseconds.",
                  },
                  {
                    icon: "verified_user",
                    title: "Memory Safe Security",
                    desc: "Built with memory-safe code paradigms to protect your sensitive data and ensure a secure journey.",
                  },
                  {
                    icon: "auto_graph",
                    title: "Total Reliability",
                    desc: "Engineered for 99.99% uptime. Whether it's peak hour or midnight, RustRide is always ready for you.",
                  },
                ].map((f) => (
                  <div
                    key={f.title}
                    className="flex flex-col gap-6 rounded-2xl border border-[#e6f4f3] bg-[#f5f8f8] p-8 hover:border-[#00d1bc]/50 transition-colors group"
                  >
                    <div className="bg-[#00d1bc]/10 text-[#00d1bc] p-4 rounded-xl w-fit group-hover:bg-[#00d1bc] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-3xl font-bold">{f.icon}</span>
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3 className="text-[#0c1d1b] text-xl font-extrabold">{f.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="px-6 md:px-20 lg:px-40 py-24 text-center">
            <div className="bg-[#0c1d1b] rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d1bc]/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00d1bc]/10 rounded-full blur-[100px]" />
              <div className="relative z-10 flex flex-col items-center gap-8">
                <h2 className="text-white text-4xl md:text-5xl font-black leading-tight max-w-[800px]">
                  Ready to experience the future of ride-hailing?
                </h2>
                <p className="text-slate-300 text-lg font-medium max-w-[600px]">
                  Join thousands of riders who trust RustRide for their daily commute and professional travel needs.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="flex min-w-[200px] items-center justify-center rounded-xl h-14 px-8 bg-[#00d1bc] text-[#0c1d1b] text-lg font-bold hover:scale-105 transition-transform">
                    Get Started Today
                  </button>
                  <button className="flex min-w-[200px] items-center justify-center rounded-xl h-14 px-8 border border-white/20 text-white text-lg font-bold hover:bg-white/10 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* ── FOOTER ── */}
        <footer className="flex flex-col gap-12 px-6 md:px-20 lg:px-40 py-16 bg-white border-t border-[#e6f4f3]">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Brand */}
            <div className="flex flex-col gap-4 max-w-sm">
              <div className="flex items-center gap-3 text-[#0c1d1b]">
                <span className="material-symbols-outlined text-3xl font-bold">electric_car</span>
                <h2 className="text-[#0c1d1b] text-xl font-extrabold">RustRide</h2>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                Revolutionizing mobility through safety, speed, and cutting-edge software engineering. Move faster, feel safer.
              </p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
              {[
                { title: "Product", links: ["Features", "Safety", "Pricing"] },
                { title: "Company", links: ["About Us", "Careers", "Blog"] },
                { title: "Legal", links: ["Privacy", "Terms", "Cookies"] },
              ].map((col) => (
                <div key={col.title} className="flex flex-col gap-4">
                  <h4 className="font-bold text-[#0c1d1b]">{col.title}</h4>
                  {col.links.map((link) => (
                    <a key={link} className="text-slate-500 hover:text-[#00d1bc] text-sm transition-colors" href="#">
                      {link}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-[#e6f4f3]">
            <div className="flex gap-6">
              {[
                { icon: "brand_awareness" },
                { icon: "share" },
                { icon: "public" },
              ].map(({ icon }) => (
                <a
                  key={icon}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-[#e6f4f3] text-slate-600 hover:bg-[#00d1bc] hover:text-white transition-all"
                  href="#"
                >
                  <span className="material-symbols-outlined text-xl">{icon}</span>
                </a>
              ))}
            </div>
            <p className="text-slate-500 text-sm">© 2024 RustRide Inc. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </div>
  );
}