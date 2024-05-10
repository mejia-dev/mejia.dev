import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReactModal, { Styles } from "react-modal";

interface HeaderProps {
  onClickNavButton: Dispatch<SetStateAction<string>>;
  navButtons: string[]
}

export default function Header(props: HeaderProps): JSX.Element {

  const [modalShown, setModalShown] = useState<boolean>(false);

  const modalStyling: Styles = {
    content: {
      top: '20%',
      bottom: 'auto',
      backgroundColor: "#242424",
      borderColor: "#141414"
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)"
    }
  }

  function renderNavButtons(): JSX.Element {
    return (
      <div id={modalShown ? "navBarButtonHolderSmall" : "navBarButtonHolder"}>
        {
          props.navButtons.map((action) => (
            <span key={action + (modalShown ? "small" : "big")} className={action + (modalShown ? "small" : "big")} onClick={() => setModalShown(false)}>
              <button type="button" className={modalShown ? "navBarButtonSmall" : "navBarButton"} onClick={() => props.onClickNavButton(action)}>{action}</button>
              <br /><br />
            </span>
          ))
        }
      </div>
    )
  }

  useEffect(() => {
    ReactModal.setAppElement(document.getElementById("mainBodyContent") as HTMLElement)
  }, [])

  return (
    <>
      <div id="navBar">
        <svg onClick={() => setModalShown(!modalShown)} xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="navBarHamburger" viewBox="0 0 16 16">
          <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
        </svg>
        <ReactModal
          contentLabel="Navigation Buttons"
          isOpen={modalShown}
          onRequestClose={() => setModalShown(!modalShown)}
          style={modalStyling}
        >
          {renderNavButtons()}
        </ReactModal>
        <br />
        {renderNavButtons()}
      </div>
    </>
  )
}