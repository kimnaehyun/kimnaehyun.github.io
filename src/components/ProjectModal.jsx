import TagRow from "./TagRow.jsx";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="project-modal-overlay">
      <div className="project-modal">
        <button className="project-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="project-modal-header">
          <p className="project-modal-meta">{project.meta.join(" · ")}</p>

          <h2>{project.title}</h2>

          <p className="project-modal-description">{project.description}</p>
        </div>

        <div className="project-modal-section">
          <h3>기술 스택</h3>

          <TagRow items={project.stack} />
        </div>

        <div className="project-modal-section">
          <h3>주요 내용</h3>

          <ul>
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {project.problems && (
          <div className="project-modal-section">
            <h3>문제 해결</h3>

            <div className="problem-grid">
              {project.problems.map((problem) => (
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

        <div className="project-modal-links">
          <a href={project.github} target="_blank" rel="noreferrer">
            Github
          </a>

          {project.live && (
            <a href={project.live} target="_blank" rel="noreferrer">
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
