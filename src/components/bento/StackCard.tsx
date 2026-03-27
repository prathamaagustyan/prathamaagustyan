"use client";

import {
  SiPhp,
  SiPhpmyadmin,
  SiMysql,
  SiJavascript,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiCanva,
  SiBootstrap,
  SiJquery,
  SiApache,
} from "react-icons/si";
import { Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const stack = [
  {
    name: "React",
    icon: SiReact,
    color: "group-hover:text-[#61DAFB]",
    type: "Library",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "group-hover:text-[#339933]",
    type: "Runtime",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "group-hover:text-[#F7DF1E]",
    type: "Language",
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "group-hover:text-[#777BB4]",
    type: "Language",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "group-hover:text-[#4479A1]",
    type: "Database",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "group-hover:text-[#3776AB]",
    type: "Language",
  },
  {
    name: "Bootstrap",
    icon: SiBootstrap,
    color: "group-hover:text-[#7952B3]",
    type: "Framework",
  },
  {
    name: "jQuery",
    icon: SiJquery,
    color: "group-hover:text-[#0769AD]",
    type: "Library",
  },
  {
    name: "Apache",
    icon: SiApache,
    color: "group-hover:text-[#D22128]",
    type: "Server",
  },
  {
    name: "PhpMyAdmin",
    icon: SiPhpmyadmin,
    color: "group-hover:text-[#F89D00]",
    type: "Tool",
  },
  {
    name: "Canva",
    icon: SiCanva,
    color: "group-hover:text-[#00C4CC]",
    type: "Design",
  },
];

const infiniteStack = [...stack, ...stack, ...stack];

const customStyle = `
  .bg-dot-pattern {
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  @keyframes vertical-scroll {
    0% { transform: translateY(0); }
    100% { transform: translateY(calc(-100% / 3)); }
  }
  .animate-vertical-scroll {
    animation: vertical-scroll 40s linear infinite;
  }
  .group:hover .animate-vertical-scroll {
    animation-play-state: paused;
  }
`;

export default function StackCard() {
  return (
    <div className="relative flex flex-col h-full w-full overflow-hidden bg-zinc-900/50 border border-zinc-800 rounded-3xl group">
      <style>{customStyle}</style>

      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      {/* Bagian header tempat titik 3 sebelumnya berada */}
      <div className="absolute top-0 left-0 right-0 z-20 p-5 bg-zinc-950/80 backdrop-blur-md border-b border-white/5 flex justify-between items-center">
        <h3 className="text-sm font-bold text-white tracking-widest uppercase flex items-center gap-3">
          <div className="p-2 rounded-lg border border-zinc-700 bg-zinc-900 shadow-inner">
            <Terminal className="w-5 h-5 text-emerald-400" />
          </div>
          Tech I Use
        </h3>
        {/* Titik merah, kuning, dan hijau sudah dihapus dari sini */}
      </div>

      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950" />

      <div className="flex flex-col h-full pt-20 pb-0">
        <div className="animate-vertical-scroll flex flex-col gap-3 px-5">
          {infiniteStack.map((tech, index) => (
            <div
              key={index}
              className={cn(
                "relative flex items-center gap-4 p-3 rounded-xl border border-white/5 bg-zinc-800/30 transition-all duration-300",
                "hover:border-emerald-500/50 hover:bg-zinc-800/80 hover:shadow-[0_4px_20px_-5px_rgba(16,185,129,0.2)]",
                "cursor-default group/item backdrop-blur-sm",
              )}
            >
              <div
                className={cn(
                  "flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-950/50 border border-white/5 text-2xl text-zinc-500 transition-all duration-300 shadow-sm",
                  tech.color,
                  "group-hover/item:scale-105 group-hover/item:border-emerald-500/30",
                )}
              >
                <tech.icon />
              </div>

              <div className="flex flex-col justify-center gap-1 w-full">
                {" "}
                <div className="flex justify-between items-center w-full">
                  <span className="text-base font-bold text-zinc-200 group-hover/item:text-white transition-colors leading-none">
                    {tech.name}
                  </span>

                  <span className="text-[10px] font-mono tracking-wider text-zinc-500 bg-zinc-900/80 px-2 py-0.5 rounded-md border border-white/5 group-hover/item:border-emerald-500/20 group-hover/item:text-emerald-400 transition-all">
                    {tech.type.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
