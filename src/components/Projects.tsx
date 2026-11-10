import type { JSX } from "react";
import { featuredProjects, links, otherProjects, ProjectLink } from "../data/content";
import { ArrowUpRightIcon, CoffeeIcon } from "./Icons";
import Section from "./Section";

function renderLinks(projectLinks: ProjectLink[], projectTitle: string): JSX.Element {
  return (
    <div className="projectLinks">
      {projectLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="projectLink"
          aria-label={`${link.label}: ${projectTitle} (opens in a new tab)`}
        >
          {link.label}
          <ArrowUpRightIcon size={16} />
        </a>
      ))}
    </div>
  );
}

export default function Projects(): JSX.Element {
  return (
    <Section id="projects" title="Projects">
      <div className="featured">
        {featuredProjects.map((project) => (
          <article key={project.title} className="projectCard">
            <div className="projectImage">
              <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
            </div>
            <div className="projectBody">
              <p className="projectBlurb">
                {project.blurb}
                {project.badge && <span className="badge">{project.badge}</span>}
              </p>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <ul className="chips chipsSmall" aria-label="Technologies">
                {project.techs.map((tech) => (
                  <li key={tech} className="chip">{tech}</li>
                ))}
              </ul>
              {renderLinks(project.links, project.title)}
            </div>
          </article>
        ))}
      </div>

      <h3 className="subheading">More things I've tinkered with</h3>
      <ul className="otherProjects">
        {otherProjects.map((project) => (
          <li key={project.title} className="card otherProject">
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
            {renderLinks(project.links, project.title)}
          </li>
        ))}
      </ul>

      <p className="coffeeNudge">
        <CoffeeIcon size={20} />
        <span>
          Did one of my extensions make your day a little better?{" "}
          <a href={links.coffee} target="_blank" rel="noopener noreferrer">You can buy me a coffee</a>.
        </span>
      </p>
    </Section>
  );
}