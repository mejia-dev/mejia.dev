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
      <h2>Contact</h2>
      <p>Whether you have an idea for a project or just want to chat, feel free to send me a message!</p>
      <form id="contactForm" onSubmit={(event) => submitForm(event)}>
        <div id="contactFormDetails">
          <input placeholder="Name" name="Name" type="text" autoComplete="name" required />
          <input placeholder="Email" name="Email" type="email" autoComplete="email" required />
        </div>
        
        <textarea name="Message" cols={30} rows={10} placeholder="Your message here..." required />
        <br />
        <button type="submit">
          Send <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-send-fill" viewBox="0 0 16 16">
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z" />
          </svg>
        </button>
      </form>
      <p>{statusMessage}</p>
    </>
  )
}