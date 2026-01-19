import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import CTAButton from "./CTAButton";
import GetStarted from "./LetsChart";
import logo from "../assets/images/WO.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation items
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

  const handleModalOpen = () => {
    setShowModal(true);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="bg-background py-4 px-4 fixed top-0 left-0 z-50 w-full shadow-sm">
        <div className="max-w-[1120px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-6 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md-lg:flex border border-neutral-default/20 bg-neutral-default/10 rounded-full p-2 space-x-6">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`font-generalsans text-body px-6 py-2 rounded-full transition-all duration-200 ease-in-out
                    ${
                      isActive
                        ? "text-brand-primary border-b border-brand-primary"
                        : "text-neutral-default border-b border-transparent hover:text-neutral-default/50 hover:border-brand-primary/50"
                    }`}
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md-lg:block">
            <CTAButton text="Let's Chat" onClick={handleModalOpen} />
          </div>

          {/* Hamburger Menu Toggle */}
          <div className="md-lg:hidden z-50">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-neutral-default focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md-lg:hidden mt-4 px-1 space-y-4">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  className={`block w-full text-left text-[16px] font-light py-2 transition-all duration-200
                    ${
                      isActive
                        ? "text-brand-primary"
                        : "text-neutral-default hover:text-neutral-default/50"
                    }`}
                >
                  {item.name}
                </button>
              );
            })}
            <div className="pt-2">
              <CTAButton text="Let's Chat" fullWidth onClick={handleModalOpen} />
            </div>
          </div>
        )}
      </header>

      {/* GetStarted Modal */}
      {showModal && (
        <GetStarted isOpen={showModal} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default Header;
