import React from "react";
import logo from "../assets/images/Logo_Footer.svg";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background text-neutral-muted font-generalsans pt-20 pb-10 px-6 border-t border-surface-dim">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-16">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          
          {/* Logo + Tagline */}
          <div className="flex flex-col gap-6 max-w-sm">
            <img src={logo} alt="Wasiu Ayoola" className="w-[180px] brightness-0 invert opacity-90" />
            <p className="text-bodyLg text-neutral-muted leading-relaxed">
              Executive Assistant & People Management Professional – Helping
              ambitious businesses scale through operational excellence.
            </p>
          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-16 md:gap-24">
            {/* Quick Links */}
            <div>
              <h4 className="text-neutral-default font-satoshi font-bold mb-6 tracking-wider uppercase text-xs">Navigation</h4>
              <ul className="flex flex-col gap-4 text-bodySm">
                <li><a href="#about" className="hover:text-brand-primary transition-colors">About Me</a></li>
                <li><a href="#services" className="hover:text-brand-primary transition-colors">Services</a></li>
                <li><a href="#experience" className="hover:text-brand-primary transition-colors">Experience</a></li>
                <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Socials */}
            <div>
              <h4 className="text-neutral-default font-satoshi font-bold mb-6 tracking-wider uppercase text-xs">Connectivity</h4>
              <ul className="flex flex-col gap-4 text-bodySm">
                <li>
                  <a href="https://linkedin.com/in/olanisebewa/" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href="mailto:olanisebewasiu53@gmail.com" className="hover:text-brand-primary transition-colors">Email Me</a>
                </li>
                <li>
                  <a href="https://twitter.com/ayoolanisebe" target="_blank" rel="noreferrer" className="hover:text-brand-primary transition-colors">Twitter (X)</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-surface-dim flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-bodySm opacity-60">
            © {new Date().getFullYear()} Wasiu Ayoola. All rights reserved.
          </p>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-bodySm font-bold text-neutral-default hover:text-brand-primary transition-all"
          >
            <span>BACK TO TOP</span>
            <div className="w-8 h-8 rounded-full border border-surface-dim flex items-center justify-center group-hover:border-brand-primary transition-all">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;