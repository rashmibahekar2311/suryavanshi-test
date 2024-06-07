// src/DiningUI.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DiningUI.css";

const DiningUI = () => {
  return (
    <div className="container-fluid text-center half-black-white">
      <div className="row">
        <div className="col-md-12">
          <div className="position-relative pt-4 image-container">
            <div className="overlay-text">DINING</div>
            <img
              src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/thedelphidowntownla-homepage-dining-image-03-650e00b0beeed.png"
              alt="Dining"
              className="img-fluid rounded-circle"
              width="560px"
              data-aos="zoom-in"
              data-aos-duration="3000"
              data-aos-offset="0"
            />
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div
          className="dining-left "
          data-aos="fade-down"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <h3 className="">Intrigue the Appetite</h3>
          <p>
            Let your palate dive into earth’s most vibrant flavors. Amaze the
            senses in a Japanese omakase restaurant, or some right bites to get
            started.
          </p>
          <a href="#" className="same-link mt-2">
            Let's Eat&nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DiningUI;
