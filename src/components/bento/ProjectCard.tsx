"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  video: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
}

export default function ProjectCard({ data }: { data: ProjectProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        videoRef.current.currentTime = 0;
        videoRef.current
          .play()
          .catch((e) => console.log("Autoplay prevented", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <div
      className="group relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-950/40 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 h-full w-full bg-zinc-900">
        <Image
          src={data.image}
          alt={data.title}
          fill
          className={cn(
            "object-cover transition-all duration-700 ease-in-out",
            isHovered ? "scale-105 opacity-0" : "scale-100 opacity-100"
          )}
        />

        <video
          ref={videoRef}
          src={data.video}
          loop
          muted
          playsInline
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        />

        <div
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative h-full flex flex-col justify-end p-6 z-20">
        <div className="absolute top-4 right-4 flex gap-2 translate-y-2.5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
          <Button
            size="icon"
            variant="outline"
            className="relative overflow-hidden rounded-full w-9 h-9 bg-zinc-950/30 backdrop-blur-xl border-white/20 text-zinc-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-110 transition-all duration-300 group"
            asChild
          >
            <a
              href={data.links.repo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4" />
            </a>
          </Button>

          <Button
            size="icon"
            variant="outline"
            className="relative overflow-hidden rounded-full w-9 h-9 bg-zinc-950/30 backdrop-blur-xl border-white/20 text-zinc-300 shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:bg-emerald-500 hover:text-white hover:border-emerald-500 hover:scale-110 transition-all duration-300 group"
            asChild
          >
            <a
              href={data.links.demo}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        <div className="space-y-3 transform transition-transform duration-500 group-hover:translate-y-[-5px]">
          <div className="flex flex-wrap gap-2 mb-1">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono font-medium tracking-wide text-zinc-300 bg-zinc-900/80 px-2 py-1 rounded-md border border-white/10 backdrop-blur-md group-hover:border-emerald-500/30 group-hover:text-emerald-300 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          <div>
            <h3 className="text-xl font-bold text-white mb-1 leading-tight group-hover:text-emerald-400 transition-colors duration-300">
              {data.title}
            </h3>
            <p className="text-sm text-zinc-400 line-clamp-2 group-hover:text-zinc-300 transition-colors">
              {data.description}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-emerald-500/0 rounded-3xl group-hover:border-emerald-500/50 transition-colors duration-500 pointer-events-none" />
    </div>
  );
}
