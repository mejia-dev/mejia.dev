import { useRef, type JSX } from "react";
import { sections } from "../data/content";
import useActiveSection from "../hooks/useActiveSection";
import useScrollToSection from "../hooks/useScrollToSection";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Hello from "./Hello";
import Projects from "./Projects";
import Sidebar from "./Sidebar";

const sectionIds = sections.map((section) => section.id);

export default function Portfolio(): JSX.Element {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const activeSection = useActiveSection(sectionIds, scrollerRef);
  useScrollToSection(sectionIds);

  return (
    <div className="layout">
      <a
        href="#main"
        className="skipLink"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>
      <Sidebar activeSection={activeSection} />
      <main id="main" tabIndex={-1} className="panel">
        <div className="scroller" ref={scrollerRef}>
          <Hello />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer className="pageFooter" />
        </div>
      </main>
    </div>
  );
}