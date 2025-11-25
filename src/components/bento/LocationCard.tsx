"use client";

import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils"; 

const globalStyle = `
  .leaflet-control-attribution { display: none !important; }
`;

const SHARED_GLASS_STYLE =
  "bg-zinc-950/40 backdrop-blur-md border border-white/10 shadow-lg";

const createCustomIcon = () => {
  return L.divIcon({
    className: "bg-transparent",
    html: `
      <div class="relative flex h-10 w-10 items-center justify-center">
        <span class="absolute inline-flex h-full w-full rounded-full bg-emerald-500/20 border border-emerald-500/30"></span>
        <span class="relative inline-flex h-4 w-4 rounded-full bg-emerald-500 border-2 border-white shadow-2xl shadow-black"></span>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

const POSITION: [number, number] = [-6.256775, 107.078076];

function CustomControls() {
  const map = useMap();

  const hoverStyle =
    "hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-zinc-950/60 transition-all duration-300";

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          map.zoomOut();
        }}
        className={cn(
          "absolute bottom-5 left-5 z-[400] w-10 h-10 rounded-full text-white flex items-center justify-center group",
          SHARED_GLASS_STYLE, 
          hoverStyle 
        )}
        aria-label="Zoom Out"
      >
        <Minus className="w-5 h-5" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          map.zoomIn();
        }}
        className={cn(
          "absolute bottom-5 right-5 z-[400] w-10 h-10 rounded-full text-white flex items-center justify-center group",
          SHARED_GLASS_STYLE,
          hoverStyle
        )}
        aria-label="Zoom In"
      >
        <Plus className="w-5 h-5" />
      </button>
    </>
  );
}

function ResizeMap() {
  const map = useMap();
  useEffect(() => {
    map.invalidateSize();
  }, [map]);
  return null;
}

export default function LocationCard() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full bg-zinc-900 animate-pulse flex items-center justify-center">
        <span className="text-zinc-600 text-xs">Loading Map...</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl group">
      <style>{globalStyle}</style>

      <div className="absolute inset-0 z-0 h-full w-full grayscale-[0.2] contrast-[1.1] hover:grayscale-0 transition-all duration-700">
        <MapContainer
          center={POSITION}
          zoom={13}
          zoomControl={false}
          scrollWheelZoom={false}
          dragging={false}
          doubleClickZoom={false}
          touchZoom={false}
          style={{ height: "100%", width: "100%" }}
          className="bg-zinc-900"
        >
          <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          <Marker position={POSITION} icon={createCustomIcon()}></Marker>
          <CustomControls />
          <ResizeMap />
        </MapContainer>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/80 via-transparent to-zinc-950/20 pointer-events-none z-10" />

      <div className="relative z-20 h-full p-5 pointer-events-none flex flex-col items-start gap-3">
        <div
          className={cn(
            "px-3 py-1 rounded-full", 
            SHARED_GLASS_STYLE 
          )}
        >
          <h3 className="text-white text-[10px] font-bold uppercase tracking-wider">
            Location
          </h3>
        </div>

        <div className="space-y-1">
          <p className="text-2xl font-bold text-white drop-shadow-md leading-none">
            Bekasi, ID
          </p>
          <p className="text-xs text-zinc-300 font-medium max-w-[160px] leading-tight opacity-90 drop-shadow-md">
            Open to remote & relocation opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
