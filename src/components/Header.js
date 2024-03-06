import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Portfolio.css';
import profilePic from '../img/aaron.png';
import nameWordArt from '../img/name.png';

export default function Header(props) {
  return (
    <div className="navBar">
      <img className="name" src={nameWordArt} alt="Aaron Mejia name" />
      <div>
        <img className="profilePic" src={profilePic} alt="silhouette of Aaron sitting on beach watching sunset" />
        <br className="wideViewOnly" />
      </div>
      {props.navButtons.map((action) => (
        <>
          <button type="button" className="expandSection" onClick={() => props.onClickNavButton(action)}>{action}</button>
          <br className="wideViewOnly" />
        </>
      ))}
    </div>
  )
}

Header.propTypes = {
  onClickNavButton: PropTypes.func,
  navButtons: PropTypes.array
}
