import React from 'react'
import imageMe from '../../assets/images/imageMe.png'
import '../../App.css'

function PersonalStatement() {
  return (
    <div className='portfolio-landing'>
      <div className='left-portfolio'>
        <img 
          id='imageMe' 
          src={imageMe}
          alt="photoe of me" />
      </div>
      <div className='right-portfolio'>
        <p>Software Developer with a problem-solving focus towards the development of applications. Utilizing enterprise-level languages to deliver solutions with a customer-first approach.</p>
      </div>
    </div>
  )
}

export default PersonalStatement