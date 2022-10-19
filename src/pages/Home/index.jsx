import { MainCarousel_one } from "../../Components/Carousels/MainCarousel_one";
import { HomeCarousel } from "../../Components/Carousels/HomeCarousel";
import { MainCarousel_two } from "../../Components/Carousels/MainCarousel_two";
import { NationalFood } from '../../Components/NationalFood'
import { Map } from "../../Components/HomePage/Map";

export const Home = () => {
  return (
    <>
      <HomeCarousel />
      <div style={{ background: 'rgba(56, 138, 123, 0.2)' }}>
        <MainCarousel_one title={'Top ziyoratgohlar'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
      </div>
      <MainCarousel_two title={'Mashxur xalq o’yinlari'} text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'} />
      <NationalFood />
      <Map />
    </>
  )
}