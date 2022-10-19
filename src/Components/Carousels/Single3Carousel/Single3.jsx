import React, { Component } from "react";
import Slider from "react-slick";
import './single3.scss';
// images
import SliderImg from "../../../Assets/images/mexmon1.png";
import SliderImg2 from "../../../Assets/images/mexmon2.png";

export const Single3Slider = () =>  {
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div className="singleContent">
        {/* <h2> Single Item</h2> */}
        <Slider {...settings}>
          <div>
            <img src={SliderImg}  width={410} height={432} alt="" />
          </div>
          <div>
            <img src={SliderImg2}  width={410} height={432} alt="" />
          </div>
          <div>
            <img src={SliderImg}  width={410} height={432} alt="" />
          </div>
          <div>
            <img src={SliderImg2} width={410} height={432} alt="" />
          </div>
        </Slider>
      </div>
    );
}