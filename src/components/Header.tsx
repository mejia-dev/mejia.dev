import { Dispatch, SetStateAction } from "react"

interface HeaderProps {
  onClickNavButton: Dispatch<SetStateAction<string>>;
  navButtons: string[]
}

export default function Header(props: HeaderProps): JSX.Element {
  return (
    <>
      <div id="navBar">
        <div id="navBarButtonHolder">
          {props.navButtons.map((action) => (
            <span key={action}>
              <button type="button" className="navBarButton" onClick={() => props.onClickNavButton(action)}>{action}</button>
              <br className="wideViewOnly" /><br className="wideViewOnly" />
            </span>
          ))}
        </div>
      </div>
    </>
  )
}