import React from "react";

const Dining = () => {
  return (
    <div className="container-fluid bg-dark" style={{ position: "relative" }}>
      <img
        data-aos="fade-right"
        data-aos-duration="3000"
        data-aos-offset="0"
        width="100%"
        src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-rooms-64be951902ebd.jpg"
      />
      <div
        className="dining-content-wrapper"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="0"
      >
        <div className="w-40">
          <p className="room-heading">Rooms</p>
          <h3>PEACE & QUIET</h3>
        </div>
        <div className="w-60">
          <p className="para-text">
            From premium amenities to personalized experiences, our 205 spacious
            guest rooms and two penthouses create an environment of
            sophistication, elegance, and comfort that sets The Delphi apart.
          </p>
          <a href="#" className="same-link">
            View all rooms&nbsp; <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Dining;
