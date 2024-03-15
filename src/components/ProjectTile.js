import React, { useEffect, useState } from 'react';
import { octokit } from './Octokit';
import PropTypes from 'prop-types';

export default function ProjectTile(props) {

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
    <div className="projectTile">
      <h2>{props.title} <span class="projectTileLinkSVGDiv">
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5" />
        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z" />
      </svg> */}
      </span></h2>
      <em>Technology:</em> <span style={{
        backgroundColor: `${props.techsUsed.color}`,
        // position: "relative",
        // this line was making them render on top
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

ProjectTile.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  linkRepo: PropTypes.string,
  techsUsed: PropTypes.object,
  stars: PropTypes.number
}