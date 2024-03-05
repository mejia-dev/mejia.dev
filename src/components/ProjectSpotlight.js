import React, { useEffect, useState } from 'react';
import { octokit } from './Octokit';
import PropTypes from 'prop-types';

export default function ProjectSpotlight(props) {

  const [ghPagesLink, setGhPagesLink] = useState(null);
  const [forksCount, setForksCount] = useState(null);
  const [ghPagesLinkError, setGhPagesLinkError] = useState(null);
  const [forksCountError, setForksCountError] = useState(null);

  useEffect(() => {
    async function getDeployments() {
      await octokit.request(
        'GET /repos/{owner}/{repo}/deployments', {
        owner: 'mejia-dev',
        repo: `${props.title}`,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
        .then(response => {
          if (response.status === 200) {
            if (response.data.length >= 1) {
              setGhPagesLink("https://mejia-dev.github.io/" + props.title);
            }
          } else {
            throw new Error(`Error: ${response.status}`);
          }
        })
        .catch((error) => {
          if (!error.message === 200) {
            setGhPagesLinkError(error.message);
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
    getDeployments();
    getForks();
  }, [])

  let pagesLinkUI;
  let starsCountUI;
  let forksCountUI;

  if (ghPagesLink != null) {
    pagesLinkUI = (
      <>
      <p className="pagesLink"><em>Live Link:</em> <a href={ghPagesLink} target="_blank" rel="noreferrer">{ghPagesLink.slice(8)}</a></p>
      <br />
      </>
    )
  } else if (ghPagesLink === null && ghPagesLinkError != null) {
    pagesLinkUI = (
      <>
      <p className="pagesLink"><em>Live Link:</em> {ghPagesLinkError}</p>
      <br />
      </>
    )
  }

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



  return (
    <div className="projectSpotlight-Project">
      <h2>{props.title}</h2>
      <em>Technology:</em> <span style={{
        backgroundColor: `${props.techsUsed.color}`,
        position: "relative",
        top: "1px",
        display: "inline-block",
        width: "12px",
        height: "12px",
        borderRadius: "50%"
      }}></span>
      <span style={{ color: `${props.techsUsed.color}` }}> {props.techsUsed.name}</span><br />
      <p><em>Description:</em> {props.desc}</p>

      <p className="repoLink"><em>GitHub Link:</em> <a href={props.linkRepo} target="_blank" rel="noreferrer">{props.linkRepo.slice(8)}</a></p>
      {starsCountUI}
      {forksCountUI}
    </div>
  )
}

ProjectSpotlight.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  linkRepo: PropTypes.string,
  techsUsed: PropTypes.object,
  stars: PropTypes.number
}