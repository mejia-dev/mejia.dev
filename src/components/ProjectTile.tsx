import { useEffect, useState } from "react";
// import ReactModal, { Styles } from "react-modal";
import noImage from "../assets/noImg.png";

interface ProjectTileProps {
  displayType: string;
  title: string;
  desc: string;
  photoName: string;
  repoName: string;
  liveLink: string;
}

interface ImageObject {
  default: string;
}

export default function ProjectTile(props: ProjectTileProps): JSX.Element {
  const [imgSrc, setImgSrc] = useState<string>("");
  const [modalShown, setModalShown] = useState<boolean>(false);

  function handleOnClickAction(): void {
    // if displayType is carousel or list, do nothing
    // if displayType is grid, show Modal

    // alternatively, useEffect to check if displayType is list, and append OnClick action to show modal if needed?
  }

  function renderProjectDetails(): JSX.Element {
    return (
      <div>
        <p>{props.desc}</p>
        <p>
          <a href={"https://github.com/mejia-dev/" + props.repoName} target="_blank">GitHub Repository</a>
          {props.liveLink != "" && (
            <>
              <br />
              <a href={props.liveLink} target="_blank">Live Site</a>
            </>
          )}
        {/* add languages/techs here? */}
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
    };
    getImgSrc();
  }, [props.photoName])

  // useEffect(() => {
  //   ReactModal.setAppElement(document.getElementById("mainBodyContent") as HTMLElement)
  // }, [])

  return (
    <div className={"projectTile" + props.displayType}>
      <img src={imgSrc} alt={props.title + " screenshot"} />
      <div>
        <span>{props.title}</span>
        {/* <ReactModal
          contentLabel={props.title + " Project Details"}
          isOpen={modalShown}
          onRequestClose={() => setModalShown(!modalShown)}
        // style={modalStyling}
        >
          {renderProjectDetails()}
        </ReactModal> */}
        {props.displayType === "List" &&
          renderProjectDetails()
        }
      </div>
    </div>
  )
}