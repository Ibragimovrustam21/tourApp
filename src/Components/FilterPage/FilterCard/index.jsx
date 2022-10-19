import React from 'react'
import { Link } from 'react-router-dom'
import './filterCard.scss'
import img from '../../../Assets/cities/samarqand.png'

export const FilterCard = () => {
  return (
    <div className='filter__card--wrapper'>
      <div className='filter__card--img--block'>
        <img src={img} alt="" />
      </div>
      <div className='fiter__card--info'>
        <h3 className='filter-title'>Lorem Ipsum</h3>
        <p className='filter-text'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        <Link to='/' className='filter-link'>
          Batafsil
          <svg width="20" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.589576 6.75017V9.25017L16.625 9.25017L12.5718 13.3033L14.3396 15.0711L21.4106 8.00002L14.3396 0.928955L12.5718 2.69672L16.6253 6.75017L0.589576 6.75017Z" fill="#285D53" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
