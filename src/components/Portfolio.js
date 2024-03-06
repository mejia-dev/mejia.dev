import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css';
import Header from './Header';
import ProjectsList from './ProjectsList';
import About from './About';


export default function Portfolio() {

  const [projectsListLoaded, setProjectsListLoaded] = useState(false);
  const [projectsList, setProjectsList] = useState([]);
  const [projectsListApiErrorMsg, setProjectsListApiErrorMsg] = useState(null);
  const [selectedPage, setSelectedPage] = useState("Home");

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

  let currentView;
  if (selectedPage === "Contact"){
    currentView = (
      <>
      {/* <div className="aboutMe-Section">
          <p>Let's get in touch!</p>
          <p>Email: <a href="mailto:aaron@example.com">aaron@example.com</a>
            <br />
            GitHub: <a href="https://github.com/mejia-dev">github.com/mejia-dev</a>
          </p>
        </div> */}
      </>
    )
  } else if (selectedPage === "About"){
    currentView = (
      <About />
    )
  } else {
      if (!projectsListLoaded) {
        currentView = (
          <p className="apiMessage">Loading data from GitHub, please wait...</p>
        )
      } else if (projectsListApiErrorMsg != null) {
        console.log(projectsListApiErrorMsg);
        currentView = (
          <>
          <h3 className="apiMessage">
            Error while getting current projects list. {projectsListApiErrorMsg.message}<br />
            Please visit <a href="https://github.com/mejia-dev" target="_blank" rel="noreferrer">github.com/mejia-dev</a> to view current projects.
          </h3>
          </>
        )
      } else {
        currentView = (
          <ProjectsList
            projectList={projectsList}
          />
        )
      }
  }

  return (
    <React.Fragment>
      <Header 
        onClickNavButton={setSelectedPage}
        navButtons={["Home", "About", "Contact"]}
      />
      <div className="projectSpotlight-Wrapper">{currentView}</div>
    </React.Fragment>
  )
}