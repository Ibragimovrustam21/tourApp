import React from 'react'
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import Carousel1 from "../../../Assets/carousel-img/carousel-img1.jpg";

import '../../PageHeader/pageHeader.scss'
import './cityCarousel.scss'

export const CityCarousel = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
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
          slidesToScroll: 1
        }
      }
    ],
    arrows: false,
    autoplay: true,
    fade: true
  }

  return (
    <div className='city_carousel_wrapper'>
      <div className='container'>
        <div className='city_carousel_header'>
          <ul class="breadcrumb">
            <li><Link to='/'>Bosh sahifa</Link></li>
            <li><Link to='/cities'>Shaharlar</Link></li>
            <li>Toshkent</li>
          </ul>
        </div>
        <div className='city_carousel_block'>
          <Slider {...settings}>
            {
              [1, 2, 3].map((item, key) => {
                return (
                  <div className="carousel-item-box" key={key}>
                    <div className="carousel-item">
                      <img src={Carousel1} alt="" />
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
