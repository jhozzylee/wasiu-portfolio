import React, { memo } from "react";
import { ReactComponent as MagnifyingGlass } from "../assets/icons/Search_Magnifying_Glass.svg";
import { ReactComponent as Clipboard } from "../assets/icons/Clipboard.svg";
import { ReactComponent as Cog } from "../assets/icons/Settings.svg";
import { ReactComponent as Headphones } from "../assets/icons/Headphones.svg";

const WorkProcess = () => {
  const steps = [
    {
      title: "Discovery Call",
      description: "We’ll chat about your goals, challenges, and what’s slowing your team down. Quick, casual, and all about you.",
      icon: <MagnifyingGlass className="w-7 h-7" />,
    },
    {
      title: "Strategy Setup",
      description: "I’ll map out a plan, whether it’s hiring, engagement, or operations, so we know exactly where to start.",
      icon: <Clipboard className="w-7 h-7" />,
    },
    {
      title: "Flawless Execution",
      description: "From calendars to culture, I put the plan into action, making sure nothing falls through the cracks.",
      icon: <Cog className="w-7 h-7" />,
    },
    {
      title: "Ongoing Support",
      description: "I don’t just set things up and disappear — I stick around to refine, adjust, and keep things running smoothly.",
      icon: <Headphones className="w-7 h-7" />,
    },
  ];

  return (
    <section className="bg-background text-neutral-default py-24 lg:py-32 font-generalsans overflow-hidden">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-brand-primary" />
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-brand-primary">How I work</p>
            <div className="w-8 h-[2px] bg-brand-primary" />
          </div>
          <h2 className="text-h2 md:text-h1 font-satoshi text-center leading-tight">
            My <span className="text-brand-primary italic">Working Process</span>
          </h2>
        </div>

        {/* Steps Container */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0">
          
          {/* Desktop Connecting Line */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[1px] border-t border-dashed border-surface-dim -z-0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center px-4 group">
              
              {/* Step Circle */}
              <div className="relative mb-8">
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-surface-muted border border-surface-dim flex items-center justify-center text-[10px] font-bold text-brand-primary z-20 group-hover:bg-brand-primary group-hover:text-background transition-colors">
                  0{idx + 1}
                </div>

                {/* Main Icon Container */}
                <div className="w-[88px] h-[88px] rounded-full bg-surface-muted border border-surface-dim flex items-center justify-center text-brand-primary group-hover:border-brand-primary/50 group-hover:scale-105 transition-all duration-500 shadow-xl">
                  {step.icon}
                </div>
              </div>

              {/* Text Content */}
              <div className="text-center">
                <h3 className="text-h3 font-satoshi mb-3 group-hover:text-brand-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-bodySm text-neutral-muted leading-relaxed max-w-[240px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(WorkProcess);