import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import '../styles/Portfolio.css';
import profilePic from '../img/aaron.png';
import nameWordArt from '../img/name.png';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



export default function Header(props) {

  const [modalDisplay, setModalDisplay] = useState(false);
  
  const toggleModalDisplay = () => {
    setModalDisplay(!modalDisplay);
  }
  
  useEffect(() => {
    Modal.setAppElement(document.getElementById('mainBodyContent'));
  }, [])


  return (
    <>
    <div id="navBar">
      <svg onClick={toggleModalDisplay} xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="navBarHamburger" viewBox="0 0 16 16">
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg>
      <img id="nameWordArt" src={nameWordArt} alt="Aaron Mejia name" />
      <img id="profilePic" src={profilePic} alt="Silhouette of Aaron sitting on beach watching sunset" />
      <Modal
        isOpen={modalDisplay}
        onRequestClose={toggleModalDisplay}
        style={customStyles}
        contentLabel="Example Modal"
      ><div id="navBarButtonHolderMin">
      {props.navButtons.map((action, index) => (
        <span key={index}>
          <button type="button" className="navBarButton" onClick={() => props.onClickNavButton(action)}>{action}</button>
          <br className="wideViewOnly" /><br className="wideViewOnly" />
        </span>
      ))}
    </div></Modal>
      <br />
      <div id="navBarButtonHolder">
        {props.navButtons.map((action, index) => (
          <span key={index}>
            <button type="button" className="navBarButton" onClick={() => props.onClickNavButton(action)}>{action}</button>
            <br className="wideViewOnly" /><br className="wideViewOnly" />
          </span>
        ))}
      </div>
    </div>
    <div id="floatingNavBarPlaceholder"/>
    </>
  )
}

Header.propTypes = {
  onClickNavButton: PropTypes.func,
  navButtons: PropTypes.array
}
