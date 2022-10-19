import { MainCarouselOne } from "../../Components/Carousels/MainCarousel_one";
import { HomeCarousel } from "../../Components/Carousels/HomeCarousel";
import { MainCarouselTwo } from "../../Components/Carousels/MainCarousel_two";
import { NationalFood } from '../../Components/NationalFood'
import { Map } from "../../Components/HomePage/Map";

export const Home = () => {
  return (
    <>
      <HomeCarousel />
      <div style={{ background: 'rgba(56, 138, 123, 0.2)' }}>
        <MainCarouselOne title={'Top ziyoratgohlar'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
      </div>
      <MainCarouselTwo title={'Mashxur xalq o’yinlari'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
      <NationalFood />
      <Map />
    </>
  )
}