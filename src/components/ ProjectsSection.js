"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import { client, urlFor } from "../lib/sanity";
import { ArrowUpRight } from "lucide-react"; // Sleek icon for project links

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "portfolio"] 
          | order(_createdAt desc)[0..2]{
            _id,
            title,
            description,
            thumbnail,
            "slug": slug.current
          }
        `);
        setProjects(data);
      } catch (err) {
        console.error("Error fetching projects:", err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="bg-background text-neutral-default py-24 sm:py-32">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
        
        {/* Heading with Tagline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block">
              Case Studies
            </span>
            <h2 className="text-h2 sm:text-h1 font-satoshi leading-tight">
              Featured Work & <br />
              <span className="text-brand-primary">Achievements</span>
            </h2>
          </div>
          <p className="text-bodyLg text-neutral-default/60 max-w-[320px] pb-2">
            A glimpse into the initiatives and collaborations I’ve led to success.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project._id}
              to={`/portfolio/${project.slug}`}
              className="group relative flex flex-col bg-surface-muted/30 border border-surface-dim rounded-[32px] overflow-hidden transition-all duration-500 hover:border-brand-primary/40 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                {project.thumbnail && (
                  <img
                    src={urlFor(project.thumbnail).width(800).url()}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                  />
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                
                {/* Floating Icon */}
                <div className="absolute top-6 right-6 p-3 rounded-full bg-background/80 backdrop-blur-md border border-white/10 opacity-0 -translate-y-2 translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-brand-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-satoshi font-bold leading-tight group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-bodySm text-neutral-default/60 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Case Study
                  <div className="w-8 h-[1px] bg-brand-primary" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col items-center gap-6">
          <div className="h-[1px] w-24 bg-surface-dim" />
          <Link to="/portfolio">
            <CTAButton text="Explore Full Portfolio" />
          </Link>
        </div>
      </div>
    </section>
  );
}