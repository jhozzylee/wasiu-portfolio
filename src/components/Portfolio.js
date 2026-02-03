"use client";

import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import PortfolioModal from "./PortfolioModal";
import { ArrowUpRight } from "lucide-react";

const getWeekNumber = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.floor((now - start) / (7 * 24 * 60 * 60 * 1000));
};

const query = `
  *[_type == "portfolio"] | order(_createdAt desc) {
    _id, title, description, problem, solution, outcomes, quote, featured, thumbnail, mainImage,
    related[]->{ _id, title, thumbnail }
  }
`;

export default function PortfolioSection() {
  const [projects, setProjects] = useState([]);
  const [featuredProject, setFeaturedProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    client.fetch(query).then((data) => {
      setProjects(data);
      const manualFeatured = data.find((p) => p.featured);
      if (manualFeatured) {
        setFeaturedProject(manualFeatured);
      } else if (data.length > 0) {
        const week = getWeekNumber();
        setFeaturedProject(data[week % data.length]);
      }
    });
  }, []);

  if (!featuredProject) return null;

  return (
    <section className="bg-background text-neutral-default font-generalsans py-24 lg:py-32">
      <div className="max-w-[1120px] mx-auto px-6">
        
        {/* ================= FEATURED CASE STUDY ================= */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-[2px] bg-brand-primary" />
            <p className="uppercase tracking-[0.2em] text-xs font-bold text-brand-primary">Case Study</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-8">
              <h1 className="text-h2 md:text-h1 font-satoshi leading-tight mb-8">
                {featuredProject.title}
              </h1>
              <p className="text-bodyLg text-neutral-muted leading-relaxed max-w-2xl">
                {featuredProject.description}
              </p>
            </div>
            
            <div className="lg:col-span-4 lg:pt-4">
              {featuredProject.quote && (
                <div className="p-8 border-l-2 border-brand-primary bg-surface-muted/10 rounded-r-2xl">
                  <p className="text-bodyLg font-satoshi italic text-brand-primary">
                    “{featuredProject.quote}”
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* MAIN HERO IMAGE */}
          {featuredProject.mainImage && (
            <div 
              className="relative group cursor-pointer overflow-hidden rounded-[40px] border border-surface-dim mb-20"
              onClick={() => setSelectedProject(featuredProject)}
            >
              <img
                src={urlFor(featuredProject.mainImage).width(1200).url()}
                alt={featuredProject.title}
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-500" />
              <div className="absolute bottom-8 right-8 bg-background p-4 rounded-full shadow-2xl scale-0 group-hover:scale-100 transition-transform duration-300">
                <ArrowUpRight className="text-brand-primary w-6 h-6" />
              </div>
            </div>
          )}

          {/* PROBLEM & SOLUTION GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {featuredProject.problem && (
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-primary mb-4">The Challenge</h4>
                <p className="text-bodyLg text-neutral-muted leading-relaxed">
                  {featuredProject.problem}
                </p>
              </div>
            )}
            {featuredProject.solution && (
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-brand-primary mb-4">The Approach</h4>
                <p className="text-bodyLg text-neutral-muted leading-relaxed">
                  {featuredProject.solution}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* ================= PROJECT GALLERY ================= */}
        <div className="pt-24 border-t border-surface-dim">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-h2 font-satoshi">
                Impact <span className="text-brand-primary italic">Gallery</span>
              </h2>
            </div>
            <p className="text-bodySm text-neutral-muted max-w-[280px] md:text-right">
              A selection of initiatives across HR, Strategy, and Ops.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                onClick={() => setSelectedProject(project)}
                className="group flex flex-col cursor-pointer"
              >
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden border border-surface-dim mb-6">
                  {project.thumbnail && (
                    <img
                      src={urlFor(project.thumbnail).width(600).height(450).url()}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    <span className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                <h3 className="text-h3 font-satoshi mb-2 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-bodySm text-neutral-muted line-clamp-2">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <PortfolioModal
          project={selectedProject}
          allProjects={projects}
          onClose={() => setSelectedProject(null)}
          setProject={setSelectedProject}
        />
      )}
    </section>
  );
}