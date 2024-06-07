import React from "react";
const Header = () => {
  return (
    <>
      <div className="header__container wrapper container-fluid">
        <div className="header__left">
          <a
            href="https://www.thedelphihotel.com"
            className="logo header__logo js-scroll-logo"
          >
            <img
              src="https://www.thedelphihotel.com/assets/svg/logo.svg"
              alt="The Delphi Downtown LA logo click here to return to home page"
            />
          </a>
        </div>
        <div className="header__middle">
          <div className="header__top">
            <i class="fa-solid fa-phone"></i>
            <a href="tel:2138928080" className="header__phone link-phone">
              &nbsp; 213-892-8080&nbsp;&nbsp;
            </a>
            <i class="fa-solid fa-heart"></i>
            <p className="header__best">&nbsp;Best Rate Guarantee</p>
            <a
              href="#"
              target="_blank"
              className="header__burger js-menu-buger"
            >
              Menu
            </a>
          </div>
          <div className="header__bottom">
            <nav
              id="primary-nav"
              className="privary-navigation"
              role="navigation"
              aria-label="Primary"
            >
              <ul id="privary-navigation" className="privary-navigation__list">
                <li className="privary-navigation__item primary-nav-1">
                  <a
                    aria-haspopup="false"
                    aria-label=""
                    href="https://www.thedelphihotel.com/downtown-la-accommodation"
                    className=" "
                  >
                    Rooms &amp; Suites
                  </a>
                </li>
                <li className="privary-navigation__item primary-nav-2">
                  <a
                    aria-haspopup="false"
                    aria-label=""
                    href="https://www.thedelphihotel.com/downtown-la-restaurants"
                    className=" "
                  >
                    Dining &amp; Entertainment
                  </a>
                </li>
                <li className="privary-navigation__item primary-nav-3">
                  <a
                    aria-haspopup="false"
                    aria-label=""
                    href="https://www.thedelphihotel.com/downtown-la-hotel-deals"
                    className=" "
                  >
                    Offers
                  </a>
                </li>
                <li className="privary-navigation__item primary-nav-4">
                  <a
                    aria-haspopup="false"
                    aria-label=""
                    href="https://www.thedelphihotel.com/explore"
                    className=" "
                  >
                    Explore
                  </a>
                </li>
                <li className="privary-navigation__item primary-nav-5">
                  <a
                    aria-haspopup="true"
                    aria-label=""
                    href="https://www.thedelphihotel.com/downtown-la-event-venues"
                    className=" "
                  >
                    Meetings &amp; Events
                  </a>
                </li>
                <li className="privary-navigation__item primary-nav-8">
                  <a
                    aria-haspopup="false"
                    aria-label=""
                    href="https://www.thedelphihotel.com/downtown-la-hotels"
                    className=" "
                  >
                    Our Hotel
                  </a>
                </li>
                <li className="privary-navigation__item primary-nav-9">
                  <a
                    aria-haspopup="false"
                    aria-label=""
                    href="https://www.thedelphihotel.com/gallery"
                    className=" "
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="header__right">
          <a href="#" className="cta-booking booking-js">
            Reserve
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
