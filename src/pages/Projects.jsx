// import React, { useState } from "react";
import image1 from "../assets/port1.png";
import image3 from "../assets/port3.png";
import image2 from "../assets/port2.png";
import { Link } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";

const projectData = [
  {
    id: 1,
    title: "Nexcent Page",
    type: "Web Application",
    imageUrl: image1,
    slug: "nexcent-page",
    liveUrl: "https://react-nexcent-landingpage-by-mmb.netlify.app/",
    githubUrl: "https://github.com/CodeCrafter-MMB/Nexcent-react-landing-page",
    description:
      "A modern landing page built with React and Tailwind CSS, featuring responsive design and smooth animations.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "E-Commerce Website",
    type: "Web Application",
    imageUrl: image2,
    slug: "ecommerce-website",
    liveUrl: "https://curd-react-00.netlify.app/",
    githubUrl: "https://github.com/CodeCrafter-MMB/curd-React-Project/tree/main",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and user authentication.",
    technologies: ["React", "Firebase", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Audi Clone Page",
    type: "Web Application",
    imageUrl: image3,
    slug: "audi-clone-page",
    liveUrl: "https://react-tailwind-by-mmb.netlify.app/",
    githubUrl: "https://github.com/CodeCrafter-MMB/React-Audi-01",
    description:
      "A responsive clone of Audi's website showcasing modern car models with interactive features.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 md:mb-4">
              My Projects
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Explore my latest work and personal projects
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projectData.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative h-40 md:h-48 w-full">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain bg-background/50"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12 md:mt-16">
            <Link to="/contact">
              <button className="px-6 md:px-8 py-2 md:py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Let's Work Together
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
