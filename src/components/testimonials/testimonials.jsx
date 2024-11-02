import React from "react";
import "./testimonials.css";

import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";
import avatar5 from "../../assets/avatar5.jpg";
import avatar6 from "../../assets/avatar6.jpg";

import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination, Autoplay, Keyboard} from "swiper/modules";

const data = [
  {
    id: 1,
    avatar: avatar1,
    name: "Beatrice Umoh",
    review:
      "I had an amazing experience with his services. He was professional, courteous, and delivered outstanding results. I highly recommend him to anyone looking for top-notch service!",
  },
  {
    id: 2,
    avatar: avatar2,
    name: "Adeshina James",
    review:
      "Working with Adeoluwa's team was an excellent experience! He exceeded my expectations. The attention to detail and dedication to delivering quality work were impressive. I look forward to collaborating with them again in the future.",
  },
  {
    id: 3,
    avatar: avatar3,
    name: "Destiny Okafor",
    review:
      "I'm extremely satisfied with the services provided by this team. Their professionalism and efficiency stood out throughout the project. I will definitely choose them for my future projects and recommend them to others seeking reliable and high-quality solutions.",
  },
  {
    id: 4,
    avatar: avatar4,
    name: "Chisom Okeke",
    review:
      "Adeoluwa’s expertise truly made a difference in our project. His insights and recommendations helped us streamline our process, and we achieved fantastic results. I would highly recommend his services to anyone!",
  },
  {
    id: 5,
    avatar: avatar5,
    name: "Tobiloba Johnson",
    review:
      "Fantastic experience from start to finish! The team’s dedication and creativity brought our vision to life in ways we hadn’t imagined. Adeoluwa has an eye for detail and a passion for quality. Highly recommend!",
  },
  {
    id: 6,
    avatar: avatar6,
    name: "Akinola Wellington",
    review:
      "I was blown away by the professionalism and high-quality output. Working with Adeoluwa was a breeze, and the final product was exceptional. Thank you for making this process seamless and enjoyable!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        keyboard={true}
        modules={[Pagination, Autoplay, Keyboard]}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
      >
        {data.map(({id, avatar, name, review}) => (
          <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={avatar} alt={`${name}'s avatar`} />
            </div>

            <h5 className="client__name">{name}</h5>
            <p className="client__review">{review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
