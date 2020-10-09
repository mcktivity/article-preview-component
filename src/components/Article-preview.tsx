import React, { useState } from "react";
import Banner from "../images/drawers.jpg";
import Avatar from "../images/avatar-michelle.jpg";
import Arrow from "../images/icon-share.svg";

import FacebookIcon from "../images/icon-facebook.svg";
import PinterestIcon from "../images/icon-pinterest.svg";
import TwitterIcon from "../images/icon-twitter.svg";

export default () => {
  const [open, setOpen] = useState<boolean>(false);
  const shareClass = open ? "footer active" : "footer";
  function handleClick() {
    setOpen(!open);
  }

  return (
    <article className="card">
      <img className="banner" src={Banner} alt="banner" />
      <section className="content">
        <h3>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h3>
        <p className="text">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>
        <footer className={shareClass}>
          <ShareBox />

          <img className="avatar" src={Avatar} alt="author-avatar" />

          <div>
            <p className="name">Michelle Appleton</p>
            <time dateTime="2020-06-28">28 Jun 2020</time>
          </div>

          <button className="share-btn" onClick={() => handleClick()}>
            <img className="arrow" src={Arrow} alt="arrow" />
          </button>
        </footer>
      </section>
    </article>
  );
};

const ShareBox = () => (
  <section className="share-box">
    <p>share</p>
    <img className="social-icon" src={FacebookIcon} alt="facebook" />
    <img className="social-icon" src={TwitterIcon} alt="twitter" />
    <img className="social-icon" src={PinterestIcon} alt="pinterest" />
  </section>
);
