import React from "react";
import "./CheckAvailability.css";

const CheckAvailability = () => {
  return (
    <div className="container-fluid">
      <div className="check-availability mt-4">
        <div className="check-in">
          <a href="" className="link-phone">
            CHECK IN
          </a>
        </div>
        <div className="check-out">CHECK OUT</div>
        <div className="rooms">
          ROOMS <span className="dropdown">01 &#9662;</span>
        </div>
        <div className="guests">
          GUESTS <span className="dropdown">01 &#9662;</span>
        </div>
        <button className="check-button">Check Availability</button>
      </div>
      <div className="delphi-section">
        <div className="delphi-text">
          <div className="left-content">
            <h1 data-aos="fade-up" data-aos-duration="3000" data-aos-offset="0">
              THE DELPHI LOS ANGELES
            </h1>
            <p className="custom-paragraph">
              In Ancient Greece, Delphi was considered the center of the world.
              A few thousand years later, that essence now resides at 550 Flower
              Street: a staple of downtown Los Angeles’ silhouette. Once the
              headquarters of Superior Oil, and then the focal point of the
              city’s early 2000s revitalization, our address is once again
              rewriting the script for creativity, culture, and hospitality.
            </p>
          </div>
        </div>
        <div
          className="delphi-image"
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <img
            src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-intro-64be92d3214a7.webp"
            alt="Delphi Los Angeles"
          />
        </div>
      </div>
      <div className="slider-block__container">
        <div
          className="slider-block__left"
          data-aos="fade-left"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <h1>The Delphi</h1>
          <span>In Detail</span>
        </div>
        <div className="slider-block__middle">
          <img
            className="slider-block__images"
            src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/thedelphidowntownla-homepage-aniconicaddress-02-65022b0bb4c71.webp"
          />
        </div>
        <div
          className="slider-right"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <h3>An Elevated Experience </h3>
          <p>
            To us, the ultimate luxury is service that’s personal. Not too
            refined or rigid. We look forward to welcoming you into our
            community, but don’t worry—there won’t be any red carpets or white
            gloves.
          </p>
        </div>
        <div className="btn-bottom">
          <div className="left-btn">
            <i class="fa-solid fa-arrow-left"></i>
          </div>
          <div className="right-btn">
            <i class="fa-solid fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckAvailability;
