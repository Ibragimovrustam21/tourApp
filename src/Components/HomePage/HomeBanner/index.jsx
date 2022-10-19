import React from 'react'
import './homeBanner.scss'

export const HomeBanner = () => {
  return (
    <div className='home__banner container'>
      {
        [1, 2, 3].map((item, key) => {
          return (
            <div className='home__banner--child' key={key}>
              <div className='home__banner__iconBlock'>
                <div className='home__banner__icon'>
                  <svg width="17" height="19" viewBox="0 0 17 19" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0923 8.04677C12.0923 9.90445 10.5864 11.4104 8.72867 11.4104C6.87099 11.4104 5.36504 9.90445 5.36504 8.04677C5.36504 6.18908 6.87099 4.68313 8.72867 4.68313C10.5864 4.68313 12.0923 6.18908 12.0923 8.04677ZM10.4105 8.04677C10.4105 8.97561 9.65751 9.72859 8.72867 9.72859C7.79983 9.72859 7.04685 8.97561 7.04685 8.04677C7.04685 7.11792 7.79983 6.36495 8.72867 6.36495C9.65751 6.36495 10.4105 7.11792 10.4105 8.04677Z" fill="black" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.28128 13.2992C0.254073 10.4171 0.136463 5.6266 3.01859 2.5994C5.90072 -0.427812 10.6912 -0.545422 13.7184 2.33671C16.7456 5.21884 16.8632 10.0093 13.9811 13.0365L8.76253 18.5178L3.28128 13.2992ZM12.763 11.8768L8.70415 16.14L4.44096 12.0811C2.08646 9.83949 1.99499 6.11357 4.23665 3.75907C6.4783 1.40458 10.2042 1.31311 12.5587 3.55476C14.9132 5.79642 15.0047 9.52233 12.763 11.8768Z" fill="black" />
                  </svg>
                </div>
              </div>
              <div className='home__banner--content'>
                <h4>12 Viloyat</h4>
                <p>Lorem Ipsum is simply dummy text of the printing </p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
