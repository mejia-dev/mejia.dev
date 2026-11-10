import type { JSX } from "react";
import { experience } from "../data/content";
import Section from "./Section";

export default function Experience(): JSX.Element {
  return (
    <Section id="experience" title="Experience">
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.title + job.period} className="timelineItem">
            <div className="timelineHeader">
              <h3>{job.title}</h3>
              <span className="timelinePeriod">{job.period}</span>
            </div>
            <p className="timelineOrg">{job.org}</p>
            <ul className="timelinePoints">
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}