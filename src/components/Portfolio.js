"use client";

import React, { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanity";
import PortfolioModal from "./PortfolioModal";

/* ------------------ helpers ------------------ */
const getWeekNumber = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  return Math.floor((now - start) / (7 * 24 * 60 * 60 * 1000));
};

/* ------------------ GROQ QUERY ------------------ */
const query = `
  *[_type == "portfolio"] | order(_createdAt desc) {
    _id,
    title,
    description,
    problem,
    solution,
    outcomes,
    quote,
    featured,
    thumbnail,
    mainImage,
    related[]->{
      _id,
      title,
      thumbnail
    }
  }
`;

export default function PortfolioSection() {
  const [projects, setProjects] = useState([]);
  const [featuredProject, setFeaturedProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  /* ------------------ FETCH ------------------ */
  useEffect(() => {
    client.fetch(query).then((data) => {
      setProjects(data);

      // Prefer manually featured project
      const manualFeatured = data.find((p) => p.featured);
      if (manualFeatured) {
        setFeaturedProject(manualFeatured);
      } else if (data.length > 0) {
        // Weekly rotation fallback
        const week = getWeekNumber();
        setFeaturedProject(data[week % data.length]);
      }
    });
  }, []);

  if (!featuredProject) return null;

  return (
    <section className="bg-background text-neutral-default font-generalsans py-24">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-0">

        {/* ================= FEATURED PROJECT ================= */}
        <div className="mb-32">
          <h1 className="text-h1 font-satoshi mb-6">
            Featured <span className="text-brand-primary">Project</span>
          </h1>

          <h3 className="text-h3 font-satoshi mb-4">
            {featuredProject.title}
          </h3>

          <p className="text-bodyLg text-neutral mb-10 max-w-3xl">
            {featuredProject.description}
          </p>

          {/* MAIN IMAGE */}
          {featuredProject.mainImage && (
            <img
              src={urlFor(featuredProject.mainImage).width(1200).url()}
              alt={featuredProject.title}
              className="w-full rounded-2xl mb-12 cursor-pointer"
              onClick={() => setSelectedProject(featuredProject)}
            />
          )}

          {/* PROBLEM */}
          {featuredProject.problem && (
            <>
              <h3 className="text-h3 font-satoshi mb-2">Problem</h3>
              <p className="text-bodyLg text-neutral mb-8 max-w-3xl">
                {featuredProject.problem}
              </p>
            </>
          )}

          {/* SOLUTION */}
          {featuredProject.solution && (
            <>
              <h3 className="text-h3 font-satoshi mb-2">Solution</h3>
              <p className="text-bodyLg text-neutral mb-8 max-w-3xl">
                {featuredProject.solution}
              </p>
            </>
          )}

          {/* OUTCOMES */}
          {featuredProject.outcomes?.length > 0 && (
            <>
              <h3 className="text-h3 font-satoshi mb-4">Outcomes</h3>
              <ul className="list-disc list-inside text-bodyLg text-neutral mb-10 space-y-2">
                {featuredProject.outcomes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* QUOTE */}
          {featuredProject.quote && (
            <h3 className="text-h3 font-satoshi italic text-brand-primary max-w-3xl">
              “{featuredProject.quote}”
            </h3>
          )}
        </div>

        {/* ================= PROJECT GRID ================= */}
        <div className="text-center">
          <h2 className="text-h2 font-satoshi mb-4">
            Projects <span className="text-brand-primary">Gallery</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project._id}
                onClick={() => setSelectedProject(project)}
                className="border border-surface-dim rounded-2xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform"
              >
                {/* THUMBNAIL */}
                {project.thumbnail && (
                  <img
                    src={urlFor(project.thumbnail).width(600).height(400).url()}
                    alt={project.title}
                    className="w-full h-[220px] object-cover"
                  />
                )}

                <div className="p-6">
                  <h3 className="text-h3 font-satoshi mb-3">
                    {project.title}
                  </h3>
                  <p className="text-bodySm text-neutral">
                    {project.description}
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
