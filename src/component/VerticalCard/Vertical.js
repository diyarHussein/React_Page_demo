import Button from "../Button/Button";
import "./Vertical.css";
function Vertical() {
  return (
    <div className="container">
      <section className="services">
        <div className="services__header">
          <h2 className="services__header__title">Services</h2>
          <p className="services__header__text">My Services</p>
        </div>
        <div className="box-container">
          <div className="box-container__box">
            <h4 className="box-container__box__title">Html5</h4>
            <p className="box-container__box__text">
              HTML5 is a markup language used for structuring and presenting
              content on the World Wide Web. It is the fifth and last major HTML
              version that is a World Wide Web Consortium (W3C) recommendation.
            </p>
            <Button />
          </div>
          <div className="box-container__box">
            <h4 className="box-container__box__title">CSS3</h4>
            <p className="box-container__box__text">
              Cascading Style Sheets Level 3 (CSS3) is the iteration of the CSS
              standard used in the styling and formatting of Web pages. CSS3
              incorporates the CSS2 standard with some changes and improvements.
            </p>
            <Button />
          </div>
          <div className="box-container__box">
            <h4 className="box-container__box__title">JavaScript</h4>
            <p className="box-container__box__text">
              JavaScript is a text-based programming language used both on the
              client-side and server-side that allows you to make web pages
              interactive. Where HTML and CSS are languages that give structure
              and style to web pages
            </p>
            <Button />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Vertical;
