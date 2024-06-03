import { useEffect, useState } from "react";
import ReactModal, { Styles } from "react-modal";
import noImage from "../assets/noImg.png";
import { useMediaQuery } from "react-responsive";

interface ProjectTileProps {
  displayType: string;
  title: string;
  desc: string;
  photoName: string;
  repoName: string;
  liveLink: string;
  techs: string[];
}

interface ImageObject {
  default: string;
}

export default function ProjectTile(props: ProjectTileProps): JSX.Element {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [modalShown, setModalShown] = useState<boolean>(false);
  const isSmallScreen: boolean = useMediaQuery({ query: "(max-width: 1000px)" });

  const modalStyling: Styles = {
    content: {
      position: "fixed",
      top: "50%",
      bottom: "auto",
      left: "10%",
      right: "10%",
      transform: "translate(0%,-50%)",
      padding: "1rem",
      backgroundColor: "#242424",
      borderColor: "#141414",
    },
    overlay: {

      backgroundColor: "rgba(0, 0, 0, 0.8)"
    }
  }

  function handleOnClickAction(): void {
    if (props.displayType === "Grid") {
      setModalShown(true);
    }
  }

  function renderProjectDetails(): JSX.Element {
    return (
      <div className="projectTileDetails">
        <p className="projectTileDetailsTechsList">
          {props.techs.map((tech, techIndex) => (
            <span key={tech + techIndex}>{tech}</span>
          ))}
        </p>
        <p>{props.desc}</p>
        <p>
          <a href={"https://github.com/mejia-dev/" + props.repoName} target="_blank">GitHub Repository</a>
          {props.liveLink != "" && (
            <>
              <br />
              <a href={props.liveLink} target="_blank">Live Site</a>
            </>
          )}
          {/* add stars here? */}
        </p>
      </div>
    )
  }

  useEffect(() => {
    async function getImgSrc(): Promise<void> {
      try {
        const image: ImageObject = await import(`../assets/projects/${props.photoName}.png`);
        setImgSrc(image.default);
      }
      catch (error) {
        setImgSrc(noImage);
      }
    }
    getImgSrc();
  }, [props.photoName]);

  useEffect(() => {
    ReactModal.setAppElement(document.getElementById("mainBodyContent") as HTMLElement)
  }, []);

  return (
    <>
      <div className={"projectTile" + props.displayType} onClick={handleOnClickAction}>
        <img src={imgSrc} alt={props.title + " screenshot"} />
        <div>
          <span className="projectTileTitle">{props.title}</span>
          {props.displayType === "List" &&
            renderProjectDetails()
          }
        </div>
      </div>
      <ReactModal
        contentLabel={props.title + " Project Details"}
        isOpen={modalShown}
        onRequestClose={() => setModalShown(!modalShown)}
        style={modalStyling}
      >
        <div className={isSmallScreen ? "projectTileGridModalSmall" : "projectTileGridModal"}>
          <img src={imgSrc} alt={props.title + " screenshot"} className="projectTileGridModalImg" />
          <div className="projectTileGridModalContent">
            <span className="projectTileGridModalTitle">{props.title}</span>
            {renderProjectDetails()}
          </div>
        </div>
      </ReactModal>
    </>

  )
}