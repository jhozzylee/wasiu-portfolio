"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import { client, urlFor } from "../lib/sanity";

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
            thumbnail
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
    <section className="bg-background text-neutral-default py-20 font-generalsans">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-h2 font-satoshi mb-4">
            Featured Work & <span className="text-brand-primary">Achievements</span>
          </h2>
          <p className="text-bodyLg text-neutral-muted">
            A glimpse into the projects, initiatives, and collaborations I’ve led to success.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[32px] justify-items-center">
          {projects.map((project) => (
            <div
              key={project._id}
              className="w-full max-w-[352px] bg-surface-muted border border-surface-dim rounded-2xl overflow-hidden"
            >
              {/* Image */}
              {project.thumbnail && (
                <img
                  src={urlFor(project.thumbnail).width(600).height(400).url()}
                  alt={project.title}
                  className="w-full h-[220px] object-cover"
                />
              )}

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-h3 font-satoshi">
                  {project.title}
                </h3>
                <p className="text-bodySm text-neutral-muted">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <Link to="/portfolio">
            <CTAButton text="View All Projects" />
          </Link>
        </div>
      </div>
    </section>
  );
}
