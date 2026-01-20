"use client";

import React, { useState } from "react";
import CTAButton from "./CTAButton";
import GetStarted from "./LetsChart";
import { urlFor } from "../lib/sanity"; // ✅ Make sure you import urlFor

const PortfolioModal = ({ project, onClose, setProject, allProjects }) => {
  const [showModal, setShowModal] = useState(false);

  if (!project) return null;

  const relatedProjects =
    project.related?.length > 0
      ? allProjects.filter((p) =>
          project.related.some((r) => r._ref === p._id)
        )
      : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <div className="bg-background w-full md:max-w-[1280px] grid grid-cols-1 md:grid-cols-[400px,1fr] max-h-screen md:max-h-[90vh] overflow-auto relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl z-10"
        >
          &times;
        </button>

        {/* Mobile media */}
        <div className="md:hidden pt-16">
          {project.mainImage && (
            <img
              src={urlFor(project.mainImage).width(1200).url()}
              alt={project.title}
              className="w-full object-cover rounded-lg"
            />
          )}
        </div>

        {/* Left content */}
        <div className="px-6 py-12 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">{project.title}</h2>
            {project.category && (
              <p className="text-neutral-400">{project.category}</p>
            )}
          </div>

          {/* Problem */}
          {project.problem && (
            <div>
              <h3 className="font-semibold mb-2">Problem</h3>
              <p className="text-neutral-300">{project.problem}</p>
            </div>
          )}

          {/* Solution */}
          {project.solution && (
            <div>
              <h3 className="font-semibold mb-2">Solution</h3>
              <p className="text-neutral-300">{project.solution}</p>
            </div>
          )}

          {/* Outcome */}
          {project.outcomes?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Outcome</h3>
              <ul className="list-disc ml-6 text-neutral-300">
                {project.outcomes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Pull quote */}
          {project.pullQuote && (
            <blockquote className="text-lg italic border-l-4 pl-4 border-primary">
              “{project.pullQuote}”
            </blockquote>
          )}

          <CTAButton
            text="Work With Me"
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* Desktop media + related */}
        <div className="hidden md:block p-10 space-y-6">
          {project.mainImage && (
            <img
              src={urlFor(project.mainImage).width(1200).url()}
              alt={project.title}
              className="w-full rounded-lg"
            />
          )}

          {relatedProjects.length > 0 && (
            <div>
              <h4 className="font-semibold mb-3">Related Projects</h4>
              <div className="grid grid-cols-3 gap-4">
                {relatedProjects.map((item) => (
                  <div
                    key={item._id}
                    onClick={() => setProject(item)}
                    className="cursor-pointer"
                  >
                    {item.thumbnail && (
                      <img
                        src={urlFor(item.thumbnail).width(600).url()}
                        alt={item.title}
                        className="rounded-md"
                      />
                    )}
                    <p className="text-sm mt-1">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <GetStarted isOpen onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default PortfolioModal;
