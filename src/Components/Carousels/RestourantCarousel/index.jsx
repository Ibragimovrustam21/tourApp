import React from 'react'
import Slider from 'react-slick'
import './restourantCarousel.scss'
import img from '../../../Assets/carousel-img/resImg.png'

export const RestourantCarousel = ({ title = '' }) => {
  let settings = {
    dots: true,
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
    ]
  }

  return (
    <div className='res_carousel_wrapper'>
      <div className='container'>
        <div className='carousel_header'>
          <h3 className='carousel__title'>{title}</h3>
        </div>
        <div className='carousel_block'>
          <Slider {...settings}>
            <div className='carousel_item_block'>
              <div className="carousel-item">
                <div className='carousel-item-left'>
                  <img src={img} alt="" />
                </div>
                <div className="carousel-item-right">
                  <h2>Velvet restorani</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>
            <div className='carousel_item_block'>
              <div className="carousel-item">
                <div className='carousel-item-left'>
                  <img src={img} alt="" />
                </div>
                <div className="carousel-item-right">
                  <h2>Velvet restorani</h2>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  </p>
                </div>
              </div>
            </div>


          </Slider>
        </div>
      </div>
    </div>
  )
}
