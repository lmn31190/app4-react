import React, { useRef } from "react";
import emailjs from "@emailjs/browser"
// import {init} from "@emailjs/browser"

// init(process.end.ID)

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

    emailjs
      .sendForm(
        "service_zs2b5kq",
        "template_mgv9z5a",
        form.current,
        "H8wMyJtBCNXEMZGYx"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          formMess.innerHTML = '<p class="success">Message Envoyé !</p>';

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2500);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form-container">
      <h2>contactez-nous</h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>Nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Envoyer" className="hover" />
      </form>
      <div className="form-message"></div>
    </div>
  );
};

export default ContactForm;
