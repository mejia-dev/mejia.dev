import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css';
import Header from './Header';
import ProjectsList from './ProjectsList';
import About from './About';
import Contact from './Contact';


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

  useEffect(() => {
    let timeout;
    let navBar = document.getElementById("navBar");
    let floatingNavBarPlaceholder = document.getElementById("floatingNavBarPlaceholder");
    window.onscroll = () => {
      floatingNavBarPlaceholder.style.height = (navBar.offsetHeight) + "px";
      if (timeout) {
        clearTimeout(timeout)
      }
      timeout = setTimeout(() => {
        if (window.scrollY > navBar.offsetHeight) {
          navBar.classList.add("sticky");
          floatingNavBarPlaceholder.classList.add("show");
        } else {
          navBar.classList.remove("sticky");
          floatingNavBarPlaceholder.classList.remove("show");
        }
      }, 10)
    }
  }, [])


  const renderCurrentView = () => {
    if (selectedPage === "Contact") {
      return <Contact />;
    } else if (selectedPage === "About") {
      return <About />;
    } else {
      if (!projectsListLoaded) {
        return <p className="apiMessage">Loading data from GitHub, please wait...</p>;
      } else if (projectsListApiErrorMsg != null) {
        return (
          <>
            <h3 className="apiMessage">
              Error while getting current projects list. {projectsListApiErrorMsg.message}<br />
              Please visit <a href="https://github.com/mejia-dev" target="_blank" rel="noreferrer">github.com/mejia-dev</a> to view current projects.
            </h3>
          </>
        );
      } else {
        return <ProjectsList projectList={projectsList} />;
      }
    }
  };

  return (
    <React.Fragment>
      <Header
        onClickNavButton={setSelectedPage}
        navButtons={["Home", "About", "Contact"]}
      />
      <div id="mainBodyContent">{renderCurrentView()}</div>
    </React.Fragment>
  );
}