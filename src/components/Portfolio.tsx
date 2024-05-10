import { useState } from "react"
import About from "./About";
import Contact from "./Contact";
import ProjectsList from "./ProjectsList";

export default function Portfolio(): JSX.Element {

  const [selectedPage, setSelectedPage] = useState<String>("Home");

  function getSelectedPage(): JSX.Element {
    switch(selectedPage) {
      case "Contact": return (<Contact />);
      case "Projects": return (<ProjectsList />);
      default: return (<About />);
    }
  }

  return (
    <>
      <div id="bodyRenderer">
        <div id="headerContent"></div>
        <div id="mainBodyContent">{getSelectedPage()}</div>
      </div>
    </>
  )
}