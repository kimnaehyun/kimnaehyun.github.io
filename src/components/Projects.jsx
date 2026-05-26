import { useState } from "react";
import { projects } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import TagRow from "./TagRow.jsx";

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
              {project.highlights?.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>

            <TagRow items={project.stack} />

            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Github
              </a>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
            >
              ×
            </button>

            <span className="project-badge">{selectedProject.role}</span>

            <h2>{selectedProject.title}</h2>

            <p className="project-modal-meta">
              {selectedProject.period} · {selectedProject.team}
            </p>

            <p className="project-modal-description">
              {selectedProject.description}
            </p>

            <div className="project-modal-section">
              <h3>핵심 기능</h3>

              <ul className="project-highlight-list">
                {selectedProject.highlights?.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>

            {selectedProject.problems && (
              <div className="project-modal-section">
                <h3>문제 해결</h3>

                <div className="problem-grid">
                  {selectedProject.problems.map((problem) => (
                    <div className="problem-card" key={problem.title}>
                      <h4>{problem.title}</h4>

                      <p>
                        <strong>문제</strong>
                        <br />
                        {problem.issue}
                      </p>

                      <p>
                        <strong>해결</strong>
                        <br />
                        {problem.solution}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="project-modal-section">
              <h3>기술 스택</h3>

              <TagRow items={selectedProject.stack} />
            </div>

            <div className="project-modal-links">
              <a href={selectedProject.github} target="_blank" rel="noreferrer">
                Github
              </a>

              {selectedProject.live && (
                <a href={selectedProject.live} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
