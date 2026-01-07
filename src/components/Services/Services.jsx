import React from 'react'
import './Services.css'
// import theme_pattern from '../../assets/theme_pattern.png'
import Services_Data from '../../assets/Services_data'
import arrow_icon from '../../assets/arrow_icon.svg'

function Services() {
  return (
      <div id='services' className='services'>
          <div className="services-title">
              <h1>My Services</h1>
              {/* <img src={theme_pattern} alt='' /> */}
          </div>
          <div className="services-container">
              {Services_Data.map((service, index) => {
                  return <div key={index} className='services-format'>
                      <h3>{service.s_no}</h3>
                      <h2>{service.title}</h2>
                      <p>{service.desc}</p>
                      <div className='services-readmore'>
                          <p>Read More</p>
                          <img src={arrow_icon} alt='arrow' className='arrow_icon'/>
                      </div>

                  </div>
              })
                  
              }
        </div>
    </div>
  )
}
import './Services.css'

export default Services
