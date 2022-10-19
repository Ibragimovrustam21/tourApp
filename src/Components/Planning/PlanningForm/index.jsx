import React from 'react'
import './planningForm.scss'
import { Input, DatePicker } from 'antd'
import img from '../../../Assets/undraw_destination_re_sr74 1.png'

export const PlanningForm = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  return (
    <div className='planning__form'  >
      <div className='planning__form--content'>
        <h3 className='planning__form--title' id='plan'>Sayohatingizni rejalashtiring</h3>
        <Input className='planning__form--input' size='large' placeholder="Manzilingizni kiriting" />
        <DatePicker className='planning__form--input' size='large' onChange={onChange} placeholder='Sana kiriting' />
        <button className='planning__form--btn'>
          Rejalashtirish
        </button>
      </div>
      <img className='planning__form--img' src={img} alt="" />
    </div>
  )
}
