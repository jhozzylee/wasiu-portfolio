import React, { useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { servicesData } from "../data/servicesData";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO"; // Wired: SEO component
import Header from "../components/Header";
import Footer from "../components/Footer";
import TestimonialSection from "../components/Testemonial";
import ContactForm from "../components/ContactForm";

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const { pathname } = useLocation();
  const data = servicesData[serviceId];

  // Fix: Ensures page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!data) return <div className="py-24 text-center">Service not found.</div>;

  return (
    <>
      {/* Wired: Dynamic SEO tags based on the current service */}
      <SEO
  title={`${data.title} | Wasiu Ayoola`}
  description={`${data.intro.substring(0, 160)} Learn how Wasiu Ayoola can optimize your operations and HR processes.`}
  keywords={data.keywords?.join(", ")}
  image={data.ogImage || "https://wasiu-portfolio-five.vercel.app/wasiu-ayoola-executive-assistant.jpg"}
  url={`https://wasiu-portfolio-five.vercel.app/services/${serviceId}`}
/>

      <Header />
      
      <div className="bg-background text-neutral-default font-generalsans">
        
        <section className="py-24 pt-36">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            
            {/* Wiring Tip: Pointing this to "/" if your expertise grid is on the home page */}
            <Link to="/services" className="inline-flex items-center gap-2 text-brand-primary mb-12 hover:underline">
              <ArrowLeft size={16} /> Back
            </Link>

            {/* Header Content */}
            <h1 className="text-h1 font-satoshi mb-2">{data.title}</h1>
            <p className="text-h3 text-brand-primary mb-8">{data.subtitle}</p>
            
            <div className="space-y-6 text-bodyLg text-neutral mb-12">
              <p>{data.intro}</p>
              <p>{data.mainText}</p>
            </div>

            {/* Features List */}
            <div className="bg-surface p-8 rounded-2xl mb-12 border border-surface-dim">
              <h3 className="text-h3 mb-6">{data.featuresTitle}</h3>
              <div className="grid gap-6">
                {data.features.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="text-brand-primary shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-neutral-default">{item.label}</p>
                      <p className="text-neutral">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="mb-12">
              <h3 className="text-h3 mb-4">The Tech Stack I Leverage</h3>
              <div className="flex flex-wrap gap-3">
                {data.techStack.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-surface-dim rounded-full text-sm border border-surface-dim">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Why Me Section */}
            <h3 className="text-h3 mb-6">Why Choose Me?</h3>
            <div className="grid gap-6">
              {data.whyMe.map((item, i) => (
                <div key={i} className="border-l-4 border-brand-primary pl-6 py-2">
                  <p className="font-bold text-lg">{item.label}</p>
                  <p className="text-neutral">{item.desc}</p>
                </div>
              ))}
            </div>
            
            {/* Social Proof & Conversion */}
            <div className="mt-24">
              <TestimonialSection />
              <ContactForm />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}