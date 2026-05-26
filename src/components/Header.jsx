import { profile } from "../data/portfolio.js";

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="site-header">
      <nav aria-label="주요 섹션">
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
      </nav>
      <button type="button" onClick={onToggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </header>
  );
}
