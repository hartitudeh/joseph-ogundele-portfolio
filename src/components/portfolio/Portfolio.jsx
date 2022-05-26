import React from "react";
import "./portfolio.css";
import PORT1 from "../../assets/portfolio1.jpg";
import PORT2 from "../../assets/portfolio2.jpg";
import PORT3 from "../../assets/portfolio3.jpg";
import PORT4 from "../../assets/portfolio4.jpg";
import PORT5 from "../../assets/portfolio5.png";
import PORT6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: PORT1,
    title: "crypto currency dashboard",
    facebook: "https://www.facebook.com/ogundele-joseph",
    demo: "https://www.hartitudeh.github.io",
  },
  {
    id: 2,
    image: PORT2,
    title: "crypto currency dashboard",
    facebook: "https://www.facebook.com/ogundele-joseph",
    demo: "https://www.hartitudeh.github.io",
  },
  {
    id: 3,
    image: PORT3,
    title: "crypto currency dashboard",
    facebook: "https://www.facebook.com/ogundele-joseph",
    demo: "https://www.hartitudeh.github.io",
  },
  {
    id: 4,
    image: PORT4,
    title: "crypto currency dashboard",
    facebook: "https://www.facebook.com/ogundele-joseph",
    demo: "https://www.hartitudeh.github.io",
  },
  {
    id: 5,
    image: PORT5,
    title: "crypto currency dashboard",
    facebook: "https://www.facebook.com/ogundele-joseph",
    demo: "https://www.hartitudeh.github.io",
  },
  {
    id: 6,
    image: PORT6,
    title: "crypto currency dashboard",
    facebook: "https://www.facebook.com/ogundele-joseph",
    demo: "https://www.hartitudeh.github.io",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, image, title, facebook, demo}) => {
          return(
            <article key={id} className="portfolio__items">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={facebook} className="btn">Facebook</a>
                <a href={demo} className="btn btn-primary">Demo</a>
              </div>
            </article>
          )
        })
      }
      </div>
    </section>
  );
};

export default Portfolio;
