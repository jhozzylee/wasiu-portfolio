"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import { client } from "../lib/sanity"; // Make sure this points to your sanity.js

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch 3 featured projects from Sanity
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "portfolio" && featured == true] | order(_createdAt desc)[0..2]{
            title,
            description,
            "image": image.asset->url
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
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-[352px] bg-surface-muted border border-surface-dim rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[220px] object-cover"
              />

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-h3 font-satoshi">{project.title}</h3>
                <p className="text-bodySm text-neutral-muted">{project.description}</p>
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
