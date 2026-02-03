"use client";

import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { X } from "lucide-react";

const BookCall = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) return;

    (async function () {
      const cal = await getCalApi({ namespace: "booking" });
      cal("ui", {
        theme: "dark",
        layout: "month_view",
        hideEventTypeDetails: true,
        cssVarsPerTheme: {
          dark: {
            "cal-brand": "#D4AF37", // Your Gold/Brand color
            "cal-text": "#EDEDED",
            "cal-bg": "#171717",
            "cal-border-radius": "24px",
          },
        },
      });
    })();
  }, [isOpen]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-in fade-in duration-300">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md" 
        onClick={onClose} 
      />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-[#171717] border border-neutral-800 rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Header Section */}
        <div className="p-6 md:p-10 pb-0 flex justify-between items-start">
          <div className="space-y-2">
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-[10px] uppercase block">
              Direct Access
            </span>
            <h2 className="text-2xl md:text-3xl font-satoshi font-bold text-white leading-tight">
              Schedule a Call, Simplify Your Success
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-neutral-800/50 text-white hover:bg-neutral-800 transition-all group"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Calendar Wrapper */}
        <div className="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar min-h-[600px]">
          <div className="h-full w-full rounded-2xl overflow-hidden border border-neutral-800/50">
            <Cal
              namespace="booking"
              calLink="wasiuayoola/booking"
              style={{ width: "100%", height: "100%" }}
              config={{
                layout: "month_view",
                theme: "dark",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCall;