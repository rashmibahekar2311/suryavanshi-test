import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useState } from "react";

const Footer = () => {
  const [focusedField, setFocusedField] = useState("");

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField("");
  };

  return (
    <div className="container-fluid bg-dark">
      <div
        className="address-container"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="0"
      >
        <div>
          <img src="https://www.thedelphihotel.com/assets/svg/logo-white.svg" />
        </div>
        <div
          className="middle-text"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <a
            href="https://goo.gl/maps/YgA6fJHGbVPZfn5Y9"
            target="_blank"
            className="link-phone font-white"
          >
            550 S Flower St <br />
            Los Angeles,CA 90071
          </a>
        </div>
        <div
          className="middle-text"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <a
            href="https://goo.gl/maps/YgA6fJHGbVPZfn5Y9"
            target="_blank"
            className="link-phone font-white"
          >
            213-892-8080
          </a>
        </div>
      </div>
      <div className="footer-container mt-5">
        <div
          className="menu-container"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <div className="menu-item">FAQ</div>
          <div className="menu-item">Media Inquiries</div>
          <div className="menu-item">Contact Us</div>
          <div className="menu-item">Careers</div>
        </div>
      </div>
      <h2 className="font-white text-center my-5 footer-text">
        Stay in The Know
      </h2>
      <div
        className="form-container"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="0"
      >
        <div className="checkbox-container container d-flex justify-content-between mb-5">
          <TextField
            id="first-name"
            label="First Name"
            variant={focusedField === "firstName" ? "outlined" : "standard"}
            className="input-field"
            InputProps={{
              style: { color: "white" },
              classes: {
                underline:
                  focusedField === "firstName" ? "underline-white" : "",
              },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            onFocus={() => handleFocus("firstName")}
            onBlur={handleBlur}
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant={focusedField === "lastName" ? "outlined" : "standard"}
            className="input-field"
            InputProps={{
              style: { color: "white" },
              classes: {
                underline: focusedField === "lastName" ? "underline-white" : "",
              },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            onFocus={() => handleFocus("lastName")}
            onBlur={handleBlur}
          />
          <TextField
            id="email-address"
            label="Email Address"
            variant={focusedField === "email" ? "outlined" : "standard"}
            className="input-field"
            InputProps={{
              style: { color: "white" },
              classes: {
                underline: focusedField === "email" ? "underline-white" : "",
              },
            }}
            InputLabelProps={{
              style: { color: "white" },
            }}
            onFocus={() => handleFocus("email")}
            onBlur={handleBlur}
          />
        </div>
        <div className="checkbox-container mb-5 container d-flex justify-content-between">
          <FormControlLabel
            control={<Checkbox style={{ color: "white" }} />}
            label={
              <span style={{ color: "white" }}>
                I have read and agree to the Privacy Policy.
              </span>
            }
          />
          <FormControlLabel
            control={<Checkbox style={{ color: "white" }} />}
            label={
              <span style={{ color: "white" }}>
                Yes, I would like to receive emails with exclusive specials and
                offers.
              </span>
            }
          />
          <a
            aria-haspopup="false"
            aria-label=""
            href="https://www.thedelphihotel.com/gallery"
            className="link-phone font-white sign-up-button"
          >
            Sign Up &nbsp;&nbsp;<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
      <div
        className="container-fluid copy-right-section row"
        data-aos="fade-up"
        data-aos-duration="3000"
        data-aos-offset="0"
      >
        <div className="col-lg-6 col-xl-4">
          <ul className="d-flex justify-content-between">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Accessibility</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Consent Preferences</a>
            </li>
          </ul>
        </div>
        <div
          className="col-lg-6 col-xl-6 text-center"
          data-aos="fade-up"
          data-aos-duration="3000"
          data-aos-offset="0"
        >
          <a href="#" className="footer-link">
            The Delphi Downtown LA. 2024. All rights reserved.
          </a>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  );
};

export default Footer;
