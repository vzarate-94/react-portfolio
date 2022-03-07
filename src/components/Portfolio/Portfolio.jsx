import React from 'react'
import Nav from '../Nav/Nav'
import Projects from '../Projects/Projects'
import PersonalStatement from '../PersonalStatement/PersonalStatement'
import '../../App.css'

function Portfolio() {
  return (
    <>
      <div className='portfolio-page'>
        <Nav />
        <PersonalStatement />
        <Projects />
        </div>
    </>
  )
}

export default Portfolio