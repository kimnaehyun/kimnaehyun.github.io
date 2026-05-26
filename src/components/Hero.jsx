import { profile } from "../data/portfolio.js";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-kicker">Frontend Engineer</p>

          <h1>{profile.name}</h1>

          <p className="hero-description">{profile.intro}</p>
        </div>
      </section>
    </>
  );
}
