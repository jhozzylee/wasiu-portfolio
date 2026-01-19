import React from "react";
import logo from "../assets/images/Logo_Footer.svg";

const Footer = () => {
  return (
    <footer className="bg-[#141A20] text-neutral-muted font-generalsans py-12 px-6">
      <div className="max-w-[1120px] mx-auto flex flex-col gap-12">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row items-start md:justify-between gap-12">
          
          {/* Logo + Tagline */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <img src={logo} alt="Wasiu Ayoola" className="w-[160px]" />
            <p className="text-body max-w-[236px]">
              Executive Assistant & People Management Professional – Helping
              businesses run smoother.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-body mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-bodySm">
              <li><a href="about" className="hover:text-neutral-default">About</a></li>
              <li><a href="services" className="hover:text-neutral-default">Services</a></li>
              <li><a href="blog" className="hover:text-neutral-default">Blog</a></li>
              <li><a href="contact" className="hover:text-neutral-default">Contact</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-body mb-4">Socials</h4>
            <ul className="flex flex-col gap-2 text-bodySm">
              <li>LinkedIn</li>
              <li>Email</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-surface-dim" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          
          {/* Left (empty / future use) */}
          <div />

          {/* Right */}
          <p className="md:text-right">
            ©2026 Wasiu Ayoola. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
