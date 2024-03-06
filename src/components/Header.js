import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Portfolio.css';
import profilePic from '../img/aaron.png';
import nameWordArt from '../img/name.png';

export default function Header(props) {

  return (
    <div className="navBar">
        <div>
          <img className="profilePic" src={profilePic} alt="silhouette of Aaron sitting on beach watching sunset" />
        </div>
        <img className="name" src={nameWordArt} alt="Aaron Mejia name" />
        <br className="wideViewOnly" /><br className="wideViewOnly" />
        <button type="button" className="expandSection" id="firstNavSection" onClick={props.onClickHome}>Home</button>
        {/* <div className="aboutMe-Section">
          <p>Hello!<br />I am an up-and-coming developer in the Portland metro area. I come from a background of 5 years in IT, managing the maintenance of large networks, training of technicians, and creation/documentation of processes. Programming excites me and I <em>love</em> helping individuals further themselves and their businesses through technology. I am currently enrolled in <span ><a href="https://epicodus.com" target="_blank" rel="noreferrer">Epicodus</a></span> to help achieve this goal.<br />I'm excited to work with you!</p>
        </div> */}
        <br className="wideViewOnly" />
        <button type="button" className="expandSection" id="secondNavSection" onClick={props.onClickAbout}>About</button>
        {/* <div className="aboutMe-Section">
          <ul>
            <li>I have assisted in the creation & design of at least 4 different websites for small businesses.</li>
            <li>I have built fully-functioning web servers from scratch on Linux using LAMP stacks and WordPress</li>
          </ul>
        </div> */}
        <br className="wideViewOnly" />
        <button type="button" className="expandSection" id="thirdNavSection" onClick={props.OnClickContact}>Contact</button>
        {/* <div className="aboutMe-Section">
          <p>Let's get in touch!</p>
          <p>Email: <a href="mailto:aaron@example.com">aaron@example.com</a>
            <br />
            GitHub: <a href="https://github.com/mejia-dev">github.com/mejia-dev</a>
          </p>
        </div> */}
        <br className="wideViewOnly" />
      </div>
  )
}

Header.propTypes = {
  onClickHome: PropTypes.func,
  onClickAbout: PropTypes.func,
  OnClickContact: PropTypes.func
}
