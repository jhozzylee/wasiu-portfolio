import React from "react";
import { ReactComponent as MagnifyingGlass } from "../assets/icons/Search_Magnifying_Glass.svg";
import { ReactComponent as Clipboard } from "../assets/icons/Clipboard.svg";
import { ReactComponent as Cog } from "../assets/icons/Settings.svg";
import { ReactComponent as Headphones } from "../assets/icons/Headphones.svg";

const WorkProcess = () => {
  const steps = [
    {
      title: "Discovery Call",
      description: "We’ll chat about your goals, challenges, and what’s slowing your team down. Quick, casual, and all about you.",
      icon: <MagnifyingGlass className="w-8 h-8 text-white stroke-current" />,
      number: "1",
    },
    {
      title: "Strategy Setup",
      description: "I’ll map out a  plan, whether it’s hiring, engagement, or operations, so we know exactly where to start.",
      icon: <Clipboard className="w-8 h-8 text-white stroke-current" />,
      number: "2",
    },
    {
      title: "Flawless Execution",
      description: "From calendars to culture, I put the plan into action, making sure nothing falls through the cracks.",
      icon: <Cog className="w-8 h-8 text-white stroke-current" />,
      number: "3",
    },
    {
      title: "Ongoing Support",
      description: "I don’t just set things up and disappear — I stick around to refine, adjust, and keep things running smoothly.",
      icon: <Headphones className="w-8 h-8 text-white stroke-current" />,
      number: "4",
    },
  ];

  return (
    <section className="bg-background text-neutral-default py-10">
      {/* Intro */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col items-center gap-4 mb-12">
      <div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-brand-primary" />
              <p className="uppercase tracking-wide text-center text-bodyLg">
                Work Process
              </p>
            </div>

            <h2 className="text-h2 font-satoshi text-center lg:text-left">
             My{" "}
              <span className="text-brand-primary">Working Process</span>
            </h2>
          </div>
          </div>

      {/* Steps */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center relative px-6"
            >
              {/* Icon with number badge */}
              <div className="relative">
                <div className="w-16 h-16 p-2 rounded-full bg-brand-primary flex items-center justify-center">
                  {step.icon}
                </div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-background border-neutral-default border flex items-center justify-center text-white text-xs">
                  {step.number}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-h3 font-satoshi mt-4">
                {step.title}
              </h3>
              <p className="text-body mt-2">{step.description}</p>

              {/* Horizontal line between steps (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-[170px] h-px bg-neutral-default z-0 translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
