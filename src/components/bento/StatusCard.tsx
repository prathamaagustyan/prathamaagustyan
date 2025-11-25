"use client";

import { ArrowUpRight, Globe } from "lucide-react";

export default function StatusCard() {
  return (
    <a
      href="mailto:prathamaagustyan@gmail.com" // Ganti email kamu
      className="relative flex flex-col justify-between w-full h-full p-6 overflow-hidden border rounded-3xl group bg-zinc-900 border-zinc-800"
    >
      <div className="absolute inset-0 bg-zinc-950" />

      <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-600/20 via-zinc-950/0 to-zinc-950/0 animate-spin-slow opacity-70" />

      <div
        className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 flex items-start justify-between">
        <div className="flex items-center justify-center w-10 h-10 border rounded-full bg-zinc-950/40 backdrop-blur-md border-white/10 shadow-lg group-hover:scale-110 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all duration-300">
          <Globe className="w-5 h-5 text-emerald-400 group-hover:text-emerald-300 animate-pulse-slow" />
        </div>

        <div className="p-2 -mr-2 -mt-2 text-zinc-500 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white leading-tight drop-shadow-md group-hover:text-emerald-300 transition-colors">
          Open for
          <br />
          Work
        </h3>
        <p className="mt-1 text-xs font-medium text-zinc-400 group-hover:text-zinc-200 transition-colors">
          Available for freelance & collabs.
        </p>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/5 to-transparent translate-y-[-100%] group-hover:animate-scanline pointer-events-none" />
    </a>
  );
}
