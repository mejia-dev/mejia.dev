import React, { useState } from 'react';

export default function Contact() {

  // const [projectsListLoaded, setProjectsListLoaded] = useState(false);
  // const [projectsList, setProjectsList] = useState([]);
  // const [projectsListApiErrorMsg, setProjectsListApiErrorMsg] = useState(null);

  function SubmitForm(event) {
    event.preventDefault();
    const formElement = document.getElementById("contactForm");
    const submittedData = new FormData(formElement);
    fetch(`${process.env.REACT_APP_CONTACT_FORM_API}`,
      {
        method: "POST",
        body: submittedData
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <h3>Contact Form</h3>
      <p>Contact contact contact! I love contact</p>
      <form id="contactForm" onSubmit={(event) => SubmitForm(event)}>
        <input placeholder="Your Name" name="Name" type="text" required />
        <input placeholder="Your Email" name="Email" type="email" required />
        <input placeholder="Your Message" name="Message" type="text" required />
        <input type="submit" />
      </form>
    </React.Fragment>
  )
}