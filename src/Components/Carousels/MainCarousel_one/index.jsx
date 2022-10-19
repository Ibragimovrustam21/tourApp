import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";

import './mainCarouselOne.scss'

// images
import Image1 from "../../../Assets/images/single-1.png";

export const MainCarouselOne = ({ title = '', text = '' }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='main_carousel_one_wrapper'>
      <div className='container'>
        <div className='main_carousel_one_header'>
          <h3 className='carousel__title'>{title}</h3>
          <p>{text}</p>
        </div>
        <div className='main_carousel_one_block'>
          <Slider {...settings}>
            {
              [1, 2, 3, 4, 5, 6, 7].map((item, key) => {
                return (
                  <div className='carousel-item' key={key}>
                    <Link className='single__carousel--link' to={'/single'}>
                      {/* <img className='single__image' src={Image1} alt="" /> */}
                      <div>
                      <img className='single__image' src={Image1} alt="" />
                      </div>
                    <h4>Lorem ipsum</h4></Link>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}
