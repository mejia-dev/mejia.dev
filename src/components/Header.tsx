import { Dispatch, SetStateAction, useEffect, useState } from "react";
import ReactModal, { Styles } from "react-modal";
import imgProfilePic from '../assets/aaron.png';
import imgWordArt from '../assets/name.png';

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
      <div>
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

  function renderExternalLinks(): JSX.Element {
    return (
      <div id="navBarExternalLinks">
        <button onClick={() => window.open('https://www.github.com/mejia-dev', '_blank')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </button>

        <button onClick={() => props.onClickNavButton("Contact")}>
          <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setModalShown(false)} width="22" height="22" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
          </svg>
        </button>
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
        <img id="navBarPhotoNameWordArt" src={imgWordArt} alt="Aaron Mejia name" />
        <img id="navBarPhotoProfilePic" src={imgProfilePic} alt="Silhouette of Aaron sitting on beach watching sunset" />
        <ReactModal
          contentLabel="Navigation Buttons"
          isOpen={modalShown}
          onRequestClose={() => setModalShown(!modalShown)}
          style={modalStyling}
        >
          <div id="navBarModalContent">
            {renderNavButtons()}
            {renderExternalLinks()}
          </div>

        </ReactModal>
        <br />
        <div id="navBarButtonHolder">
          {renderNavButtons()}
        </div>

      </div>
      <div id="navBarExternalLinksHolder">
        {renderExternalLinks()}
      </div>
    </>
  )
}