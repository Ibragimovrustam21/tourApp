import { Pagination } from 'antd'
import React from 'react'
import { FilterCard } from '../../Components/FilterPage/FilterCard'
import { FilterCheck } from '../../Components/FilterPage/FilterCheck'
import './filter.scss'

export const Filter = () => {
  return (
    <div className='container '>
      <div className='input-block'>
        <svg width="24" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M22.3028 20.1862C25.9684 15.4784 25.6373 8.66744 21.3095 4.33967C16.6232 -0.346622 9.02523 -0.346622 4.33894 4.33967C-0.347354 9.02596 -0.347354 16.6239 4.33894 21.3102C8.66671 25.638 15.4777 25.9691 20.1854 22.3035C20.2057 22.3264 20.2269 22.3489 20.2488 22.3709L26.6128 28.7349C27.1986 29.3206 28.1483 29.3206 28.7341 28.7349C29.3199 28.1491 29.3199 27.1993 28.7341 26.6135L22.3702 20.2496C22.3482 20.2276 22.3257 20.2065 22.3028 20.1862ZM19.1882 6.46099C22.7029 9.97571 22.7029 15.6742 19.1882 19.1889C15.6735 22.7036 9.97498 22.7036 6.46026 19.1889C2.94554 15.6742 2.94554 9.97571 6.46026 6.46099C9.97498 2.94627 15.6735 2.94627 19.1882 6.46099Z" fill="grey" />
        </svg>
        <input type="text" placeholder='Qidiruv...' />
      </div>
      <div className='filter__wrapper'>
        <div className='filter__left'>
          {
            [1, 2, 3].map((item, key) => {
              return (
                <FilterCheck />
              )
            })
          }
        </div>
        <div className='filter__right'>
          {
            [1, 2, 3, 4, 5, 6].map((item, key) => {
              return (
                <FilterCard />
              )
            })
          }
          <div className="pagination__block">
          <Pagination showLessItems={false} responsive={true} defaultCurrent={1} total={500} />

          </div>
        </div>

      </div>
    </div>
  )
}
