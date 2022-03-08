import React from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

function Nav() {
  return (
    <nav>
      
      <Link to="/">
      <button className="btn" type="button"><strong>Home</strong></button>
      </Link>
      <h3>Portfolio</h3>
      <h3>Contact</h3>
    </nav>
  )
}

export default Nav