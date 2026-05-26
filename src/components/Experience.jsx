import { experiences } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import TagRow from "./TagRow.jsx";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading kicker="Experience" />
      <div className="experience-list">
        {experiences.map((item) => (
          <article className="experience-card" key={item.org}>
            <div className="experience-header">
              <div className="experience-title-row">
                <h3>{item.org}</h3>

                <span className="experience-status">{item.type}</span>
              </div>

              <p className="experience-role">{item.role}</p>

              <div className="experience-meta">
                <span>{item.place}</span>

                <span>{item.period}</span>
              </div>
            </div>

            <p className="experience-description">{item.description}</p>

            <h4>주요 성과</h4>

            <ul>
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>

            <h4>사용 기술</h4>

            <TagRow items={item.stack} />
          </article>
        ))}
      </div>
    </section>
  );
}
