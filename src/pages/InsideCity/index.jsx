import React from 'react'
import { CityCarousel } from '../../Components/Carousels/CityCarousel';
import { MainCarouselOne } from '../../Components/Carousels/MainCarousel_one';
import { MainCarouselTwo } from '../../Components/Carousels/MainCarousel_two';
import { RestourantCarousel } from '../../Components/Carousels/RestourantCarousel';

export const CityPage = () => {
  return (
    <>
      <CityCarousel />
      <MainCarouselOne
        title={'Toshkent diqqatga sazovor ziyoratgohlari'}
        text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
      />
      <div className='carousel_wrapper' style={{ background: '#D7E8E5' }}>
        <MainCarouselTwo title={'Mehmonxonalar'} />
      </div>
      <MainCarouselTwo title={'Istirohat bog’lari'} />
      <MainCarouselTwo title={'Teatr va kino zallar'} />
      <RestourantCarousel title='Restoranlar' />
      <MainCarouselTwo title={'Masjidlar'} />
    </>
  )
}
