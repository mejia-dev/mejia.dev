import { useState } from "react"

export default function ProjectsList(): JSX.Element {

  const [viewerType, setViewerType] = useState<string>("List");

  return (
    <>
      <h3>Projects List</h3>
      <div id="projectsListControlsDiv">
      <form>
          <input type="radio" id="projectsListViewByList" name="projectsListViewBy" onChange={() => setViewerType("List")} value="List"/>
          <input type="radio" id="projectsListViewByGrid" name="projectsListViewBy" onChange={() => setViewerType("Grid")} value="Grid"/>
          <input type="radio" id="projectsListViewByCarousel" name="projectsListViewBy" onChange={() => setViewerType("Carousel")} value="Carousel"/>
        </form>
      </div>
      <div id="projectsListContent" className={`projectsViewer${viewerType}`}>
        {viewerType}
      </div>
    </>
  )
}