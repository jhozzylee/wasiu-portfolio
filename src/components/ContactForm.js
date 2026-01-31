import React, { useState, memo } from "react";
import CTAButton from "./CTAButton";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Contact = ({ onOpenBookCall }) => {
  const sheetDbUrl = "https://sheetdb.io/api/v1/4n6ca4eyf4j2u"; // 👈 replace with your SheetDB URL

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // "success" | "error" | null

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
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background text-neutral-default py-14 font-generalsans">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 flex flex-col items-center gap-6">
      <div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-4 sm:w-6 md:w-8 h-1 bg-brand-primary" />
              <p className="uppercase tracking-wide text-center text-bodyLg">
                let's {" "}
                <span className="text-brand-primary">Connect</span>
              </p>
            </div>

            <h2 className="text-h2 font-satoshi text-center lg:text-left">
              Let’s make your{" "}
              <span className="text-brand-primary">business run smoother</span>
            </h2>
          </div>
          </div>

      {/* Contact Form + Info */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0 py-16 flex flex-col lg:flex-row gap-12">
        
        {/* Left - Form */}
        <form
          className="flex flex-col gap-6 max-w-[672px] w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col sm:grid sm:grid-cols-2 sm:gap-x-8 gap-y-6 text-neutral">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full sm:w-[320px] bg-transparent border border-neutral-muted rounded-[8px] px-4 py-3 text-bodySm focus:outline-none focus:ring-1 focus:ring-brand-primary"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full sm:w-[320px] bg-transparent border border-neutral-muted rounded-[8px] px-4 py-3 text-bodySm focus:outline-none focus:ring-1 focus:ring-brand-primary"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full sm:w-[320px] bg-transparent border border-neutral-muted rounded-[8px] px-4 py-3 text-bodySm focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full sm:w-[320px] bg-transparent border border-neutral-muted rounded-[8px] px-4 py-3 text-bodySm focus:outline-none focus:ring-1 focus:ring-brand-primary"
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-[320px] bg-transparent border border-neutral-muted rounded-[8px] px-4 py-3 text-bodySm focus:outline-none focus:ring-1 focus:ring-brand-primary"
            required
          ></textarea>

          {status === "success" && (
            <p className="text-primary font-bodyLg">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-600 font-bodyLg">Failed to send message. Try again.</p>
          )}

          <div className="self-start">
            <CTAButton text={loading ? "Sending..." : "Let’s Work Together"} variant="primary" />
          </div>
        </form>

        {/* Right - Contact Info Card */}
        <div className="w-full lg:w-[384px] bg-background-dim rounded-[16px] px-6 py-6 flex flex-col gap-8 border border-primary">
          <h3 className="text-h2 font-satoshi text-brand-primary">Contact</h3>
          <div>
            <h3 className="text-h3 font-satoshi text-brand-primary">Email</h3>
            <p className="text-bodyLg text-neutral">olanisebewasiu53@gmail.com</p>
          </div>
          <div></div>
          <div>
            <h3 className="text-h3 font-satoshi text-brand-primary">Phone</h3>
            <p className="text-bodyLg text-neutral">+234 913 494 9850</p>
          </div>
          <div>
            <h3 className="text-h3 font-satoshi text-brand-primary">Address</h3>
            <p className="text-bodyLg text-neutral">
            Lagos, Nigeria
            </p>
          </div>
          
          <div>
            <h3 className="text-h3 font-satoshi text-brand-primary">Stay Connected</h3>
            <div className="flex gap-8 mt-2">
              <a href="https://www.facebook.com" aria-label="Facebook" className="hover:text-primary">
                <Facebook className="w-6 h-6 " strokeWidth={1}/>
              </a>
              <a href="https://twitter.com/ayoolanisebe" aria-label="Twitter" className="hover:text-primary">
                <Twitter className="w-6 h-6" strokeWidth={1}/>
              </a>
              <a href="https://www.instagram.com/ayo_0la1/" aria-label="Instagram" className="hover:text-primary">
                <Instagram className="w-6 h-6" strokeWidth={1} />
              </a>
              <a href="https://www.linkedin.com/in/olanisebewa/" aria-label="LinkedIn" className="hover:text-primary">
                <Linkedin className="w-6 h-6 " strokeWidth={1}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
