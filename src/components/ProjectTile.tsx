interface ProjectTileProps {
  displayType: string;
  title: string;
  desc: string;
  repoName: string;
  liveLink: string | null;
}

export default function ProjectTile(props: ProjectTileProps): JSX.Element {
  // this should call GH API to check stars
  return (
    <div className={"projectTile" + props.displayType}>
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