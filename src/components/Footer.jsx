import React from "react";
import { Link } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import TwitterIcon from "@mui/icons-material/Twitter";
const footer = () => {
  function handleClickScroll() {
    window.scrollTo(0, 0);
  }
  return (
    <footer>
      {" "}
      <div className="ftr1">
        <div className="f1r">
          <div className="logo">
            <img src="/imgs/1.png" alt="" />
          </div>
          <div className="loc">
            <div className="titl">
              Transforming Ideas <br /> Into Reality
            </div>
          </div>
          <div className="tm">
            connect.qubit@gmail.com <br /> +91 9723394996
          </div>
        </div>
        <div className="f1l">
          {/* <FacebookRoundedIcon /> */}
          <a href="https://www.instagram.com/_qubit.tech/" target="_blank">
            <InstagramIcon />
          </a>{" "}
          <a href="https://www.linkedin.com/company/qubit-info" target="_blank">
            <LinkedInIcon />
          </a>
          {/* <YouTubeIcon /> */}{" "}
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHNDghcrCkVKTtJDrFcvRqPXDMLVMgSLPngxkRqLhmkNKlXpRjDGHRgxQHGfrFbSWxsFSvZVJKdWKg"
            target="_blank"
          >
            <AlternateEmailIcon />
          </a>
        </div>
      </div>
      <div className="ftr2">
        <input
          type="text"
          placeholder="Enter your email to contact us via email ..."
        />
        <a
          className="btn"
          href="https://mail.google.com/mail/u/0/#inbox?compose=CrpPbDzHNDghcrCkVKTtJDrFcvRqPXDMLVMgSLPngxkRqLhmkNKlXpRjDGHRgxQHGfrFbSWxsFSvZVJKdWKg"
          target="_blank"
        >
          Send Mail
          {/* <AlternateEmailIcon /> */}
        </a>
        {/* <input type="submit" value="Sign Up" className="btn" /> */}
      </div>
      <div className="ftr3">
        <div className="links">
          <a href="#home">home</a>
          <a href="#about">about</a>
          <a href="#service">services</a>
          <a href="#tec">projects</a>
          <a href="#contact">contact</a>
        </div>
        <div className="policy">
          <span>
            Copyright © QUBIT &nbsp;&nbsp;&nbsp; Privacy Policy &nbsp;&nbsp;
            &nbsp; Terms & Conditions
          </span>
        </div>
      </div>
    </footer>
  );
};

export default footer;
