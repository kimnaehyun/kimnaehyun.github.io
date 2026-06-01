import { useMemo, useState } from "react";
import { skills } from "../data/portfolio.js";

const tabs = ["전체", ...skills.map((s) => s.category)];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("전체");

  const filteredSkills = useMemo(() => {
    if (activeTab === "전체") {
      return skills.flatMap((group) => group.items);
    }

    return skills.find((group) => group.category === activeTab)?.items || [];
  }, [activeTab]);

  return (
    <section className="section" id="skills">
      <div className="section-heading">
        <h2>Skills</h2>
      </div>

      <div className="skill-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="skill-grid">
        {skills.flatMap((group) =>
          group.items.map((skill) => {
            const isActive =
              activeTab === "전체" || group.category === activeTab;

            return (
              <div
                key={skill.name}
                className={`skill-item ${isActive ? "active" : "inactive"}`}
              >
                {skill.icon ? (
                  <img src={skill.icon} alt={skill.name} />
                ) : (
                  <div className="skill-fallback">{skill.name.charAt(0)}</div>
                )}

                {isActive && (
                  <div className="skill-tooltip">
                    <strong>{skill.name}</strong>

                    <div className="skill-stars">{"★".repeat(skill.level)}</div>

                    <p>{skill.description}</p>
                  </div>
                )}
              </div>
            );
          }),
        )}
      </div>
    </section>
  );
}
