import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.facebook.com/hartitudeh">
        <FaFacebookSquare/>
      </a>
      <a href="https://www.twitter.com/hartitudeh">
        <FaTwitterSquare />
      </a>
      <a href="https://www.github.com/hartitudeh">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/hartitudeh">
        <BsLinkedin />
      </a>
      <a href="https://www.youtube.com/hartitudeh">
        <FaYoutubeSquare/>
      </a>
      <a href="https://www.dribble.com/hartitudeh">
        <FaDribbbleSquare/>
      </a>
    </div>
  );
};

export default HeaderSocials;
