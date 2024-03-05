import React from 'react';
import PropTypes from 'prop-types';
import ProjectSpotlight from './ProjectSpotlight';

export default function ProjectsList(props) {
  const { projectList } = props;
  const itemsPerLine = projectList.length <= 3 ? projectList.length : Math.ceil(projectList.length / 2);
  const lines = [];
  for (let i = 0; i < 2; i++) {
    const lineProjects = projectList.slice(i * itemsPerLine, (i + 1) * itemsPerLine);
    lines.push(lineProjects);
  }

  return (
    <React.Fragment>
      <div className="projectSpotlight-Wrapper">
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
      </div>
    </React.Fragment>
  )
}

ProjectsList.propTypes = {
  projectList: PropTypes.array
}
