import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Portfolio.css';
import profilePic from '../img/aaron.png';
import nameWordArt from '../img/name.png';

export default function Header(props) {
  return (
    <>
    <div id="navBar">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" id="navBarHamburger" viewBox="0 0 16 16">
        <path d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
      </svg>
      <img id="nameWordArt" src={nameWordArt} alt="Aaron Mejia name" />
      <img id="profilePic" src={profilePic} alt="Silhouette of Aaron sitting on beach watching sunset" />
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
