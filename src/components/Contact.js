import React, { useState } from 'react';

export default function Contact() {

  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false);
  const [formSubmitError, setFormSubmitError] = useState(null);
  const [formSubmitLoading, setFormSubmitLoading] = useState(false);

  function SubmitForm(event) {
    event.preventDefault();
    setFormSubmitLoading(true);
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
          throw new Error(`${response.status}`);
        }
        setFormSubmitSuccess(true);
        setFormSubmitLoading(false);
      })
      .catch((error) => {
        setFormSubmitError(error.message);
        setFormSubmitLoading(false);
      });
  }

  let statusMessage;
  if (formSubmitSuccess) {
    statusMessage = <span>Message sent! I'll be in touch with you soon.</span>
  } else if (formSubmitLoading) {
    statusMessage = <span>Sending message...</span>
  } else if (formSubmitError != null) {
    statusMessage = <span>Error: {formSubmitError}</span>
  }

  return (
    <React.Fragment>
      <h3>Contact Form</h3>
      <p>Contact contact contact! I love contact</p>
      <form id="contactForm" onSubmit={(event) => SubmitForm(event)}>
        <input placeholder="Your Name" name="Name" type="text" autoComplete="name" required />
        <input placeholder="Your Email" name="Email" type="email" autoComplete="email" required />
        <textarea name="Message" rows="5" cols="30" placeholder="Your message here..." required/>
        <input type="submit" />
      </form>
      <p>{statusMessage}</p>
    </React.Fragment>
  )
}