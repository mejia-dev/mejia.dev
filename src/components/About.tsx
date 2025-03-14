import { useState } from "react";

export default function About(): JSX.Element {

  const [aboutOption, setAboutOption] = useState<string>("Dev");
  function getAboutOption(): string {
    switch (aboutOption) {
      case "Writer": return "I provide technical writing services for items such as IT procedures, software manuals, and programming curriculum. I bridge the gap between complex technical information and readability, helping both technical experts and end users understand the material.";

      case "Trainer": return "Prior to working as a developer, I worked in the IT industry for 5 years, creating training plans and material, organizing training sessions for technicians, and running an internship program for newcomers to the industry.";

      default: return "I'm a full-stack developer specializing in C#/.NET, TypeScript, and Python. I'm currently the lead developer at an IT company, architecting software and writing scripts to increase efficiency, reduce human error, and proactively remediate potential cyber threats.";
    }
  }

  const menuOptions = [
    {
      value: "Dev",
      text: "Full-Stack Dev",
    },
    {
      value: "Writer",
      text: "Technical Writer",
    },
    {
      value: "Trainer",
      text: "IT Trainer",
    },
  ]

  return (
    <div id="aboutContent">
      <h1>Hey, I'm Aaron!</h1>
      <h3 id="aboutButtons">
        {menuOptions.map((item, index) => (
          <span key={"aboutList" + index}>
            <a
              href='#'
              onClick={() => setAboutOption(item.value)}
              className={aboutOption == item.value ? "aboutOptionSelected" : "aboutOption"}
            >
              {item.text}
            </a>
            {index < menuOptions.length - 1 ? <span> · </span> : <></>}
          </span>
        ))}
      </h3>
      <div id="aboutText">
        {getAboutOption()}
      </div>
    </div>
  )
}