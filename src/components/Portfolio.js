import React, { useEffect, useState } from 'react';
import '../styles/Portfolio.css';
import profilePic from '../img/aaron.png';
import nameWordArt from '../img/name.png';
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

  // let projectsList = [
  //   {
  //     title: "Burlap Coffee Co. Inventory Tracker with Redux",
  //     desc: "This project acts as a functional inventory tracker for a coffee company.",
  //     linkRepo: "https://github.com/mejia-dev/burlap-coffee-with-redux",
  //     linkPages: "https://mejia-dev.github.io/burlap-coffee-with-redux",
  //     techsUsed: [
  //       "ReactJS",
  //       "Redux",
  //       "HTML",
  //       "CSS",
  //       "JavaScript",
  //       "webpack",
  //       "npm",
  //       "Jest",
  //       "ESLint",
  //       "Babel",
  //       "Dotenv",
  //     ],
  //     features: ["Allows users to add, view, edit, and delete inventory levels of coffee beans.", "Displays warnings if stock is getting low."],
  //   },
  //   {
  //     title: "Epicrust Pizza Parlor",
  //     desc: "A simple website to create and order pizzas from the best pizza place in town!",
  //     linkRepo: "https://github.com/mejia-dev/pizza-parlor",
  //     linkPages: "https://mejia-dev.github.io/pizza-parlor",
  //     techsUsed: ["JavaScript","HTML", "CSS"],
  //     features: ["Functional order menu", "Functional cart with Create, Read, Update, Delete functionality"],
  //   },
  //   {
  //     title: "Mr. Roboger's Neighborhood",
  //     desc: "This webpage is a counting page. Input a number, then a list of numbers counting up (or down) to that number will be displayed. Some numbers will be replaced, according to the defined rules (see Features section).",
  //     linkRepo: "https://github.com/mejia-dev/mr-robogers-neighborhood",
  //     linkPages: "https://mejia-dev.github.io/mr-robogers-neighborhood",
  //     techsUsed: ["JavaScript","HTML", "CSS"],
  //     features: [`For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"`,'For numbers that contain a 2, all digits are replaced with "Boop!"','For numbers that contain a 1, all digits are replaced with "Beep!"'],
  //   },
  // ]

  function expandNavBarItem(elementId) {
    document.getElementById(elementId).classList.toggle("active");
    const content = document.getElementById(elementId).nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
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
      <div className="navBar">
        <img className="name" src={nameWordArt} alt="Aaron Mejia name" />
        <div>
          <img className="profilePic" src={profilePic} alt="silhouette of Aaron sitting on beach watching sunset" />
        </div>
        <br className="wideViewOnly" /><br className="wideViewOnly" />
        <button type="button" className="expandSection" id="firstNavSection" onClick={() => expandNavBarItem("firstNavSection")}>About</button>
        <div className="aboutMe-Section">
          <p>Hello!<br />I am an up-and-coming developer in the Portland metro area. I come from a background of 5 years in IT, managing the maintenance of large networks, training of technicians, and creation/documentation of processes. Programming excites me and I <em>love</em> helping individuals further themselves and their businesses through technology. I am currently enrolled in <span ><a href="https://epicodus.com" target="_blank" rel="noreferrer">Epicodus</a></span> to help achieve this goal.<br />I'm excited to work with you!</p>
        </div>
        <br className="wideViewOnly" />
        <button type="button" className="expandSection" id="secondNavSection" onClick={() => expandNavBarItem("secondNavSection")}>Skills & Interests</button>
        <div className="aboutMe-Section">
          <ul>
            <li>I have assisted in the creation & design of at least 4 different websites for small businesses.</li>
            <li>I have built fully-functioning web servers from scratch on Linux using LAMP stacks and WordPress</li>
          </ul>
        </div>
        <br className="wideViewOnly" />
        <button type="button" className="expandSection" id="thirdNavSection" onClick={() => expandNavBarItem("thirdNavSection")}>Contact</button>
        <div className="aboutMe-Section">
          <p>Let's get in touch!</p>
          <p>Email: <a href="mailto:aaron@example.com">aaron@example.com</a>
            <br />
            GitHub: <a href="https://github.com/mejia-dev">github.com/mejia-dev</a>
          </p>
        </div>
      </div>
      {projectsRendering}
    </React.Fragment>
  )
}