import React from 'react'
import './filterCheck.scss'

export const FilterCheck = () => {
  
  return (
    <div className='filter__check--wrapper'>
      <h3 className='filter__check--title'>Bo`limlar</h3>
      <ul className='filter__check--list'>
        <li className='filter__check--list--item'>
          <input type="checkbox" class="custom-checkbox" id="ziyoratgoh" value="yes" />
          <label for="ziyoratgoh">Ziyoratgohlar</label>
        </li>
        <li className='filter__check--list--item'>
          <input type="checkbox" class="custom-checkbox" id="muzeylar" value="yes" />
          <label for="muzeylar">Muzeylar</label>
        </li>
        <li className='filter__check--list--item'>
          <input type="checkbox" class="custom-checkbox" id="masjidlar" value="yes" />
          <label for="masjidlar">Masjidlar</label>
        </li>
        <li className='filter__check--list--item'>
          <input type="checkbox" class="custom-checkbox" id="masjidlar" value="yes" />
          <label for="masjidlar">Masjidlar</label>
        </li>
      </ul>
    </div>
  )
}
