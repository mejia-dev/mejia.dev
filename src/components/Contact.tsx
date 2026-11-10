import { useEffect, useRef, useState, type JSX, type MouseEvent } from "react";
import { email } from "../data/content";
import useInView from "../hooks/useInView";
import { MailIcon } from "./Icons";
import Section from "./Section";

interface TerminalLine {
  kind: "cmd" | "out";
  text: string;
  tone?: "email" | "ok" | "err";
  extra?: boolean;
}

interface Cursor {
  line: number;
  char: number;
}

const baseScript: TerminalLine[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "aaron, full-stack dev" },
  { kind: "cmd", text: "cat email.txt" },
  { kind: "out", text: email, tone: "email" },
];

const mailto = `mailto:${email}`;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Contact(): JSX.Element {
  const terminalRef = useRef<HTMLDivElement>(null);
  const inView = useInView(terminalRef, 0.4);

  const [script, setScript] = useState<TerminalLine[]>(baseScript);
  const [cursor, setCursor] = useState<Cursor>({ line: reducedMotion ? baseScript.length : 0, char: 0 });
  const [copied, setCopied] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    if (cursor.line >= script.length) return;
    if (reducedMotion) {
      setCursor({ line: script.length, char: 0 });
      return;
    }
    if (!inView) return;

    const current = script[cursor.line];
    const typing = current.kind === "cmd" && cursor.char < current.text.length;
    let delay = typing ? 45 + Math.random() * 60 : current.kind === "cmd" ? 380 : 240;
    if (cursor.line === 0 && cursor.char === 0) delay = 600;

    const timer = window.setTimeout(() => {
      setCursor(typing ? { line: cursor.line, char: cursor.char + 1 } : { line: cursor.line + 1, char: 0 });
    }, delay);
    return () => window.clearTimeout(timer);
  }, [cursor, script, inView]);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  async function copyEmail(event: MouseEvent<HTMLAnchorElement>): Promise<void> {
    event.preventDefault();
    let ok = true;
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      ok = false;
    }
    setCopied(ok);
    setStatus(ok ? "Email address copied to clipboard." : `Couldn't copy automatically. The address is ${email}.`);
    setScript((previous) => [
      ...previous.filter((line) => !line.extra),
      { kind: "cmd", text: "wl-copy < email.txt", extra: true },
      ok
        ? { kind: "out", text: "✓ Copied to clipboard. Talk to you soon!", tone: "ok", extra: true }
        : { kind: "out", text: "✗ Clipboard unavailable, try selecting the address above", tone: "err", extra: true },
    ]);
  }

  const done = cursor.line >= script.length;
  const typingLine = !done && script[cursor.line].kind === "cmd" ? script[cursor.line] : null;

  function renderOutput(line: TerminalLine): JSX.Element {
    if (line.tone === "email") {
      return <a href={mailto} tabIndex={-1} className="termEmail">{line.text}</a>;
    }
    return <span className={line.tone ? `term-${line.tone}` : undefined}>{line.text}</span>;
  }

  return (
    <Section id="contact" title="Contact">
      <p className="contactIntro">
        Got an idea, a question, or just want to chat? Email is the best way to reach me.
      </p>

      <div className="terminal" ref={terminalRef}>
        <div className="terminalBar" aria-hidden="true">
          <span className="terminalDot" />
          <span className="terminalDot" />
          <span className="terminalDot" />
          <span className="terminalTitle">Terminal: ~/contact</span>
        </div>
        <p className="srOnly">
          Email me at <a href={mailto}>{email}</a>.
        </p>
        <div className="terminalBody" aria-hidden="true">
          {script.slice(0, Math.min(cursor.line, script.length)).map((line, index) => (
            <div key={index} className="termLine">
              {line.kind === "cmd" ? (
                <>
                  <span className="termPrompt">$</span>
                  <span>{line.text}</span>
                </>
              ) : (
                renderOutput(line)
              )}
            </div>
          ))}
          {typingLine && (
            <div className="termLine">
              <span className="termPrompt">$</span>
              <span>{typingLine.text.slice(0, cursor.char)}</span>
              <span className="termCaret" />
            </div>
          )}
          {done && (
            <div className="termLine">
              <span className="termPrompt">$</span>
              <span className="termCaret termCaretBlink" />
            </div>
          )}
        </div>
      </div>

      <div className="contactActions">
        <span className="footerLinkWrap">
          <a
            href={mailto}
            onContextMenu={copyEmail}
            className="button"
            title="Email (right-click to copy address)"
          >
            <MailIcon size={18} />
            {email}
          </a>
          <span className={`copyToast${copied ? " copyToastShown" : ""}`} aria-hidden="true">
            {copied ? "Email copied!" : ""}
          </span>
        </span>
      </div>
      <p className="srOnly" role="status" aria-live="polite">{status}</p>
    </Section>
  );
}