import React from "react";
// ✅ Keep your imports as they are
import { ReactComponent as Briefcase } from "../assets/icons/icon-briefcase.svg";
import { ReactComponent as Calendar } from "../assets/icons/icon-calendar.svg";
import { ReactComponent as Layers } from "../assets/icons/icon-layers.svg";
import { ReactComponent as Trending } from "../assets/icons/icon-trending-up.svg";
import { ReactComponent as Users } from "../assets/icons/icon-users.svg";
import { ReactComponent as User } from "../assets/icons/icon-user-plus.svg";

export default function ExpertiseSection() {
  
  const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="group relative bg-surface-light border border-surface-dim p-8 rounded-3xl transition-all duration-500 hover:shadow-2xl hover:shadow-brand-primary/5 hover:-translate-y-2 overflow-hidden">
      {/* Decorative background blur on hover */}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl group-hover:bg-brand-primary/10 transition-colors duration-500" />
      
      {/* Icon Container - Reduced size for better balance */}
      <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
        <Icon className="w-8 h-8 stroke-[1.5]" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-satoshi font-bold text-neutral-default mb-3 group-hover:text-brand-primary transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-body text-neutral-600 leading-relaxed">
        {description}
      </p>

      {/* Subtle Bottom Border Accent */}
      <div className="absolute bottom-0 left-0 h-1 bg-brand-primary w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );

  const services = [
    { icon: Calendar, title: "Executive Scheduling", description: "Managing complex calendars, high-level meetings, and logistics to keep leadership focused on the big picture." },
    { icon: Briefcase, title: "HR Strategy & Policy", description: "Streamlining HR processes with clear, modern policies that align perfectly with your company's long-term goals." },
    { icon: Layers, title: "Admin Coordination", description: "Architecting daily operations to ensure workflows are not just functional, but highly efficient and scalable." },
    { icon: User, title: "Talent Acquisition", description: "Identifying and onboarding the right culture-fit talent to fuel sustainable business growth and development." },
    { icon: Trending, title: "Productivity & Engagement", description: "Designing workplace systems that boost overall performance while keeping teams motivated and inspired." },
    { icon: Users, title: "Employee Relations", description: "Fostering a transparent work culture and resolving complex interpersonal issues with empathy and structure." },
  ];

  return (
    <section className="bg-background text-neutral-default py-24 font-generalsans">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[2px] w-12 bg-brand-primary"></span>
              <span className="uppercase tracking-[0.2em] text-sm font-bold text-brand-primary">
                My Specialization
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-satoshi font-bold leading-tight">
              Strategic <span className="text-brand-primary">Solutions</span> <br /> 
              Tailored For Growth
            </h2>
          </div>
          <p className="text-neutral-500 md:max-w-[300px] text-sm mb-2">
            Providing high-level support and operational excellence to modern organizations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}