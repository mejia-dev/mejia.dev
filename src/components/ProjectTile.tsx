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
      <img src={imgSrc} alt={props.title + " screenshot"} />
      <div>
        <span>{props.title}</span>
      </div>
    </div>
  )
}