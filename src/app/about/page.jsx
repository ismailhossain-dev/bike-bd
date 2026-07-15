import Footer from "@/components/Footer/Footer";
// import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const AboutPage = () => {
  const features = [
    {
      title: "Quality Selection",
      desc: "A curated collection of the world's best motorcycle brands, tested for peak performance.",
      icon: "🏍️",
    },
    {
      title: "Expert Insight",
      desc: "Our specialists provide technical analysis to ensure you choose the bike that fits your soul.",
      icon: "🛡️",
    },
    {
      title: "Lifetime Support",
      desc: "Beyond the sale, we offer 24/7 technical assistance and professional maintenance advice.",
      icon: "🛠️",
    },
  ];

  const stats = [
    { label: "Happy Riders", value: "5000+" },
    { label: "Global Partners", value: "50+" },
    { label: "Expert Engineers", value: "120+" },
    { label: "Service Centers", value: "25+" },
  ];

  return (
    <div>
      {/* <Navbar /> */}
      <div className="bg-white dark:bg-[#050505] text-zinc-900 dark:text-white min-h-screen font-sans transition-colors duration-300">
        {/* --- Section 1: Hero --- */}
        <section className="relative pt-32 pb-16 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="text-center relative z-10">
            <span className="text-blue-600 dark:text-blue-400 font-black tracking-[0.5em] uppercase text-[9px] mb-6 block">
              The Engineering of Freedom
            </span>
            {/* Main Title font choto kora hoyeche */}
            <h1 className="text-5xl md:text-[5rem] font-black uppercase tracking-tighter mb-8 italic leading-[0.85]">
              Ride the <span className="text-blue-600">Future.</span>
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed font-medium">
              We define the intersection of human spirit and mechanical perfection. Elite machines
              for those who seek pure adrenaline.
            </p>
          </div>
        </section>

        {/* --- Section 2: Core Philosophy --- */}
        <section className="py-20 border-y border-zinc-100 dark:border-zinc-900">
          <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side: Geometric Brand Box (More compact) */}
            <div className="relative p-8 md:p-10 bg-zinc-900 dark:bg-[#0c0c0c] rounded-[2rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <h2 className="text-6xl font-black text-white/5 absolute top-6 left-6 select-none uppercase tracking-tighter">
                EST. 2026
              </h2>

              <div className="relative z-10 space-y-8">
                {[
                  {
                    n: "01",
                    t: "Mechanical Integrity",
                    d: "Strict 50-point technical inspection.",
                  },
                  {
                    n: "02",
                    t: "Global Sourcing",
                    d: "Direct partnerships with elite manufacturers.",
                  },
                  { n: "03", t: "Technical Mastery", d: "Service by master-certified engineers." },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <span className="text-blue-600 font-black text-sm italic">{item.n}</span>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-widest text-[10px] mb-1">
                        {item.t}
                      </h4>
                      <p className="text-zinc-500 text-[11px] leading-relaxed max-w-[200px]">
                        {item.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="lg:pl-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-tighter leading-none">
                Legacy of <br />
                <span className="text-blue-600 italic">Speed & Precision</span>
              </h2>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 leading-relaxed font-medium max-w-lg">
                Founded by enthusiasts for enthusiasts, we curate the bridge between world-class
                engineering and local riders. We don't just sell vehicles; we curate your legacy.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Elite Engineering", "Safety Certified", "Peak Aero"].map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 border border-zinc-100 dark:border-zinc-800 rounded-full text-[9px] font-black uppercase tracking-widest text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- Section 3: Features Grid --- */}
        <section className="py-20 bg-zinc-50/50 dark:bg-[#080808]">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#0c0c0c] p-10 rounded-[2rem] border border-zinc-100 dark:border-zinc-900 hover:border-blue-600/30 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-zinc-50 dark:bg-zinc-900 rounded-xl flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-black mb-3 uppercase tracking-tighter italic">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-[12px] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Section 4: Stats Banner (Compact) --- */}
        <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
          <div className="container mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center group border-r border-white/10 last:border-none"
              >
                <p className="text-4xl md:text-5xl font-black mb-1 tracking-tighter">
                  {stat.value}
                </p>
                <p className="text-blue-100 text-[9px] font-bold uppercase tracking-[0.2em] opacity-80">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* --- Section 5: Manifesto --- */}
        <section className="py-32 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-[9px] font-black text-blue-600 uppercase tracking-[0.6em] mb-10">
              The Manifesto
            </h2>
            <p className="text-2xl md:text-5xl font-black italic tracking-tighter leading-tight text-zinc-800 dark:text-zinc-200">
              "Empowering every rider with technology, safety, and a community that turns every road
              into an{" "}
              <span className="text-blue-600 underline decoration-1 underline-offset-4">
                adventure.
              </span>
              "
            </p>
            <div className="mt-16 flex flex-col items-center">
              <div className="w-px h-12 bg-blue-600 mb-6"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400">
                MotorRevolution Team
              </span>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
