import React from 'react'
import Slider from "react-slick";
import './homeCarousel.scss'
import img from '../../../Assets/carousel-img/carouselImg.png'
import { HomeBanner } from '../../HomePage/HomeBanner'

export const HomeCarousel = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        }
      }
    ],

  };
  return (
    <div className='home__carousel'>
      <div className='container'>
        <div className='carousel__block'>
          <Slider {...settings}>
            {
              [1, 2, 3, 4, 5].map((item, key) => {
                return (
                  <div className='carousel__item' key={key}>
                    <img className='carousel__item--img' src={img} alt="" />
                    <div className='carousel__item--content'>
                      <h4 className='carousel__item--title'>Enjoy the nature</h4>
                      <h2 className='carousel__item--subtitle'>Welcome to Uzbekistan!</h2>
                      <h3 className='carousel__item--text'>Lorem Ipsum</h3>
                    </div>
                  </div>
                )
              })
            }

          </Slider>
        </div>
        <HomeBanner />
      </div>
    </div>
  )
}
