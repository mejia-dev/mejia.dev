import { FormEvent, ReactElement, useState } from 'react';

export default function Contact(): JSX.Element {

  const [formSubmitSuccess, setFormSubmitSuccess] = useState<boolean>(false);
  const [formSubmitError, setFormSubmitError] = useState<null | string>(null);
  const [formSubmitLoading, setFormSubmitLoading] = useState<boolean>(false);

  function submitForm(event: FormEvent): void {
    event.preventDefault();
    if (!formSubmitLoading) {
      setFormSubmitLoading(true);
      setFormSubmitSuccess(false);
      setFormSubmitError(null);
      const formElement: HTMLFormElement = document.getElementById("contactForm") as HTMLFormElement;
      const submittedData: FormData = new FormData(formElement);
      fetch("https://script.google.com/macros/s/AKfycbwyhH4_qQyeSSNXyX7qSX680iXYOpIu7vu-Ih5uyUqzwdNgYBZba_k-PHrlNlwA88XqYA/exec",
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
          formElement.reset();
          setFormSubmitLoading(false);
        })
        .catch((error) => {
          setFormSubmitError(error.message);
          setFormSubmitLoading(false);
        });
    }
  }

  let statusMessage: ReactElement = <span></span>;
  if (formSubmitSuccess) {
    statusMessage = <span>Message sent! I'll be in touch with you soon.</span>
  } else if (formSubmitLoading) {
    statusMessage = <span>Sending message...</span>
  } else if (formSubmitError != null) {
    statusMessage = <span>Error: {formSubmitError}</span>
  }


  return (
    <>
      <h3>Contact Form</h3>
      {/* <p>Contact contact contact! I love contact</p> */}
      <form id="contactForm" onSubmit={(event) => submitForm(event)}>
        <input placeholder="Your Name" name="Name" type="text" autoComplete="name" required />
        <input placeholder="Your Email" name="Email" type="email" autoComplete="email" required />
        {/* rows="5" cols="30" */}
        <textarea name="Message"  placeholder="Your message here..." required />
        <input type="submit" />
      </form>
      <p>{statusMessage}</p>
    </>
  )
}