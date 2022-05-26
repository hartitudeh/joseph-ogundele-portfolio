import React from "react";
import "./testimonial.css";
import AVT1 from "../../assets/avatar1.jpg";
import AVT2 from "../../assets/avatar2.jpg";
import AVT3 from "../../assets/avatar3.jpg";
import AVT4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVT1,
    title: "Pastor Amos Adetunji",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Aliquid, laborum Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis saepe ut repellat ab accusamus corrupti deserunt ipsum sed numquam laborum.",
  },
  {
    avatar: AVT2,
    title: "Pastor Amos Adetunji",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Aliquid, laborum Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis saepe ut repellat ab accusamus corrupti deserunt ipsum sed numquam laborum.",
  },
  {
    avatar: AVT3,
    title: "Pastor Amos Adetunji",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Aliquid, laborum Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis saepe ut repellat ab accusamus corrupti deserunt ipsum sed numquam laborum.",
  },
  {
    avatar: AVT4,
    title: "Pastor Amos Adetunji",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit Aliquid, laborum Lorem ipsum dolor sit amet consectetur, adipisicing elit Facilis saepe ut repellat ab accusamus corrupti deserunt ipsum sed numquam laborum.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>What Our Client Says</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Autoplay, Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      >
        {data.map(({ avatar, title, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{title}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
