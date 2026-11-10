import type { JSX } from "react";
import { certifications, education, Hat, HatIcon, hats, intro, skills } from "../data/content";
import { BookIcon, CodeIcon, ShieldIcon } from "./Icons";
import Section from "./Section";

function renderHatIcon(icon: HatIcon): JSX.Element {
  switch (icon) {
    case "secure": return <ShieldIcon size={22} />;
    case "teach": return <BookIcon size={22} />;
    default: return <CodeIcon size={22} />;
  }
}

export default function About(): JSX.Element {
  return (
    <Section id="about" title="About">
      {intro.paragraphs.map((paragraph) => (
        <p key={paragraph} className="introText">{paragraph}</p>
      ))}

      <ul className="hats">
        {hats.map((hat: Hat) => (
          <li key={hat.title} className="hat">
            <span className="hatIcon">{renderHatIcon(hat.icon)}</span>
            <h3>{hat.title}</h3>
            <p>{hat.text}</p>
          </li>
        ))}
      </ul>

      <div className="credentials">
        <div className="card">
          <h3>Education</h3>
          <ul className="plainList">
            {education.map((item) => (
              <li key={item.title}>
                <span className="credTitle">{item.title}</span>
                <span className="credMeta">{item.org} · {item.period}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Certifications</h3>
          <ul className="plainList">
            {certifications.map((cert) => (
              <li key={cert}>
                <span className="credTitle">{cert}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="skills">
        {skills.map((group) => (
          <div key={group.group} className="skillGroup">
            <h3>{group.group}</h3>
            <ul className="chips">
              {group.items.map((item) => (
                <li key={item} className="chip">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}