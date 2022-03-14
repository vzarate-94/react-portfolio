import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

function Nav() {
  return (
    <nav>
      <Link to='/'>
      <button className='btn' type='button'><strong>Home</strong></button>
      </Link>
      <Link to='/portfolio'>
      <button className='btn' type='button'><strong>Portfolio</strong></button>
      </Link>
      <Link to='/skills'>
      <button className='btn' type='button'><strong>Skills</strong></button>
      </Link>
      <Link to='/contact'>
      <button className='btn' type='button'><strong>Contact</strong></button>
      </Link>
    </nav>
  )
}

export default Nav