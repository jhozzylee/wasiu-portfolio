import React from "react";

// ✅ Import SVGs as React components
import { ReactComponent as Briefcase } from "../assets/icons/icon-briefcase.svg";
import { ReactComponent as Calendar } from "../assets/icons/icon-calendar.svg";
import { ReactComponent as Layers } from "../assets/icons/icon-layers.svg";
import { ReactComponent as Trending } from "../assets/icons/icon-trending-up.svg";
import { ReactComponent as Users } from "../assets/icons/icon-users.svg";
import { ReactComponent as User } from "../assets/icons/icon-user-plus.svg";

export default function ExpertiseSection() {
  // 🔹 Reusable Card Component
  const ServiceCard = ({ icon: Icon, title, description }) => (
    <div className="border border-surface-dim p-6 rounded-2xl max-w-[352px] w-full">
      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-[88px] h-[88px] text-brand-primary transition-colors duration-300" />
        <h3 className="text-h3 font-satoshi text-neutral-default">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-bodyLg text-neutral">
        {description}
      </p>
    </div>
  );

  // 🔹 Services Data
  const services = [
    {
      icon: Calendar,
      title: "Executive Scheduling",
      description:
        "Managing calendars, meetings, and travel to keep leadership focused.",
    },
    {
      icon: Briefcase,
      title: "HR Strategy & Policy",
      description:
        "Streamlining HR processes with clear policies that align with company goals.",
    },
    {
      icon: Layers,
      title: "Admin Coordination",
      description:
        "Coordinating daily operations to ensure smooth and efficient workflows.",
    },
    {
      icon: User,
      title: "Talent Acquisition",
      description:
        "Finding and onboarding the right talent to fuel business growth & development.",
    },
    {
      icon: Trending,
      title: "Productivity & Engagement",
      description:
        "Creating systems that boost performance and keep teams motivated.",
    },
    {
      icon: Users,
      title: "Employee Relations",
      description:
        "Fostering a positive work environment and resolving issues effectively.",
    },
  ];

  return (
    <section className="bg-background text-neutral-default py-20 font-generalsans">
      <div className="max-w-[1120px] mx-auto px-6">
        {/* Section Heading */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-1 bg-brand-primary" />
          <p className="uppercase tracking-wide text-bodyLg">
            My Specialization
          </p>
        </div>

        <h2 className="text-h2 font-satoshi mb-12">
          <span className="text-brand-primary">Services</span> I Provide
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-space-between">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
