import TagRow from "./TagRow.jsx";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-modal" onClick={(e) => e.stopPropagation()}>
        <button className="project-modal-close" onClick={onClose}>
          ×
        </button>

        {/* 헤더 */}
        <span className="project-badge">{project.role}</span>
        <h2>{project.title}</h2>
        <p className="project-modal-meta">
          {project.period} · {project.team}
        </p>

        {/* 프로젝트 개요 */}
        {(project.goal || project.background) && (
          <div className="project-modal-section">
            <h3>프로젝트 개요</h3>
            <div className="problem-grid">
              {project.goal && (
                <div className="problem-card">
                  <h4>목표</h4>
                  <p>{project.goal}</p>
                </div>
              )}
              {project.background && (
                <div className="problem-card">
                  <h4>배경</h4>
                  <p>{project.background}</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* 담당 역할 / 리팩토링 및 개인 기여 */}
        <div className="project-modal-section">
          <h3>담당 역할 / 리팩토링 및 개인 기여</h3>
          <ul className="project-highlight-list">
            {project.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        {/* 기술 스택 */}
        <div className="project-modal-section">
          <h3>기술 스택</h3>
          <TagRow items={project.stack} />
          {project.techReasons?.length > 0 && (
            <ul
              className="project-highlight-list"
              style={{ marginTop: "14px" }}
            >
              {project.techReasons.map(({ tech, reason }) => (
                <li key={tech}>
                  <strong>{tech}</strong> — {reason}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* 문제 해결 */}
        {project.problems?.length > 0 && (
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

        {/* 성과 및 결과 */}
        {project.outcomes?.length > 0 && (
          <div className="project-modal-section">
            <h3>성과 및 결과</h3>
            <ul className="project-highlight-list">
              {project.outcomes.map((outcome) => (
                <li key={outcome}>{outcome}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 링크 */}
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
