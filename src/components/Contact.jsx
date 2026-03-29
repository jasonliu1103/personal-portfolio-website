import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="contact-info">
        <h1 className="contact-title">Contact</h1>
        <p className="contact-text">Feel free to reach out!</p>
        <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/jason-z-liu/"
          className="linkedin-btn-C"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:jzliu@uwaterloo.ca"
          className="email-btn-C"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdEmail />
        </a>
        </div>
      </div>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" className="contact-textarea" required />
          <input type="submit" value="Send" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
