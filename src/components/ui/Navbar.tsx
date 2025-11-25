"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "all", label: "All" },
  { id: "profile", label: "Profile" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Projects" },
];

interface NavbarProps {
  activeTab: string;
  onChange: (tab: string) => void;
}

export default function Navbar({ activeTab, onChange }: NavbarProps) {
  return (
    <div className="flex justify-center w-full mb-8 relative z-50">
      {/* CONTAINER UTAMA: */}
      {/* backdrop-blur-2xl: Blur lebih kuat biar background kartu di belakangnya nge-blend indah */}
      {/* border-white/5: Border super tipis */}
      {/* shadow-2xl: Bayangan kuat biar navbarnya 'melayang' */}
      <div className="flex items-center gap-1 p-1.5 bg-zinc-950/50 backdrop-blur-2xl border border-white/5 rounded-full shadow-2xl shadow-black/50 ring-1 ring-white/5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-300",
              // Warna Teks:
              activeTab === tab.id
                ? "text-white" // Putih bersih pas aktif
                : "text-zinc-500 hover:text-zinc-200" // Abu gelap jadi terang pas hover
            )}
            style={{
              WebkitTapHighlightColor: "transparent", //ilangin highlight biru di mobile
            }}
          >
            {/* ANIMASI PILL (BACKGROUND AKTIF) */}
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                // Style Pill:
                // bg-zinc-800: Warna dasar
                // border-white/10: Garis pinggir kaca
                // shadow: Efek timbul
                className="absolute inset-0 bg-zinc-800 border border-white/10 rounded-full shadow-[0_1px_10px_rgba(0,0,0,0.5)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Efek Kilau di bagian atas pill (Highlight) */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Efek Glow Emerald Samar di bawah pill */}
                <div className="absolute inset-x-0 bottom-0 h-4 bg-emerald-500/5 blur-md rounded-b-full" />
              </motion.div>
            )}

            {/* Label Teks */}
            <span className="relative z-10 mix-blend-screen tracking-wide">
              {tab.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
