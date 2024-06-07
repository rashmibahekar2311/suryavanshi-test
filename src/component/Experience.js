import React from "react";
import "./CheckAvailability.css";

const Experience = () => {
  return (
    <>
      <div className="experience-wrapper mt-5">
        <div
          className="exp-sec"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <h2 className="mb-3">Experience Seekers Speak</h2>
          <h4>Excellent stay</h4>
          <h6>
            "Wow... did I enter one of the coolest hotels in Los Angeles or
            what?! Absolutely terrific value, considering the rooms, service
            from the staff, and delicious drinks and food. I will absolutely
            stay here again."
          </h6>
          <p>-Austen</p>
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
    </>
  );
};
export default Experience;
