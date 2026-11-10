import { ReactNode, useRef, type JSX } from "react";
import useInView from "../hooks/useInView";

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, className = "", children }: SectionProps): JSX.Element {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, 0.08);

  return (
    <section
      id={id}
      ref={ref}
      aria-labelledby={title ? `${id}Title` : undefined}
      className={`section reveal ${inView ? "isVisible" : ""} ${className}`}
    >
      {title && (
        <div className="sectionHeading">
          <h2 id={`${id}Title`}>{title}</h2>
        </div>
      )}
      {children}
    </section>
  );
}