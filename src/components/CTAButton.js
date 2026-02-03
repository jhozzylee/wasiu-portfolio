import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({ text, fullWidth = false, link, onClick }) => {
  const baseClasses = `bg-brand-primary font-generalsans text-btn text-surface-muted border border-transparent py-3 px-[40px] transition-all duration-200 
    hover:bg-brand-primary/20 hover:text-brand-primary hover:border hover:border-brand-primary
    ${fullWidth ? "w-full rounded-none px-11" : "rounded-[40px]"} 
    no-underline inline-block cursor-pointer`;

  // If a "link" is provided, use <Link>, otherwise use <button>
  if (link) {
    return (
      <Link to={link} className={baseClasses}>
        {text}
      </Link>
    );
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {text}
    </button>
  );
};

export default CTAButton;
