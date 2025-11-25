"use client"; 

import dynamic from "next/dynamic";
import React from "react";

const LocationCard = dynamic(() => import("./LocationCard"), {
  ssr: false, 
  loading: () => (
    <div className="w-full h-full bg-zinc-900 animate-pulse rounded-3xl flex items-center justify-center">
      <span className="text-zinc-600 text-xs font-medium">Loading Map...</span>
    </div>
  ),
});

export default function MapWrapper() {
  return <LocationCard />;
}