import React, { memo } from "react";

const Recognition = () => {
  const features = [
    {
      title: "5+ Years",
      description: "HR and executive support that drives success.",
    },
    {
      title: "Result Oriented",
      description: "Boosting trust, productivity, and keeping teams engaged.",
    },
    {
      title: "Operational Excellence",
      description: "Streamlining schedules, projects, and business operations.",
    },
    {
      title: "Trusted Partner",
      description: "Reliable support that drives growth and peace of mind.",
    },
  ];

  return (
    <div className="bg-background text-neutral-default font-generalsans">
      
      {/* Features + Recognition Section */}
      <section className="py-24 max-w-[1120px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Feature Cards (Bento Style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="p-8 border border-surface-dim bg-surface-muted/20 rounded-[32px] flex flex-col gap-4 hover:border-brand-primary/40 transition-all duration-500 group"
            >
              <h4 className="text-h3 text-brand-primary font-satoshi group-hover:translate-x-1 transition-transform">
                {feature.title}
              </h4>
              <p className="text-bodySm text-neutral-muted leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Recognition & Impact */}
        <div className="flex flex-col gap-6 order-1 lg:order-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-[2px] bg-brand-primary" />
            <p className="uppercase tracking-[0.2em] text-[10px] font-bold text-brand-primary">
              Impact
            </p>
          </div>
          <h2 className="text-h2 font-satoshi leading-tight">
            Recognition & <span className="text-brand-primary italic">Impact</span>
          </h2>
          <p className="text-bodyLg text-neutral-muted leading-relaxed">
            Colleagues and executives often describe Wasiu as the <span className="text-neutral-default font-medium italic">‘calm in the storm’</span> — someone who 
            brings clarity, organization, and a human touch to complex situations. 
          </p>
          <p className="text-body text-neutral-muted/80 leading-relaxed">
            Over the years, his support has helped leadership teams save hundreds of hours, simplify operations, and 
            stay focused on growth. Known for being dependable, discreet, and solutions-driven, Wasiu 
            has built a reputation as the go-to partner for executives who want less chaos and more progress.
          </p>
        </div>
      </section>

      {/* Empowering Workplaces Section */}
      <section className="py-24 bg-surface-muted/10 border-y border-surface-dim">
        <div className="max-w-[1120px] mx-auto px-6 text-center">
          <h2 className="text-h2 font-satoshi mb-8 max-w-4xl mx-auto leading-tight">
            Empowering Workplaces Through <br className="hidden md:block" />
            <span className="text-brand-primary">People-First Leadership</span>
          </h2>
          <p className="text-bodyLg text-neutral-muted max-w-3xl mx-auto leading-relaxed italic">
            "Wasiu believes every workplace can be both productive and human. He champions clarity, 
            trust, and efficiency as the foundation of organizational success."
          </p>
        </div>
      </section>

      {/* Life Beyond Work Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1120px] mx-auto bg-surface-muted rounded-[48px] p-8 md:p-16 border border-surface-dim relative overflow-hidden">
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[100px] -z-10" />
          
          <div className="max-w-3xl">
            <h2 className="text-h2 font-satoshi text-neutral-default mb-8">
              Life Beyond <span className="text-brand-primary italic">Work</span>
            </h2>
            <p className="text-bodyLg text-neutral-muted leading-relaxed mb-6">
              When he’s not streamlining operations or solving business challenges, Wasiu enjoys exploring new ideas, 
              mentoring young professionals, and finding balance through family and community. 
            </p>
            <p className="text-bodyLg text-neutral-muted leading-relaxed">
              His passion for people extends beyond the office, driving him to create a positive impact wherever he goes.
            </p>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default memo(Recognition);