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
      </div>
      
      <br className="wideViewOnly" />
      <button type="button" className="expandSection" onClick={() => props.onClickNavButton("Home")}>Home</button>

      <br className="wideViewOnly" />
      <button type="button" className="expandSection" onClick={() => props.onClickNavButton("About")}>About</button>

      <br className="wideViewOnly" />
      <button type="button" className="expandSection" onClick={() => props.onClickNavButton("Contact")}>Contact</button>

      <br className="wideViewOnly" />
    </div>
  )
}

Header.propTypes = {
  onClickNavButton: PropTypes.func
}
