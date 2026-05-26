import { useState } from "react";
import { projects } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import TagRow from "./TagRow.jsx";
import ProjectModal from "./ProjectModal.jsx";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section projects" id="projects">
      <SectionHeading kicker="Projects" />

      <div className="project-grid">
        {projects.map((project) => (
          <article
            className="project-card"
            key={project.title}
            onClick={() => setSelectedProject(project)}
          >
            <div className="project-card-top">
              <span className="project-badge">{project.role}</span>
              <h3>{project.title}</h3>
              <p className="project-summary">{project.summary}</p>
            </div>

            <ul className="project-highlight-list">
              {project.features?.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <TagRow items={project.stack} />

            <div className="project-card-footer">
              <span>자세히 보기 </span>
              <span className="project-arrow"> →</span>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
