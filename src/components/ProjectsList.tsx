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
      techs: ["React","TypeScript","Vite","Web Audio API"]
    },
    {
      title: "Pierre's Treats",
      desc: "ASP.NET 6 project backed by MySQL server utilizing ASP.NET Core Identity for authentication",
      photoName: "2",
      repoName: "PierresTreats",
      liveLink: "",
      techs: ["C#","MySQL", ".NET", "EFCore"]
    },
    {
      title: "Rhythm Runner",
      desc: "Music-based platformer game in TypeScript!",
      photoName: "3",
      repoName: "rhythmrunner",
      liveLink: "https://mejia.dev/rhythm-runner",
      techs: ["React","TypeScript","Vite","Web Audio API"]
    },
    {
      title: "Pierre's Treats",
      desc: "ASP.NET 6 project backed by MySQL server utilizing ASP.NET Core Identity for authentication",
      photoName: "4",
      repoName: "PierresTreats",
      liveLink: "",
      techs: ["C#","MySQL", ".NET", "EFCore"]
    },
    {
      title: "Rhythm Runner",
      desc: "Music-based platformer game in TypeScript!",
      photoName: "5",
      repoName: "rhythmrunner",
      liveLink: "https://mejia.dev/rhythm-runner",
      techs: ["React","TypeScript","Vite","Web Audio API"]
    },
    {
      title: "Pierre's Treats",
      desc: "ASP.NET 6 project backed by MySQL server utilizing ASP.NET Core Identity for authentication",
      photoName: "6",
      repoName: "PierresTreats",
      liveLink: "",
      techs: ["C#","MySQL", ".NET", "EFCore"]
    },
    {
      title: "Another Project",
      desc: "Some random app that probably doesn't work",
      photoName: "7",
      repoName: "test",
      liveLink: "https://test.com",
      techs: ["Python","Django","Tailwind"]
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