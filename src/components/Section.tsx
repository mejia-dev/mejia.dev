import { ReactNode, type JSX } from "react";

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

export default function Section({ id, title, className = "", children }: SectionProps): JSX.Element {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}Title` : undefined}
      className={`section ${className}`}
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