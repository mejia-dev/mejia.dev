import { useEffect, useRef, useState, type JSX, type MouseEvent } from "react";
import { email, links } from "../data/content";
import { CoffeeIcon, GitHubIcon, MailIcon } from "./Icons";

interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps): JSX.Element {
  const year: number = new Date().getFullYear();
  const [status, setStatus] = useState<"copied" | "failed" | null>(null);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async (event: MouseEvent<HTMLAnchorElement>): Promise<void> => {
    if (!navigator.clipboard?.writeText) return;
    event.preventDefault();
    let result: "copied" | "failed" = "copied";
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      result = "failed";
    }
    setStatus(result);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setStatus(null), 1500);
  };

  return (
    <footer className={`footer ${className}`}>
      <div className="footerLinks">
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
          aria-label="GitHub"
          title="GitHub"
        >
          <GitHubIcon size={20} />
        </a>
        <a
          href={links.coffee}
          target="_blank"
          rel="noopener noreferrer"
          className="footerLink"
          aria-label="Buy me a coffee"
          title="Buy me a coffee"
        >
          <CoffeeIcon size={20} />
        </a>
        <span className="footerLinkWrap">
          <a
            href={`mailto:${email}`}
            onContextMenu={copyEmail}
            className="footerLink"
            aria-label="Email"
            title="Email (right-click to copy address)"
          >
            <MailIcon size={20} />
          </a>
          <span className={`copyToast${status ? " copyToastShown" : ""}`} role="status">
            {status === "copied" ? "Email copied!" : status === "failed" ? "Couldn't copy" : ""}
          </span>
        </span>
      </div>
      <div className="footerCredit">
        <p className="footerCopyright">© {year} Aaron Mejia</p>
        <p className="footerPhotoCredit">
          Photos by{" "}
          <a href={links.photographer} target="_blank" rel="noopener noreferrer">
            Dellin Zhang
          </a>
        </p>
      </div>
    </footer>
  );
}