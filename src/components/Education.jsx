import { education } from "../data/portfolio.js";
import SectionHeading from "./SectionHeading.jsx";
import TagRow from "./TagRow.jsx";

export default function Education() {
  return (
    <section className="section education" id="education">
      <SectionHeading kicker="Education" />
      <div className="education-list">
        {education.map((item) => (
          <article key={item.name}>
            <header className="education-card-header">
              <div className="education-title-row">
                <h3>{item.name}</h3>

                <span className="education-status">{item.status}</span>
              </div>

              <p className="education-course">{item.course}</p>

              <div className="education-meta">
                <span>{item.location}</span>
                <span>{item.period}</span>
              </div>
            </header>
            <section className="education-card-section">
              <h4>주요 성과 및 활동</h4>
              <ul>
                {item.activities.map((activity) => (
                  <li key={activity}>{activity}</li>
                ))}
              </ul>
            </section>
            <section className="education-card-section">
              <h4>습득 역량</h4>
              <TagRow items={item.skills} />
            </section>
          </article>
        ))}
      </div>
    </section>
  );
}
