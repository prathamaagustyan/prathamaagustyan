"use client";

import { SiSpotify } from "react-icons/si";
import Image from "next/image";

const customStyle = `
  @keyframes spin-vinyl {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  .animate-vinyl {
    animation: spin-vinyl 4s linear infinite; /* Sedikit lebih ngebut biar kerasa energinya */
  }

  @keyframes pulse-beat {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.2); opacity: 0.8; }
  }
  .animate-beat {
    animation: pulse-beat 2s ease-in-out infinite;
  }

  @keyframes eq-bounce {
    0%, 100% { height: 4px; }
    50% { height: 16px; }
  }
  .animate-eq {
    animation: eq-bounce 1s ease-in-out infinite;
  }
  /* Delay biar gerakannya random ga barengan */
  .eq-1 { animation-delay: 0s; }
  .eq-2 { animation-delay: 0.2s; }
  .eq-3 { animation-delay: 0.4s; }
  .eq-4 { animation-delay: 0.1s; }
`;

export default function SpotifyCard() {
  return (
    <a
      href="https://open.spotify.com/track/0mPYjKXaHYMPhtq0hCIkgn?si=ee1eb8c7e6874fe1"
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex flex-col items-center justify-center h-full w-full p-4 overflow-hidden bg-zinc-900/50 border border-zinc-800/50 rounded-3xl group hover:border-emerald-500/50 hover:bg-zinc-900/80 transition-all duration-500"
    >
      <style>{customStyle}</style>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl animate-beat pointer-events-none" />

      <div className="absolute flex gap-1 bottom-6 right-6 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-1 bg-emerald-500 rounded-full animate-eq eq-1" />
        <div className="w-1 bg-emerald-500 rounded-full animate-eq eq-2" />
        <div className="w-1 bg-emerald-500 rounded-full animate-eq eq-3" />
        <div className="w-1 bg-emerald-500 rounded-full animate-eq eq-4" />
      </div>

      <div className="absolute top-5 left-5 z-20">
        <div className="bg-zinc-950/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md shadow-sm group-hover:scale-110 transition-transform">
          <SiSpotify className="w-4 h-4 text-[#1DB954]" />
        </div>
      </div>

      <div className="relative z-10 mt-1">
        <div className="relative w-24 h-24 rounded-full animate-vinyl shadow-2xl">
          <div className="absolute inset-0 rounded-full bg-[repeating-radial-gradient(#111_0px,#111_2px,#222_3px,#111_4px)]" />

          <div className="absolute inset-0 rounded-full bg-[conic-gradient(transparent_0deg,rgba(255,255,255,0.1)_45deg,transparent_90deg,rgba(255,255,255,0.1)_225deg,transparent_360deg)] z-10" />

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] rounded-full overflow-hidden border-[3px] border-zinc-900 z-20">
            <div className="absolute inset-0 z-30 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            <Image
              src="https://i.scdn.co/image/ab67616d0000b273ee26bd5ae483fc54e6ef9e74"
              alt="Album Art"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-black rounded-full border border-white/10 z-30 shadow-inner" />
        </div>
      </div>

      <div className="flex flex-col items-center text-center z-10 mt-4 w-full px-2">
        <div className="relative overflow-hidden w-full">
          <h3 className="text-zinc-100 font-bold text-xs leading-tight group-hover:text-[#1DB954] transition-colors line-clamp-1 w-full relative z-10">
            ADORE U
          </h3>
        </div>
        <p className="text-zinc-500 font-medium text-[10px] tracking-wider mt-1 group-hover:text-zinc-300 transition-colors">
          NMIXX
        </p>
      </div>
    </a>
  );
}
