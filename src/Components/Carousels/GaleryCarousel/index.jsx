import Slider from "react-slick";
import "./galeryCarousel.scss";

// images
import Carousel1 from "../../../Assets/carousel-img/carousel-img1.jpg";

export const GaleryCarousel = ({ title = '' }) => {
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
    ]
  }

  return (
    <div className='galery_carousel_wrapper'>
      <div className='container'>
        <div style={title === '' ? { display: 'none' } : {}} className='galery_carousel_header'>
          <h3 className='carousel__title'>{title}</h3>
        </div>
        <div className='galery_carousel_block'>
          <Slider {...settings}>
            {
              [1, 2, 3].map((item, key) => {
                return (
                  <div className="carousel-item-box" key={key}>
                    <div className="carousel-item">
                      <img className="carousel-item-img" src={Carousel1} alt="carousel" />
                    </div>
                    <div className=""><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium dignissimos illo distinctio saepe accusamus, laudantium voluptatem. Illum maxime quidem cumque, ex dolores fugit deserunt adipisci numquam libero et fuga quibusdam nam veritatis impedit dicta aperiam aliquam temporibus beatae ea illo quis, cupiditate laudantium. Beatae est, reprehenderit voluptate nobis, soluta laboriosam quasi vel velit illum quisquam itaque? In laudantium veniam veritatis dignissimos reiciendis repudiandae facere necessitatibus id deserunt incidunt iure nihil temporibus modi, consequuntur enim reprehenderit. Cum officia ut ducimus voluptatibus placeat amet nihil obcaecati repellat! Qui illum ullam id temporibus. Et dicta at dolorem a id commodi obcaecati illo accusamus!</h1></div>
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