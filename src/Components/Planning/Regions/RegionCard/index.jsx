import React from 'react'
import './regionCard.scss'
// images
import img from '../../../../Assets/carousel-img/carousel-img1.jpg'
import { Link } from 'react-router-dom'
export const RegionCard = () => {
  return (
    <div className='region__card'>
      <div className='region__card__img--box'>
        <img src={img} className='region__card--img' alt="" />
      </div>
      <div className='region__card--text'>
        <Link to={''} className='region__card--nav' >
          <svg width="24" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.119436 8.33364V11.667L21.5 11.667L16.0957 17.0712L18.4528 19.4282L27.8809 10.0001L18.4528 0.572021L16.0957 2.92904L21.5003 8.33364L0.119436 8.33364Z" fill="#285D53" />
          </svg>
        </Link>
        <p>Mashxur: qadimiy binolar, ilmiy yodgorliklar</p>
      </div>
    </div>
  )
}
