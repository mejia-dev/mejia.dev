import { useEffect, useState } from "react";
import ProjectTile from "./ProjectTile";
import { useMediaQuery } from "react-responsive";

interface ProjectData {
  title: string;
  desc: string;
  photoName: string;
  repoName: string;
  liveLink: string;
  techs: string[];
}

export default function ProjectsList(): JSX.Element {

  const [viewerType, setViewerType] = useState<string>("Grid");
  const isSmallScreen: boolean = useMediaQuery({query:"(max-width: 1000px)"});

  const currentProjectsList: ProjectData[] = [
    {
      title: "Rhythm Runner",
      desc: "Inspired by retro Windows Media Player's built-in visualizers, Rhythm Runner is a music-based platformer game built fully in vanilla TypeScript! Upload an audio file, then run through a level generated directly from the audio data while dodging obstacles that get in the way.",
      photoName: "rhythmrunner",
      repoName: "rhythmrunner",
      liveLink: "https://mejia.dev/rhythm-runner",
      techs: ["Web Audio API", "React","TypeScript"]
    },
    {
      title: "Pierre's Treats",
      desc: "Bakery storefront, built using the .NET MVC framework, backed by MySQL, and utilizing the .NET Core Identity suite for user authentication.",
      photoName: "pierrestreats",
      repoName: "PierresTreats",
      liveLink: "https://pierrestreats.onrender.com/",
      techs: ["C#",".NET Framework", "EFCore", "MySQL"]
    },
    {
      title: "mejia.dev",
      desc: "This website! Built using Vite + React + TypeScript with a strong focus on accessibility and responsive design.",
      photoName: "mejiadev",
      repoName: "mejia.dev",
      liveLink: "https://mejia.dev/",
      techs: ["React","TypeScript","Vite"]
    },
    {
      title: "Pierre's Nightmare",
      desc: 'Built in four days by a team of four devs, this Unity-powered "horror" survival game allows you to experience the nightmare of a baker named Pierre. How long can you last on an island while being attacked by delicious pastries?',
      photoName: "pierresnightmare",
      repoName: "PierresNightmare",
      liveLink: "https://mejia.dev/pierres-horror/",
      techs: ["C#","Unity","Visual Studio"]
    },
    {
      title: "WA Notification Sound Changer",
      desc: "The notification sound for WhatsApp messages started to blend in with other notification sounds I was receiving throughout the day, so I set out to change that. WA Notification Sound Changer is a Chrome extension that lets you upload a file to use as the default notification sound.",
      photoName: "WhatsApp-Notification-Sound-Changer",
      repoName: "WhatsApp-Notification-Sound-Changer",
      liveLink: "https://chromewebstore.google.com/detail/lofnpggmmbpmapdagkdnfedmhgackcll",
      techs: ["JavaScript","Chrome APIs","Event Handling"]
    },
  ];

  useEffect(() => {
    if (isSmallScreen) setViewerType("List");
  }, [isSmallScreen]);

  return (
    <>
      <h2>Projects</h2>
      <div id="projectsListControlsDiv">
        <form id="projectsListControlsForm">
          <input type="radio" id="projectsListViewByList" name="projectsListViewBy" onChange={() => setViewerType("List")} value="List" />
          <input type="radio" id="projectsListViewByGrid" name="projectsListViewBy" onChange={() => setViewerType("Grid")} value="Grid" />
          <div id="projectsListControlsButtons">
            <label htmlFor="projectsListViewByList">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="projectsListControlsButtonSvg" viewBox="0 0 16 16">
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z" />
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
              </svg>
            </label>
            <label htmlFor="projectsListViewByGrid">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="projectsListControlsButtonSvg" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v8a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5zM1.5 3a.5.5 0 0 0-.5.5V7h4V3zM5 8H1v3.5a.5.5 0 0 0 .5.5H5zm1 0v4h4V8zm4-1V3H6v4zm1 1v4h3.5a.5.5 0 0 0 .5-.5V8zm0-1h4V3.5a.5.5 0 0 0-.5-.5H11z" />
              </svg>
            </label>
          </div>
        </form>
      </div>
      <div id="projectsListContent" className={`projectsViewer${viewerType}`}>
        {currentProjectsList.map((project, projectIndex) => (
          <ProjectTile
            displayType={viewerType}
            key={projectIndex}
            title={project.title}
            desc={project.desc}
            photoName={project.photoName}
            repoName={project.repoName}
            liveLink={project.liveLink}
            techs={project.techs}
          />
        ))}


      </div>
    </>
  )
}