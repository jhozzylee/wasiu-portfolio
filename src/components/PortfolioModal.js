"use client";

import React, { useState, useEffect } from "react";
import CTAButton from "./CTAButton";
import GetStarted from "./LetsChart";
import { urlFor } from "../lib/sanity";
import { X, ArrowRight, Target, Lightbulb, CheckCircle2 } from "lucide-react";

const PortfolioModal = ({ project, onClose, setProject, allProjects }) => {
  // Separate state to control the contact form (LetsChart)
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Lock body scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!project) return null;

  // Filter related projects safely
  const relatedProjects = project.related
    ? allProjects.filter((p) =>
        project.related.some((r) => r._id === p._id || r._ref === p._id)
      )
    : [];

  return (
    <>
      {/* --- PORTFOLIO MODAL LAYER (z-50) --- */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
        {/* Backdrop blur */}
        <div 
          className="absolute inset-0 bg-background/90 backdrop-blur-xl" 
          onClick={onClose} 
        />

        {/* Modal Window */}
        <div className="bg-background border border-surface-dim w-full max-w-[1280px] h-full max-h-[90vh] rounded-[32px] shadow-2xl overflow-hidden relative z-10 flex flex-col md:flex-row">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-surface-muted border border-surface-dim text-neutral-default hover:text-brand-primary transition-all z-50"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* LEFT: Content Narrative (Scrollable) */}
          <div className="w-full md:w-[450px] p-8 md:p-12 overflow-y-auto border-b md:border-b-0 md:border-r border-surface-dim bg-background/40 custom-scrollbar">
            <div className="space-y-12">
              {/* Header */}
              <div>
                <span className="text-brand-primary font-bold tracking-[0.2em] text-[10px] uppercase block mb-4">
                  {project.category || "Case Study"}
                </span>
                <h2 className="text-3xl md:text-4xl font-satoshi font-bold leading-tight">{project.title}</h2>
              </div>

              {/* Sections */}
              <div className="space-y-10">
                {project.problem && (
                  <section>
                    <div className="flex items-center gap-2 mb-3 text-neutral-default opacity-60">
                      <Target className="w-4 h-4" />
                      <h4 className="text-[11px] font-bold uppercase tracking-widest">The Challenge</h4>
                    </div>
                    <p className="text-body text-neutral-muted leading-relaxed">{project.problem}</p>
                  </section>
                )}

                {project.solution && (
                  <section>
                    <div className="flex items-center gap-2 mb-3 text-neutral-default opacity-60">
                      <Lightbulb className="w-4 h-4" />
                      <h4 className="text-[11px] font-bold uppercase tracking-widest">The Strategy</h4>
                    </div>
                    <p className="text-body text-neutral-muted leading-relaxed">{project.solution}</p>
                  </section>
                )}

                {project.outcomes?.length > 0 && (
                  <section>
                    <div className="flex items-center gap-2 mb-4 text-neutral-default opacity-60">
                      <CheckCircle2 className="w-4 h-4" />
                      <h4 className="text-[11px] font-bold uppercase tracking-widest">Key Outcomes</h4>
                    </div>
                    <ul className="space-y-4">
                      {project.outcomes.map((item, i) => (
                        <li key={i} className="flex gap-4 text-bodySm text-neutral-muted border-l border-brand-primary/20 pl-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              {/* Pull Quote */}
              {project.pullQuote && (
                <div className="p-8 bg-surface-muted/30 rounded-3xl border border-surface-dim">
                  <p className="text-lg font-satoshi italic text-brand-primary leading-relaxed text-center">
                    “{project.pullQuote}”
                  </p>
                </div>
              )}

              {/* CTA Action */}
              <div className="pt-4 pb-8">
                <CTAButton 
                  text="Inquire for Project" 
                  onClick={() => setIsContactOpen(true)} 
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Visual Showcase (Scrollable) */}
          <div className="flex-1 p-6 md:p-12 overflow-y-auto bg-surface-muted/10 custom-scrollbar">
            <div className="space-y-12 max-w-4xl mx-auto">
              {/* Main Visual */}
              {project.mainImage && (
                <div className="rounded-[24px] overflow-hidden border border-surface-dim shadow-xl bg-background">
                  <img
                    src={urlFor(project.mainImage).width(1200).url()}
                    alt={project.title}
                    className="w-full h-auto block"
                  />
                </div>
              )}

              {/* Related Projects Grid */}
              {relatedProjects.length > 0 && (
                <div className="pt-12 border-t border-surface-dim">
                  <h4 className="text-[11px] font-bold uppercase tracking-widest mb-8 opacity-50">Related Impact</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedProjects.map((item) => (
                      <div
                        key={item._id}
                        onClick={() => {
                          setProject(item);
                          // Reset scroll on change
                          document.querySelector('.custom-scrollbar')?.scrollTo(0,0);
                        }}
                        className="group cursor-pointer block"
                      >
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-surface-dim mb-4 relative bg-background">
                          {item.thumbnail && (
                            <img
                              src={urlFor(item.thumbnail).width(500).height(375).url()}
                              alt={item.title}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out"
                            />
                          )}
                          <div className="absolute inset-0 bg-brand-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs font-bold flex items-center justify-between group-hover:text-brand-primary transition-colors tracking-tight uppercase px-1">
                          {item.title}
                          <ArrowRight className="w-3 h-3 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTACT FORM LAYER (z-[200]) --- */}
      {/* We place this outside the Portfolio Modal div but inside the fragment 
          to ensure it renders on top of everything. 
      */}
      {isContactOpen && (
        <div className="fixed inset-0 z-[200]">
          <GetStarted 
            isOpen={isContactOpen} 
            onClose={() => setIsContactOpen(false)} 
          />
        </div>
      )}
    </>
  );
};

export default PortfolioModal;