import { useState } from "react"

export default function ProjectsList(): JSX.Element {

  const [viewerType, setViewerType] = useState<string>("List");

  return (
    <>
      <h2>Projects</h2>
      <div id="projectsListControlsDiv">
        <form id="projectsListControlsForm">
          <input type="radio" id="projectsListViewByList" name="projectsListViewBy" onChange={() => setViewerType("List")} value="List" />
          <input type="radio" id="projectsListViewByGrid" name="projectsListViewBy" onChange={() => setViewerType("Grid")} value="Grid" />
          <input type="radio" id="projectsListViewByCarousel" name="projectsListViewBy" onChange={() => setViewerType("Carousel")} value="Carousel" />
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
            <label htmlFor="projectsListViewByCarousel">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="projectsListControlsButtonSvg" viewBox="0 0 16 16">
                <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2m0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2m0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14" />
              </svg>
            </label>
          </div>
        </form>
      </div>
      <div id="projectsListContent" className={`projectsViewer${viewerType}`}>
        {viewerType}
      </div>
    </>
  )
}