import React from "react";
import "./footer.css";
import {FaFacebookF} from 'react-icons/fa';
import {FiInstagram} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {BsGithub} from 'react-icons/bs';

const Footer = () => {
  return <footer id="footer">
    <a href="https://www.hartitudeh.github.io" className="footer__logo">Joseph Ogundele Profile</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#service">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonial">Testimonial</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com">
        <FaFacebookF />
      </a>
      <a href="https://instagram.com">
        <FiInstagram />
      </a>
      <a href="https://twitter.com">
        <IoLogoTwitter />
      </a>
      <a href="https://github.com">
        <BsGithub />
      </a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Joseph Ogundele Profile. All right reserved. With ❤ By <a href="https://hartitudeh.github.io">Hartitudeh_Tech Solutions</a></small>
    </div>
  </footer>;
};

export default Footer;
