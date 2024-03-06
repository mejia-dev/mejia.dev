import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css';
import profilePic from '../img/aaron.png';
import nameWordArt from '../img/name.png';
import Header from './Header';
import ProjectsList from './ProjectsList';


export default function Portfolio() {

  const [projectsListLoaded, setProjectsListLoaded] = useState(false);
  const [projectsList, setProjectsList] = useState([]);
  const [projectsListApiErrorMsg, setProjectsListApiErrorMsg] = useState(null);

  useEffect(() => {
    fetch("https://gh-pinned-repos-api.ysnirix.xyz/api/get?username=mejia-dev")
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonObj) => {
        setProjectsList(jsonObj.response);
        setProjectsListLoaded(true);
      })
      .catch((error) => {
        setProjectsListApiErrorMsg(error);
        setProjectsListLoaded(true);
      });
  }, [])


  function showPageAbout(){

  }

  function showPageContact(){

  }

  function showPageProjects()
  {

  }

  

  let projectsRendering;
  if (!projectsListLoaded) {
    projectsRendering = (
      <div className="projectSpotlight-Wrapper"><p className="apiMessage">Loading data from GitHub, please wait...</p></div>
    )
  } else if (projectsListApiErrorMsg != null) {
    console.log(projectsListApiErrorMsg);
    projectsRendering = (
      <div className="projectSpotlight-Wrapper"><h3 className="apiMessage">Error while getting current projects list. {projectsListApiErrorMsg.message} <br />Please visit <a href="https://github.com/mejia-dev" target="_blank" rel="noreferrer">github.com/mejia-dev</a> to view current projects.</h3></div>
    )
  } else {
    projectsRendering = (
      <ProjectsList
        projectList={projectsList}
      />
    )
  }

  return (
    <React.Fragment>
      <Header 
        onClickHome={showPageProjects}
        onClickAbout={showPageAbout}
        OnClickContact={showPageContact}
      />
      {projectsRendering}
    </React.Fragment>
  )
}