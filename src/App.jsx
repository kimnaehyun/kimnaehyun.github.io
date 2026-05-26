import { useState } from "react";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";

export default function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="app" data-theme={theme}>
      <Header
        theme={theme}
        onToggleTheme={() =>
          setTheme((current) => (current === "dark" ? "light" : "dark"))
        }
      />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
      </main>
      <Footer />
    </div>
  );
}
