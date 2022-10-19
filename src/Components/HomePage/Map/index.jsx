import React from 'react'
import './map.scss'
import uzbMap from './uzbekistan.svg'

export const Map = () => {

  return (
    <div className='container'>
      <div className='map__wrapper'>
        <h3 className='map__title'>Viloyatlar</h3>
        <img className='map__img' src={uzbMap} alt="" />
      </div>
    </div>
  )
}
