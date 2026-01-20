import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// SVG Icons
import { ReactComponent as Briefcase } from "../assets/icons/icon-briefcase.svg";
import { ReactComponent as Calendar } from "../assets/icons/icon-calendar.svg";
import { ReactComponent as Layers } from "../assets/icons/icon-layers.svg";
import { ReactComponent as Trending } from "../assets/icons/icon-trending-up.svg";
import { ReactComponent as Users } from "../assets/icons/icon-users.svg";
import { ReactComponent as User } from "../assets/icons/icon-user-plus.svg";

export default function ExpertiseSection() {
  
  // 🔹 Updated Reusable Card Component to accept "link" prop
  const ServiceCard = ({ icon: Icon, title, description, link }) => (
    <div className="border border-surface-dim p-6 rounded-2xl max-w-[352px] w-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-[88px] h-[88px] text-brand-primary transition-colors duration-300" />
        <h3 className="text-h3 font-satoshi text-neutral-default">
          {title}
        </h3>
      </div>

      <p className="text-bodyLg text-neutral mb-6">
        {description}
      </p>

      {/* 🔹 Changed to link to the specific service path */}
      <Link
        to={link} 
        aria-label={`View ${title}`}
        className="group mt-auto items-center justify-between inline-flex items-center gap-4 font-generalsans text-btn text-neutral-default px-4 py-[10px] rounded-full border border-neutral-default transition-all hover:border-brand-primary hover:text-brand-primary"
      >
        Learn more
        <span className="bg-neutral-default rounded-full p-2 flex items-center justify-center group-hover:bg-brand-primary transition-all duration-200">
          <ArrowRight className="w-4 h-4 text-background" />
        </span>
      </Link>
    </div>
  );

  // 🔹 Added unique "link" to each Service Data object
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
      icon: User,
      title: "Talent Acquisition",
      link: "/services/talent",
      description: "Finding and keeping the right talent is tough — I make it seamless. From crafting job descriptions to onboarding new hires.",
    },
    {
      icon: Trending,
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
    <section className="bg-background text-neutral-default py-20 font-generalsans pt-36">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-h2 font-satoshi mb-4">What I Can Do for You</h2>
          <p className="text-bodyLg text-neutral-muted">From streamlining operations to keeping teams motivated...</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}