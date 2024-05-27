import { useEffect, useState } from "react";
import noImage from "../assets/noImg.png";

interface ProjectTileProps {
  displayType: string;
  title: string;
  desc: string;
  photoName: string;
  repoName: string;
  liveLink: string | null;
}

interface ImageObject {
  default: string;
}

export default function ProjectTile(props: ProjectTileProps): JSX.Element {
  // this should call GH API to check stars
  const [imgSrc, setImgSrc] = useState<string>("");

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

  return (
    <div className={"projectTile" + props.displayType}>
      <img src={imgSrc} alt={props.title + " screenshot"}/>
      <p>
        <strong>Project Name:</strong> {props.title}
        <br />
        <strong>Description:</strong> {props.desc}
        <br />
        <a href={"https://github.com/mejia-dev/" + props.repoName} target="_blank">GitHub Repo</a>
        <br />
        {props.liveLink && (<a href={props.liveLink} target="_blank">Live Site</a>)}
      </p>
    </div>
  )
}