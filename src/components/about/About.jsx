import React from "react";
import "./about.css";
import ME from "../../assets/me-about-2.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me--image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1500+ Worldwide</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Projects</h5>
              <small>100+ Completed</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Years Working</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            error illo hic! Itaque, ullam laborum. Culpa deserunt aliquid sunt
            rerum quod molestias odit! Iste repellat, provident hic sequi vitae
            tenetur.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
