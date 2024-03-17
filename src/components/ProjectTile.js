import React, { useEffect, useState } from 'react';
import { octokit } from './Octokit';
import PropTypes from 'prop-types';

export default function ProjectTile(props) {

  const [techsList, setTechsList] = useState(null);
  const [forksCount, setForksCount] = useState(null);
  const [techsListError, setTechsListError] = useState(null);
  const [forksCountError, setForksCountError] = useState(null);

  useEffect(() => {
    async function getTechs() {
      await octokit.request(
        'GET /repos/{owner}/{repo}/languages', {
        owner: 'mejia-dev',
        repo: `${props.title}`,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
        .then(response => {
          if (response.status === 200) {
            // if (response.data.length >= 1) {
            //   setTechsList(response.data);
            // }
            setTechsList(response.data);
          } else {
            throw new Error(`Error: ${response.status}`);
          }
        })
        .catch((error) => {
          if (!error.message === 200) {
            setTechsListError(error.message);
          }
        });
    }

    async function getForks() {
      await octokit.request(
        'GET /repos/{owner}/{repo}/forks', {
        owner: 'mejia-dev',
        repo: `${props.title}`,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
        .then(response => {
          if (response.status === 200) {
            if (response.data.length >= 1) {
              setForksCount(response.data.length);
            }
          } else {
            throw new Error(`Error: ${response.status}`);
          }
        })
        .catch((error) => {
          if (!error.message === 200) {
            setForksCountError(error.message);
          }
        });
    }
    getTechs();
    getForks();
  }, [])

  let starsCountUI;
  let forksCountUI;

  if (forksCount != null) {
    forksCountUI = (
      <p><em>Forks:</em> {forksCount}</p>
    )
  } else if (forksCount === null && forksCountError != null) {
    forksCountUI = (
      <p><em>Forks:</em> {forksCountError}</p>
    )
  }

  if (props.stars >= 1) {
    starsCountUI = (
      <p><em>Stars:</em> ⭐{props.stars}</p>
    )
  }

  let techsListUI;
  if (techsListError != null) {
    techsListUI = (
      <p>{techsListError}</p>
    )
  }
  else if (techsList != null) {
    techsListUI = (
      Object.keys(techsList).map((tech, techIndex) => (
        <div key={techIndex} className="projectTileTech">
          {tech}
        </div>
      ))
    )
  }


  return (
    <div className="projectTile">
      <h2>{props.title} <span className="projectTileLinkSVGDiv">
      </span></h2>
      {techsListUI}
      <p><em>Description:</em> {props.desc}</p>

      <p className="repoLink"><em>GitHub Link:</em> <a href={props.linkRepo} target="_blank" rel="noreferrer">{props.linkRepo.slice(8)}</a></p>
      {starsCountUI}
      {forksCountUI}
    </div>
  )
}

ProjectTile.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  linkRepo: PropTypes.string,
  stars: PropTypes.number
}