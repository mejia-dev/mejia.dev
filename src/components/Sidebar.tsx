import { useEffect, useRef, useState, type JSX } from "react";
import { Link } from "react-router";
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

  const headerRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      buttonRef.current?.focus();
    }
    function onPointerDown(event: PointerEvent): void {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) setMenuOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);

  return (
    <header ref={headerRef} className={`sidebar ${menuOpen ? "menuOpen" : ""}`}>
      <Link to="/hello" className="brand" onClick={() => setMenuOpen(false)} aria-label="Aaron Mejia, back to top">
        <img className="brandPhoto" src={imgProfilePic} alt="" width={500} height={500} />
        <img className="brandWordmark" src={imgWordArt} alt="" width={874} height={206} />
      </Link>

      <button
        ref={buttonRef}
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
              <Link
                to={`/${section.id}`}
                aria-current={activeSection === section.id ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {section.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Footer className="sidebarFooter" />
    </header>
  );
}