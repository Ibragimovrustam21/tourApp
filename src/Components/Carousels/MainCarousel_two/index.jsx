import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import './mainCarouselTwo.scss';

// images
import Images2 from "../../../Assets/images/single-2.png"

export const MainCarouselTwo = ({ title = '', text = '' }) => {
  let settings = {
    dots: false,
    infinite: false,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows:false
        }
      }
    ]
  }

  return (
    <div className='main_carousel_two_wrapper'>
      <div className='container'>
        <div className='main_carousel_two_header'>
          <h3 style={text ? {} : { marginBottom: "50px" }} className='carousel__title'>{title}</h3>
          <p className='carousel__text'>{text}</p>
        </div>
        <div className='main_carousel_two_block'>
          <Slider {...settings}>
            {
              [1, 2, 3, 4, 5].map((item, key) => {
                return (
                  <div className='carousel-item' key={key}>
                    <div className='carousel-card'>
                      <div className='carousel-card-img'>
                        <img src={Images2} alt="" />
                      </div>
                      <h4>Lorem Ipsum</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                      <Link to={'/single3'}>
                        Batafsil
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.589576 6.75017V9.25017L16.625 9.25017L12.5718 13.3033L14.3396 15.0711L21.4106 8.00002L14.3396 0.928955L12.5718 2.69672L16.6253 6.75017L0.589576 6.75017Z" fill="#285D53" />
                        </svg>
                      </Link>
                    </div>
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
