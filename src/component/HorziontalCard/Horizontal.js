import React from "react";
import Button from "../Button/Button";
import "./Horizontal.css";
function Horizontal() {
  return (
    <section className="about">
      <hr />
      <div className="container">
        <div className="about__header">
          <h2 className="about__header__title">About</h2>
          <p className="about__header__text">About My Experience</p>
        </div>

        <div className="about-container">
          <div className="about-container__image">
            <img src="images/img-1.jpg" alt="" />
          </div>
          <div className="about-container__box">
            <h4 className="about-container__box__title">Html5</h4>
            <p className="about-container__box__text">
              HTML5 is a markup language used for structuring and presenting
              content on the World Wide Web. It is the fifth and last major HTML
              version that is a World Wide Web Consortium (W3C) recommendation.
            </p>
            <Button />
          </div>
          <div className="about-container__image">
            <img src="images/img-2.jpg" alt="" />
          </div>
          <div className="about-container__box">
            <h4 className="about-container__box__title">CSS3</h4>
            <p className="about-container__box__text">
              Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS
              standard used in the styling and formatting of Web pages. CSS3
              incorporates the CSS2 standard with some changes and improvements.
            </p>
            <Button />
          </div>
          <div className="about-container__image">
            <img src="images/img-3.jpg" alt="" />
          </div>
          <div className="about-container__box">
            <h4 className="about-container__box__title">JavaScript</h4>
            <p className="about-container__box__text">
              JavaScript is a text-based programming language used both on the
              client-side and server-side that allows you to make web pages
              interactive. Where HTML and CSS are languages that give structure
              and style to web pages
            </p>
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Horizontal;
