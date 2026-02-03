"use client";

import React, { useState, useEffect } from "react";
import CTAButton from "./CTAButton";
import { X, CheckCircle2 } from "lucide-react";

const GetStarted = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    budget: "",
    purpose: "",
    note: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll when the form is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.note.trim()) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("https://sheetdb.io/api/v1/YOUR_SHEET_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          onClose();
          setFormData({ fullName: "", email: "", budget: "", purpose: "", note: "" });
        }, 3000);
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      alert("❌ Failed to send message. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-3xl bg-background border border-neutral-default/20 text-neutral-default rounded-[24px] shadow-2xl overflow-hidden flex flex-col max-h-[95vh]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-neutral-default hover:opacity-50 transition-opacity z-20"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12 overflow-y-auto custom-scrollbar">
          {submitted ? (
            <div className="py-20 flex flex-col items-center text-center space-y-4 animate-in fade-in zoom-in duration-300">
              <CheckCircle2 className="w-16 h-16 text-neutral-default opacity-80" />
              <h2 className="font-satoshi text-h3 md:text-h2 font-bold">Message Sent</h2>
              <p className="font-generalsans text-neutral-default/70 max-w-sm">
                Thank you for reaching out. I’ll review your inquiry and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <div className="space-y-10">
              <header className="space-y-3">
                <h2 className="font-satoshi text-h3 md:text-h2 font-bold leading-tight">
                  How can I support your team?
                </h2>
                <p className="font-generalsans text-neutral-default/60">
                  Fill out the form below and I'll get back to you shortly.
                </p>
              </header>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <InputField
                    label="Full Name *"
                    name="fullName"
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Email Address *"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <SelectField
                    label="Project Budget"
                    name="budget"
                    options={[
                      "Under $1,000",
                      "$1,000 – $5,000",
                      "$5,000 – $10,000",
                      "Above $10,000",
                    ]}
                    value={formData.budget}
                    onChange={handleChange}
                  />
                  <SelectField
                    label="Let me know your goal *"
                    name="purpose"
                    options={[
                      "HR Consultation",
                      "Executive Support Services",
                      "General Inquiry",
                      "Resume Review",
                      "Interview Preparation",
                    ]}
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="font-generalsans text-[11px] font-bold uppercase tracking-widest opacity-70">
                    Additional Note *
                  </label>
                  <textarea
                    name="note"
                    placeholder="Tell me about your goal"
                    className="w-full p-4 rounded-xl border border-neutral-default/20 bg-transparent min-h-[150px] font-generalsans focus:border-neutral-default/60 outline-none transition-all resize-none"
                    value={formData.note}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="pt-4">
                  <CTAButton 
                    text={isSubmitting ? "Sending..." : "Send Message"} 
                    type="submit" 
                    disabled={isSubmitting}
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

const InputField = ({ label, ...props }) => (
  <div className="flex flex-col gap-3">
    <label className="font-generalsans text-[11px] font-bold uppercase tracking-widest opacity-70">
      {label}
    </label>
    <input
      {...props}
      className="w-full p-4 rounded-xl border border-neutral-default/20 bg-transparent font-generalsans focus:border-neutral-default/60 outline-none transition-all"
    />
  </div>
);

const SelectField = ({ label, options, ...props }) => (
  <div className="flex flex-col gap-3">
    <label className="font-generalsans text-[11px] font-bold uppercase tracking-widest opacity-70">
      {label}
    </label>
    <select
      {...props}
      className="w-full p-4 rounded-xl border border-neutral-default/20 bg-transparent font-generalsans focus:border-neutral-default/60 outline-none transition-all appearance-none cursor-pointer"
    >
      <option value="" disabled hidden>Select an option</option>
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-background text-neutral-default">
          {opt}
        </option>
      ))}
    </select>
  </div>
);