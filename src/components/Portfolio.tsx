import About from "./About";
import Contact from "./Contact";
import ProjectsList from "./ProjectsList";
import Header from "./Header";
import { useState } from "react";

export default function Portfolio(): JSX.Element {

  const [selectedPage, setSelectedPage] = useState<string>("Home");
  function getSelectedPage(): JSX.Element {
    switch (selectedPage) {
      case "Contact": return (<Contact />);
      case "Projects": return (<ProjectsList />);
      default: return (<About />);
    }
  }

  return (
    <>
      <div id="bodyRenderer">
        <header id="headerContent">
          <Header
            onClickNavButton={setSelectedPage}
            navButtons={["Home", "Contact", "Projects"]}
          />
        </header>
        <main id="mainBodyContent">
          {getSelectedPage()}
        </main>
      </div>
    </>
  )
}