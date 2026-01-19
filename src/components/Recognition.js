import React from "react";


const Recognition = () => {
  

  const features = [
    {
      title: "5+ Years",
      description: "HR and executive support that drives success.",
    },
    {
      title: "Result Oriented",
      description: "Boosting trust,  productivity, keeping teams engaged.",
    },
    {
      title: "Efficiency Ninja",
      description: "Streamlining schedules, projects, and operations.",
    },
    {
      title: "Trusted Partner",
      description: "Reliable support that drives growth and peace of mind.",
    },
  ];

  return (
    <div className="bg-background text-neutral-default">
      {/* Features + Recognition */}

      <section className="py-20 max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 grid grid-cols-1 lg:grid-cols-2 gap-12">
  {/* Left Column: Features */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[32px] order-2 lg:order-1 justify-center">
    {features.map((feature, idx) => (
      <div
        key={idx}
        className="w-[256px] mx-auto px-4 py-4 border border-surface-dim rounded-xl flex flex-col gap-3"
      >
        <h4 className="text-h3 text-brand-primary font-satoshi">{feature.title}</h4>
        <p className="text-bodySm text-neutral">{feature.description}</p>
      </div>
    ))}
  </div>

  {/* Right Column: Recognition & Impact */}
  <div className="flex flex-col gap-4 order-1 lg:order-2 text-center lg:text-left">
    <h2 className="text-h2 font-satoshi">
      Recognition & <span className="text-brand-primary">Impact</span>
    </h2>
    <p className="text-bodyLg text-neutral">
    Colleagues and executives often describe Wasiu as the ‘calm in the storm’ — someone who 
    brings clarity, organization, and a human touch to complex situations. Over the years, 
    his support has helped leadership teams save hundreds of hours, simplify operations, and 
    stay focused on growth. Known for being dependable, discreet, and solutions-driven, Wasiu 
    has built a reputation as the go-to partner for executives who want less chaos and more progress.
    </p>
  </div>
</section>

      {/* Rooted in Community */}
      <section className="py-10 text-center max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col gap-6">
        <h2 className="text-h2 font-satoshi">
          Empowering Workplaces Through <span className="text-brand-primary">People-First Leadership</span>
        </h2>
        <p className="text-bodyLg text-neutral">
        Wasiu believes every workplace can be both productive and human. With over three years of experience supporting 
        executives and guiding teams, he champions clarity, trust, and efficiency as the foundation of organizational success. 
        His work ensures leaders can focus on vision while employees feel valued and engaged.
        </p>
      </section>

      
      {/* CTA Section */}
      <section className="py-20 text-center flex flex-col gap-6 px-4 sm:px-6 lg:px-4 xl:px-0 bg-surface">
        <h2 className="text-h2 font-satoshi text-neutral">
          Life Beyond Work
        </h2>
        <p className="text-bodyLg text-neutral max-w-[1120px] mx-auto">
          When he’s not streamlining operations or solving business challenges, Wasiu enjoys exploring new ideas, 
          mentoring young professionals, and finding balance through family and community. His passion for people 
          extends beyond the office, driving him to create positive impact wherever he goes.
        </p>
      </section>
    </div>
  );
};

export default Recognition;
