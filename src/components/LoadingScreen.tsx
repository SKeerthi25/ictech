"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${
          loading ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className={`flex flex-col items-center transform transition-transform duration-1000 ${loading ? "scale-100" : "scale-110"}`}>
          <div className="relative w-32 h-32 mb-8 animate-pulse">
            <Image 
              src="/logo.png" 
              alt="IC TECH Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-widest uppercase">
            IC TECH<span className="text-blue-500">LTD</span>
          </h1>
          <div className="mt-8 w-48 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 animate-[loading_2s_ease-in-out_forwards]" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </>
  );
}
