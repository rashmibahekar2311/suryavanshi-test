import React from "react";

const Events = () => {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-8" style={{ paddingRight: 0 }}>
          <img
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-offset="0"
            width="100%"
            src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-events-64be95d53df4d.jpg "
          />
        </div>
        <div className="col-4 bg-green" style={{ position: "relative" }}>
          <h1 className="position-text">EVENTS</h1>
          <div
            className="h4-position"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-offset="0"
          >
            <h4 className="">ORGANIZED OCCASIONS</h4>
            <p className="p-position">
              Bring together a few friends and make a few more while you’re with
              us. From casual to corporate, we’ve got all the space and
              amenities you need, and then some.
            </p>
            <a href="#" className="link-phone" style={{ color: "white" }}>
              <i>Gather together&nbsp;&nbsp;</i>
              <i class="fa-solid fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
