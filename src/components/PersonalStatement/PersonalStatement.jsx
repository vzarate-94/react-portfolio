import React from 'react'
import imageMe from '../../assets/images/imageMe.png'
import '../../App.css'

function PersonalStatement() {
  return (
    <span className='portfolio-landing'>
      <span className='left-portfolio'>
        <img 
          id='imageMe' 
          src={imageMe}
          alt="photoe of me" />
      </span>
      <span className='right-portfolio'>
        <h2 className='personal-statement-name'>Victor Zarate-Bustamante</h2>
        <p>I am a Software Developer with a problem-solving focus towards the development of applications. Utilizing enterprise-level languages to deliver solutions with a customer-first approach.</p>
      </span>
    </span>
  )
}

export default PersonalStatement