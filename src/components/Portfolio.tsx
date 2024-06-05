import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import ProjectsList from "./ProjectsList";
import Header from "./Header";

export default function Portfolio(): JSX.Element {

  return (
    <Router>
      <div id="bodyRenderer">
        <header id="headerContent">
          <Header
            navButtons={["Home", "Contact", "Projects"]}
          />
        </header>
        <main id="mainBodyContent">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/home" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<ProjectsList />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}