import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProjectSpotlight from './ProjectSpotlight';

export default function ProjectsPresenter(props) {
  const [displayMode, setDisplayMode] = useState("carousel");
  // carousel
  // list 
  // tiles

  useEffect(() => {
    if (window.innerWidth <= 1200) {
      console.log("I AM SMOL");
      setDisplayMode("list");
      document.getElementById("mainBodyContent").style.flexDirection = "column";
    }
  }, [])

  const { projectList } = props;

  const itemsPerLine = projectList.length <= 3 ? projectList.length : Math.ceil(projectList.length / 2);
  const lines = [];
  for (let i = 0; i < 2; i++) {
    const lineProjects = projectList.slice(i * itemsPerLine, (i + 1) * itemsPerLine);
    lines.push(lineProjects);
  }

  let displayedContent;
  if (displayMode === "tiles") {

  } else if (displayMode === "list") {

  } else {

  }

  return (
    <React.Fragment>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="line">
          {line.map((project, index) => (
            <ProjectSpotlight
              title={project.name}
              desc={project.description}
              linkRepo={project.repo}
              techsUsed={project.language}
              stars={project.stars}
              key={index}
            />
          ))}
        </div>
      ))}
    </React.Fragment>
  )
}

ProjectsPresenter.propTypes = {
  projectList: PropTypes.array
}
