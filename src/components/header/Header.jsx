import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me-1.png";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Joseph Ogundele</h1>
        <h5 className="text-light">Electrical Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
