import { useEffect, useState, type JSX } from "react";
import imgProfilePic from "../assets/aaron.png";
import imgWordArt from "../assets/name.png";
import { SectionId, sections } from "../data/content";
import Footer from "./Footer";
import { CloseIcon, MenuIcon } from "./Icons";

interface SidebarProps {
  activeSection: SectionId;
}

export default function Sidebar({ activeSection }: SidebarProps): JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className={`sidebar ${menuOpen ? "menuOpen" : ""}`}>
      <a href="#hello" className="brand" onClick={() => setMenuOpen(false)} aria-label="Aaron Mejia, back to top">
        <img className="brandPhoto" src={imgProfilePic} alt="" width={500} height={500} />
        <img className="brandWordmark" src={imgWordArt} alt="" width={874} height={206} />
      </a>

      <button
        type="button"
        className="menuButton"
        aria-expanded={menuOpen}
        aria-controls="siteNav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      <nav id="siteNav" className="siteNav" aria-label="Sections">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={activeSection === section.id ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <Footer className="sidebarFooter" />
    </header>
  );
}