import { profile } from "../data/portfolio.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          <a href={`mailto:${profile.email}`}>Email</a>
        </div>

        <span className="footer-copy">© 2026 Kim Naehyun</span>
      </div>
    </footer>
  );
}
