import React from "react";
import Fancybox from "./Fancybox";
import "./Gallery.css"; // Assuming you saved the converted CSS as Gallery.css

const Gallery = () => {
  return (
    <section className="big-gallery wrapper">
      <Fancybox>
        <article className="big-gallery__allimg">
          <figure className="big-gallery__img big-gallery__img--1 animate-fade visible fade-in">
            <a
              href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-03-64be9659e12d6.webp"
              className="big-gallery__overlay"
              data-fancybox="gallery-big"
            >
              <img
                src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-03-64be9659e12d6.webp"
                alt="a large living room with a large window"
                loading="lazy"
              />
            </a>
          </figure>
          <figure className="big-gallery__img big-gallery__img--2 animate-fade visible fade-in">
            <a
              href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-04-64be965d21267.webp"
              className="big-gallery__overlay"
              data-fancybox="gallery-big"
            >
              <img
                src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-04-64be965d21267.webp"
                alt="a building with a small staircase and plants"
                loading="lazy"
              />
            </a>
          </figure>
          <figure className="big-gallery__img big-gallery__img--3 animate-fade visible fade-in">
            <a
              href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-64dd387bae739.webp"
              className="big-gallery__overlay"
              data-fancybox="gallery-big"
            >
              <img
                src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-64dd387bae739.webp"
                alt="a person wearing sunglasses"
                loading="lazy"
              />
            </a>
          </figure>
          <figure className="big-gallery__img big-gallery__img--4 animate-fade visible fade-in">
            <a
              href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-05-64be965f97bec.webp"
              className="big-gallery__overlay"
              data-fancybox="gallery-big"
            >
              <img
                src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-05-64be965f97bec.webp"
                alt="a hand holding a bag in a car"
                loading="lazy"
              />
            </a>
          </figure>
          <figure className="big-gallery__img big-gallery__img--5 animate-fade visible fade-in">
            <a
              href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-2-64dd3859bcc6e.webp"
              className="big-gallery__overlay"
              data-fancybox="gallery-big"
            >
              <img
                src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-gallery-2-64dd3859bcc6e.webp"
                alt="a city with tall buildings"
                loading="lazy"
              />
            </a>
          </figure>
          <figure className="big-gallery__img big-gallery__img--6 animate-fade visible fade-in">
            <a
              href="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-01-64be96552fd38.webp"
              className="big-gallery__overlay"
              data-fancybox="gallery-big"
            >
              <img
                src="https://symphony.cdn.tambourine.com/the-delphi-downtown-la-full/media/delphi-homepage-gallery-01-64be96552fd38.webp"
                alt="a room with a tv and couches"
                loading="lazy"
              />
            </a>
          </figure>
          <div className="big-gallery__content">
            <h2
              className="big-gallery__title"
              data-aos="fade-up"
              data-aos-duration="3000"
              data-aos-offset="0"
            >
              <span>Scenes</span>
              <span> from </span>
              <span>The City </span>
            </h2>
            <div className="big-gallery__cta">
              <a
                href="https://www.thedelphihotel.com/gallery"
                className="btn"
                aria-label="Learn more about View Gallery"
              >
                View gallery
              </a>
            </div>
          </div>
        </article>
      </Fancybox>
    </section>
  );
};

export default Gallery;
