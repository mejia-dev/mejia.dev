import type { JSX } from "react";
import { Link } from "react-router";
import { intro } from "../data/content";
import { CompassIcon } from "./Icons";
import Section from "./Section";

export default function Hello(): JSX.Element {
  return (
    <Section id="hello" className="hello">
      <h1>
        {intro.greeting}
      </h1>
      <p className="tagline">{intro.tagline}</p>
      <Link to="/about" className="button buttonExplore">
        <CompassIcon size={20} />
        Explore
      </Link>
    </Section>
  );
}