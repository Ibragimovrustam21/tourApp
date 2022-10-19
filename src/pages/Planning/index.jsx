import React from 'react'
import { PlanningForm } from '../../Components/Planning/PlanningForm'
import { Regions } from '../../Components/Planning/Regions'
import './planning.scss'
// images
import img1 from '../../Assets/Ellipse 14.png'
import ellipse1 from '../../Assets/Ellipse 10.png'
import ellipse2 from '../../Assets/Ellipse 11.png'
import img2 from '../../Assets/minor.png'
import img3 from '../../Assets/registon.png'
import img4 from '../../Assets/Ellipse 9.png'

export const Planning = () => {
  return (
    <div className='container'>
      <div className='planning__header'>
        <div className='planning__header--content'>
          <h2 className='planning__header--title'>O’zbekiston bo’ylab sayohatlar rejalashtiring</h2>
          <p className='planning__header--text'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <a className='planning__header--btn' href="#id">Rejalashtirish</a>
        </div>
        <div className='planning__header--img--block'>
          <img className='planning__header--img1' src={img1} alt="" />
          <div className='planning__header--img2'>
            <img src={img2} alt="" />
            <h3>Minor</h3>
            <p>Buxoro</p>
          </div>
          <div className='planning__header--img3'>
            <img src={img3} alt="" />
            <h3>Registon</h3>
            <p>Samarqand</p>
          </div>
        </div>
        <img className='planning__header--img4' src={img4} alt="" />
        <img className='planning__header--ellipse1' src={ellipse1} alt="" />
        <img className='planning__header--ellipse2' src={ellipse2} alt="" />
      </div>
      <Regions />
      <div id="id">
      <PlanningForm />
      </div>
    </div>
  )
}
