import React from "react";
import a1 from "../../../images/a1.png";
import Slider from "react-slick";
import "./Body.scss";
const Body = (props) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000,
    ltr: true,
  };
  return (
    <div className="body-container">
      <div className="slide-show">
        <Slider {...settings}>
          <div>
            <img src={a1} className="img" />
          </div>
          <div>
            <img src={a1} className="img" />
          </div>
          <div>
            <img src={a1} className="img" />
          </div>
          <div>
            <img src={a1} className="img" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Body;
