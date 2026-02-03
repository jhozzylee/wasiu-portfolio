import React, { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Briefcase, Layers, UserPlus, TrendingUp, Users } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, link }) => (
  <div className="group border border-surface-dim p-8 rounded-[32px] bg-surface-muted/10 flex flex-col transition-all duration-500 hover:border-brand-primary/40 hover:bg-surface-muted/20">
    {/* Icon & Title Row */}
    <div className="flex flex-col gap-6 mb-6">
      <div className="w-16 h-16 rounded-2xl bg-surface-muted flex items-center justify-center group-hover:bg-brand-primary transition-all duration-500">
        <Icon className="w-8 h-8 text-brand-primary group-hover:text-background" strokeWidth={1.5} />
      </div>
      <h3 className="text-h3 font-satoshi text-neutral-default group-hover:text-brand-primary transition-colors">
        {title}
      </h3>
    </div>

    <p className="text-body text-neutral-muted mb-8 leading-relaxed">
      {description}
    </p>

    {/* Button - Aligned to bottom */}
    <Link
      to={link} 
      className="mt-auto group/btn flex items-center justify-between w-full pl-6 pr-2 py-2 rounded-full border border-surface-dim text-btn text-neutral-default transition-all hover:border-brand-primary hover:text-brand-primary"
    >
      <span className="font-generalsans">Learn more</span>
      <div className="bg-surface-dim rounded-full p-2 flex items-center justify-center group-hover/btn:bg-brand-primary transition-all duration-300">
        <ArrowRight className="w-4 h-4 text-background" />
      </div>
    </Link>
  </div>
);

const ExpertiseSection = () => {
  const services = [
    {
      icon: Calendar,
      title: "Executive Scheduling",
      link: "/services/scheduling", 
      description: "Time is money, and I make sure leaders spend both wisely. I handle calendars, priorities, and scheduling so executives stay focused on what truly matters.",
    },
    {
      icon: Briefcase,
      title: "HR Strategy & Policy",
      link: "/services/hr-strategy",
      description: "I help businesses design clear, people-focused HR strategies and policies that create structure without stifling flexibility.",
    },
    {
      icon: Layers,
      title: "Admin Coordination",
      link: "/services/admin",
      description: "Behind every smooth-running business is strong operational support. I take care of the details from organizing workflows to managing processes.",
    },
    {
      icon: UserPlus,
      title: "Talent Acquisition",
      link: "/services/talent",
      description: "Finding and keeping the right talent is tough — I make it seamless. From crafting job descriptions to onboarding new hires.",
    },
    {
      icon: TrendingUp,
      title: "Productivity & Engagement",
      link: "/services/productivity",
      description: "Work isn’t just about getting things done — it’s about keeping people motivated. I design initiatives that improve performance and retention.",
    },
    {
      icon: Users,
      title: "Employee Relations",
      link: "/services/relations",
      description: "I bridge the gap between leadership and staff by fostering open communication, resolving conflicts, and building trust.",
    },
  ];

  return (
    <section className="bg-background text-neutral-default font-generalsans py-24 lg:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-brand-primary" />
              <p className="uppercase tracking-[0.2em] text-xs font-bold text-brand-primary">Services</p>
            </div>
            <h2 className="text-h2 md:text-h1 font-satoshi leading-tight">
              What I Can <span className="text-brand-primary italic">Do for You</span>
            </h2>
          </div>
          <p className="text-bodyLg text-neutral-muted max-w-[320px] md:text-right pb-2">
            From streamlining operations to keeping teams motivated.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ExpertiseSection);