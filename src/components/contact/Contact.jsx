import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_e9ppqhg",
      "template_c685flc",
      form.current,
      "IoUdqGqTnlJJLNYhb"
    );
    e.target.reset().then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>hartitudeh@gmail.com</h5>
            <a href="mailto:hartitudeh@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Hartitudeh_Tech Solutions</h5>
            <a href="https://m.me/hartitudeh" target="_blank">
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatspp</h4>
            <h5>+234 703 049 1677</h5>
            <a
              href="https://api.whatsapp.com/send?phone+2347030491677"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Fullname..."
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email..."
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter Your Message Subject..."
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Enter Your Message..."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
