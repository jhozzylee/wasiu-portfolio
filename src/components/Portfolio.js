"use client";

import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import PortfolioModal from "./PortfolioModal";

/* ------------------ helpers ------------------ */
const getWeekNumber = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;
  return Math.floor(diff / (7 * 24 * 60 * 60 * 1000));
};

export default function PortfolioSection() {
  const [projects, setProjects] = useState([]);
  const [featuredProject, setFeaturedProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  /* ------------------ fetch from Sanity ------------------ */
  useEffect(() => {
    const query = `
      *[_type == "project"] | order(_createdAt desc) {
        _id,
        title,
        shortDescription,
        description,
        problem,
        solution,
        outcomes,
        pullQuote,
        thumbnail,
        mainImage,
        relatedProjects
      }
    `;

    client.fetch(query).then((data) => {
      setProjects(data);

      if (data.length > 0) {
        const week = getWeekNumber();
        setFeaturedProject(data[week % data.length]);
      }
    });
  }, []);

  if (!featuredProject) return null;

  return (
    <section className="bg-background text-neutral-default font-generalsans py-24">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6">

        {/* ================= FEATURED PROJECT ================= */}
        <div className="mb-32 text-left">
          <h1 className="text-h1 font-satoshi mb-6">
            Featured <span className="text-brand-primary">Project</span>
          </h1>

          <h3 className="text-h3 font-satoshi mb-4">
            {featuredProject.title}
          </h3>

          <p className="text-bodyLg text-neutral mb-10 max-w-3xl">
            {featuredProject.shortDescription}
          </p>

          {/* Image */}
          <img
            src={urlFor(featuredProject.mainImage).width(1200).url()}
            alt={featuredProject.title}
            className="w-full rounded-2xl mb-12 cursor-pointer"
            onClick={() => setSelectedProject(featuredProject)}
          />

          {/* Problem */}
          <h3 className="text-h3 font-satoshi mb-2">Problem</h3>
          <p className="text-bodyLg text-neutral mb-8 max-w-3xl">
            {featuredProject.problem}
          </p>

          {/* Solution */}
          <h3 className="text-h3 font-satoshi mb-2">Solution</h3>
          <p className="text-bodyLg text-neutral mb-8 max-w-3xl">
            {featuredProject.solution}
          </p>

          {/* Outcome */}
          {featuredProject.outcomes?.length > 0 && (
            <>
              <h3 className="text-h3 font-satoshi mb-4">Outcome</h3>
              <ul className="list-disc list-inside text-bodyLg text-neutral mb-10 space-y-2">
                {featuredProject.outcomes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* Pull Quote */}
          {featuredProject.pullQuote && (
            <h3 className="text-h3 font-satoshi italic text-brand-primary max-w-3xl">
              “{featuredProject.pullQuote}”
            </h3>
          )}
        </div>

        {/* ================= PROJECTS GRID ================= */}
        <div className="text-center">
          <h2 className="text-h2 font-satoshi mb-4">
            Featured <span className="text-brand-primary">Projects</span>
          </h2>

          <p className="text-bodyLg text-neutral-muted max-w-2xl mx-auto mb-14">
            Here’s a look at some of the projects, partnerships, and initiatives
            that highlight how I bring clarity, efficiency, and people-first
            solutions to businesses.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                onClick={() => setSelectedProject(project)}
                className="border border-surface-dim rounded-2xl overflow-hidden text-center cursor-pointer hover:scale-[1.02] transition-transform"
              >
                <img
                  src={urlFor(project.thumbnail).width(600).url()}
                  alt={project.title}
                  className="w-full h-[220px] object-cover"
                />

                <div className="p-6">
                  <h3 className="text-h3 font-satoshi mb-3">
                    {project.title}
                  </h3>
                  <p className="text-bodySm text-neutral">
                    {project.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
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
