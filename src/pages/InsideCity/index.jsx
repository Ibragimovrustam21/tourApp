import React from 'react'
import { CityCarousel } from '../../Components/Carousels/CityCarousel';
import { MainCarousel_one } from '../../Components/Carousels/MainCarousel_one';
import { MainCarousel_two } from '../../Components/Carousels/MainCarousel_two';
import { RestourantCarousel } from '../../Components/Carousels/RestourantCarousel';

export const CityPage = () => {
  return (
    <>
      <CityCarousel />
      <MainCarousel_one
        title={'Toshkent diqqatga sazovor ziyoratgohlari'}
        text={'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'}
      />
      <div className='carousel_wrapper' style={{ background: '#D7E8E5' }}>
        <MainCarousel_two title={'Mehmonxonalar'} />
      </div>
      <MainCarousel_two title={'Istirohat bog’lari'} />
      <MainCarousel_two title={'Teatr va kino zallar'} />
      <RestourantCarousel title='Restoranlar' />
      <MainCarousel_two title={'Masjidlar'} />
    </>
  )
}
