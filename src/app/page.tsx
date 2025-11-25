"use client";

import React, { useState } from "react";
import ProfileCard from "@/components/bento/ProfileCard";
import StackCard from "@/components/bento/StackCard";
import ProjectCard from "@/components/bento/ProjectCard";
import MapWrapper from "@/components/bento/MapWrapper";
import StatusCard from "@/components/bento/StatusCard";
import SpotifyCard from "@/components/bento/SpotifyCard";
import Navbar from "@/components/ui/Navbar";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "SMKN 1 Cikarang Barat Website",
    description:
      "Comprehensive dashboard for managing products, orders, and analytics.",
    image: "/project-saciba.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    tags: ["PHP", "MySQL", "JavaScript"],
    links: { demo: "https://smkn1cikarangbarat.sch.id/", repo: "#" },
  },
  {
    title: "SMKS Dharma Paramitha Website",
    description: "Responsive chat interface with OpenAI streaming support.",
    image: "/project-smkdharma.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    tags: ["PHP", "MySQL", "JavaScript"],
    links: { demo: "https://smksdharmaparamitha.sch.id/", repo: "#" },
  },
  {
    title: "AbsenSACIBA",
    description: "Centralized API documentation platform.",
    image: "/project-absensaciba.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    tags: ["PHP", "MySQL", "Chart.js"],
    links: {
      demo: "https://absensaciba.systechkreasimediatama.my.id/",
      repo: "#",
    },
  },
  {
    title: "E-Rapor SACIBA",
    description:
      "A platform for travelers to document trips with map integration.",
    image: "/project-erapor.png",
    video:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    tags: ["PHP", "MySQL", "Datatables"],
    links: { demo: "https://erapor.systechkreasimediatama.my.id/", repo: "#" },
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const getItemClass = (category: string) => {
    if (activeTab === "all") return "opacity-100 blur-0 scale-100";

    if (category === "always-visible") return "opacity-100 blur-0 scale-100";

    if (category === activeTab) return "opacity-100 blur-0 scale-100";

    return "opacity-20 blur-sm scale-95 pointer-events-none grayscale";
  };

  const wrapClass = "transition-all duration-500 ease-in-out h-full";

  return (
    <main className="min-h-screen p-4 md:p-8 lg:p-12 max-w-7xl mx-auto space-y-8 pb-20">
      <div className="pt-4 md:pt-0 sticky top-4 z-50">
        <Navbar activeTab={activeTab} onChange={setActiveTab} />
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[180px]">
        <div
          className={cn(
            "col-span-1 md:col-span-2 row-span-2",
            wrapClass,
            getItemClass("always-visible")
          )}
        >
          <ProfileCard />
        </div>

        <div
          className={cn(
            "col-span-1 row-span-1 min-h-[180px]",
            wrapClass,
            getItemClass("profile")
          )}
        >
          <MapWrapper />
        </div>

        <div
          className={cn(
            "col-span-1 row-span-2 min-h-[180px]",
            wrapClass,
            getItemClass("stack")
          )}
        >
          <StackCard />
        </div>

        <div
          className={cn(
            "col-span-1 row-span-1 min-h-[180px]",
            wrapClass,
            getItemClass("profile")
          )}
        >
          <StatusCard />
        </div>

        <div
          className={cn(
            "col-span-1 row-span-1 min-h-[180px]",
            wrapClass,
            getItemClass("profile")
          )}
        >
          <SpotifyCard />
        </div>

        <div
          className={cn(
            "col-span-1 md:col-span-2 row-span-2",
            wrapClass,
            getItemClass("projects")
          )}
        >
          <ProjectCard data={projects[0]} />
        </div>

        <div
          className={cn(
            "col-span-1 row-span-2",
            wrapClass,
            getItemClass("projects")
          )}
        >
          <ProjectCard data={projects[1]} />
        </div>

        <div
          className={cn(
            "col-span-1 row-span-1 min-h-[180px]",
            wrapClass,
            getItemClass("projects")
          )}
        >
          <ProjectCard data={projects[2]} />
        </div>

        <div
          className={cn(
            "col-span-1 md:col-span-2 row-span-1",
            wrapClass,
            getItemClass("projects")
          )}
        >
          <ProjectCard data={projects[3]} />
        </div>

        <div
          className={cn(
            "col-span-1 md:col-span-2 h-full min-h-[180px]",
            wrapClass,
            getItemClass("always-visible")
          )}
        >
          <a
            href="mailto:prathamaagustyan@gmail.com"
            className="bg-zinc-100 text-zinc-950 rounded-3xl p-6 flex items-center justify-between hover:scale-[1.01] transition-transform cursor-pointer group h-full w-full"
          >
            <div>
              <h3 className="text-2xl font-bold">Let's work together</h3>
              <p className="text-zinc-600">Have a project in mind?</p>
            </div>
            <div className="w-12 h-12 bg-zinc-950 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="text-white w-6 h-6" />
            </div>
          </a>
        </div>
      </section>
    </main>
  );
}
