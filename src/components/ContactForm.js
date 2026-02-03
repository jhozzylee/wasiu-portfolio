import React, { useState, memo } from "react";
import CTAButton from "./CTAButton";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Contact = ({ onOpenBookCall }) => {
  const sheetDbUrl = "https://sheetdb.io/api/v1/4n6ca4eyf4j2u";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const response = await fetch(sheetDbUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: formData }),
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ fullName: "", email: "", phone: "", company: "", message: "" });
      } else {
        throw new Error("Failed");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background text-neutral-default py-24 font-generalsans">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[2px] bg-brand-primary" />
            <p className="uppercase tracking-[0.2em] text-sm font-bold text-brand-primary">
              Let's Connect
            </p>
          </div>
          <h2 className="text-h1 font-satoshi max-w-2xl leading-tight">
            Let’s make your <span className="text-brand-primary">business run smoother</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left - Modern Form */}
          <form className="flex flex-col gap-8 w-full lg:flex-1" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-bodySm font-medium text-neutral-muted ml-1">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-surface-muted border border-surface-dim rounded-xl px-5 py-4 text-body transition-all focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-bodySm font-medium text-neutral-muted ml-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-surface-muted border border-surface-dim rounded-xl px-5 py-4 text-body transition-all focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-bodySm font-medium text-neutral-muted ml-1">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-surface-muted border border-surface-dim rounded-xl px-5 py-4 text-body transition-all focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-bodySm font-medium text-neutral-muted ml-1">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-surface-muted border border-surface-dim rounded-xl px-5 py-4 text-body transition-all focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-bodySm font-medium text-neutral-muted ml-1">How can I help?</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-surface-muted border border-surface-dim rounded-xl px-5 py-4 text-body transition-all focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 resize-none"
                required
              ></textarea>
            </div>

            {status === "success" && <p className="text-brand-secondary font-medium">✨ Message sent! I'll get back to you shortly.</p>}
            {status === "error" && <p className="text-red-400 font-medium">Something went wrong. Please try again.</p>}

            <div className="mt-2">
              <CTAButton text={loading ? "Sending..." : "Send Message"} variant="primary" />
            </div>
          </form>

          {/* Right - Contact Info Card */}
          <div className="w-full lg:w-[400px] sticky top-24">
            <div className="bg-surface-muted border border-surface-dim rounded-[32px] p-10 space-y-10 relative overflow-hidden">
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-3xl -mr-16 -mt-16" />
              
              <h3 className="text-h2 font-satoshi text-neutral-default">Contact <span className="text-brand-primary">Info</span></h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-bodySm text-neutral-muted uppercase tracking-wider font-bold mb-1">Email</p>
                    <a href="mailto:olanisebewasiu53@gmail.com" className="text-bodyLg text-neutral-default hover:text-brand-primary transition-colors">
                      olanisebewasiu53@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-bodySm text-neutral-muted uppercase tracking-wider font-bold mb-1">Phone</p>
                    <p className="text-bodyLg text-neutral-default">+234 913 494 9850</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-bodySm text-neutral-muted uppercase tracking-wider font-bold mb-1">Location</p>
                    <p className="text-bodyLg text-neutral-default">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="pt-8 border-t border-surface-dim">
                <p className="text-bodySm text-neutral-muted uppercase tracking-[0.2em] font-bold mb-6">Stay Connected</p>
                <div className="flex gap-5">
                  {[
                    { icon: Facebook, link: "#" },
                    { icon: Twitter, link: "https://twitter.com/ayoolanisebe" },
                    { icon: Instagram, link: "https://www.instagram.com/ayo_0la1/" },
                    { icon: Linkedin, link: "https://www.linkedin.com/in/olanisebewa/" }
                  ].map((social, i) => (
                    <a key={i} href={social.link} className="w-11 h-11 rounded-xl bg-surface-dim flex items-center justify-center text-neutral-muted hover:bg-brand-primary hover:text-background transition-all duration-300">
                      <social.icon className="w-5 h-5" strokeWidth={1.5} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default memo(Contact);