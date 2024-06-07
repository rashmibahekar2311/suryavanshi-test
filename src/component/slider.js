import React from "react";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="container-fluid position-relative">
      <Carousel fade className="position-relative">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-header-03-64be9232a7dca.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-header-02-64be922fb6da0.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-header-01-64be922c9b933.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="carousel-caption banner-text position-absolute">
        <h3
          className="banner-main-text"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          THE NEW
        </h3>
        <p
          className="banner-subtext"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          Center of L.A. Culture
        </p>
      </div>
    </div>
  );
};

export default Slider;
