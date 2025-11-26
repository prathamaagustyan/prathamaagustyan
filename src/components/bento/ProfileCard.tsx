import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter, Instagram, FileText } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="flex flex-col justify-between h-full w-full p-6 md:p-8 relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-950/40 backdrop-blur-xl">
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="flex items-start justify-between">
        <div className="relative group">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-800/80 group-hover:border-emerald-500/50 transition-colors">
           
            <Image
              src="/prathama.jpg"
              alt="Prathama Agustyan"
              width={100}
              height={100}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-4 border-zinc-900 rounded-full">
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75"></span>
          </div>
        </div>

        <SocialButton 
          href="/CV Prathama Agustyan Zuhri.pdf" 
          icon={<FileText className="w-4 h-4" />} 
          label="Download CV" 
        />
      </div>

      <div className="flex-grow flex flex-col justify-center py-6">
        <h2 className="text-3xl font-bold text-zinc-100 tracking-tight">
          Prathama Agustyan
        </h2>
        <p className="text-emerald-400 font-medium mt-1">Website Developer</p>
        <p className="text-zinc-400 text-sm mt-4 leading-relaxed max-w-sm">
          I build secure, efficient websites and continuously expand my skills with modern technologies.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <SocialButton
          href="https://github.com/prathamaagustyan"
          icon={<Github className="w-4 h-4" />}
          label="Github"
        />

        <SocialButton
          href="https://www.linkedin.com/in/prathama-agustyan/"
          icon={<Linkedin className="w-4 h-4" />}
          label="LinkedIn"
        />

        <SocialButton
          href="https://x.com/prathamaag"
          icon={<Twitter className="w-4 h-4" />}
          label="X (Twitter)"
        />

        <SocialButton
          href="https://www.instagram.com/prathamaagzh/"
          icon={<Instagram className="w-4 h-4" />}
          label="Instagram"
        />
      </div>
    </div>
  );
}

function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Button
      size="icon" 
      variant="outline"
      className="rounded-full border-zinc-800 bg-zinc-900/30 text-zinc-400 hover:bg-zinc-800 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300"
      asChild
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        {icon}
      </a>
    </Button>
  );
}
