import React from 'react'
import { RegionCard } from './RegionCard'
import './regions.scss'
// import ellipse from '../../../Assets/Ellipse 544.png'

export const Regions = () => {
  return (
    <div className='regions__wrapper'>
      <div className='regions__info'>
        <h3 className='regions__info--title'>Top manzillar</h3>
        <p className='regions__info--text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
      </div>
      <div className='regions__items'>
        {
          [1, 2, 3, 4, 5].map((item, key) => {
            return <RegionCard />
          })
        }
        {/* <img className='regions__ellipse' src={ellipse} alt="" /> */}
      </div>
    </div>
  )
}
