import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CTAButton from "./CTAButton";
import GetStarted from "./LetsChart";
import logo from "../assets/images/WO.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for luxury feel
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Me", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
  ];

  const handleNavClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 px-6 
        ${scrolled ? "py-3 bg-background/80 backdrop-blur-lg border-b border-surface-dim" : "py-6 bg-transparent"}`}
      >
        <div className="max-w-[1120px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="Logo" className="h-7 w-auto" />
          </Link>

          {/* Desktop Navigation - Glass Pill Design */}
          <nav className="hidden md-lg:flex items-center border border-surface-dim bg-surface-muted/20 backdrop-blur-md rounded-full px-2 py-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`font-generalsans text-bodySm px-5 py-2 rounded-full transition-all duration-300 relative group
                    ${isActive ? "text-brand-primary" : "text-neutral-muted hover:text-neutral-default"}`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA - Desktop */}
          <div className="hidden md-lg:block">
            <CTAButton text="Let's Chat" onClick={() => setShowModal(true)} />
          </div>

          {/* Hamburger Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md-lg:hidden relative z-50 p-2 text-neutral-default"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : "w-4"}`} />
              <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2.5" : "w-5"}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay approach */}
        <div className={`fixed inset-0 bg-background/98 backdrop-blur-xl transition-transform duration-500 ease-in-out md-lg:hidden
          ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6 text-center">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                style={{ transitionDelay: `${index * 50}ms` }}
                className={`text-h2 font-satoshi transition-all
                  ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                  ${location.pathname === item.path ? "text-brand-primary" : "text-neutral-default"}`}
              >
                {item.name}
              </button>
            ))}
            <div className={`pt-6 w-full max-w-xs transition-all duration-500 delay-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}>
              <CTAButton text="Let's Chat" fullWidth onClick={() => { setShowModal(true); setMenuOpen(false); }} />
            </div>
          </div>
        </div>
      </header>

      {showModal && <GetStarted isOpen={showModal} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Header;