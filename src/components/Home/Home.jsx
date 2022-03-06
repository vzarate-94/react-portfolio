import React from 'react'
import {Link} from 'react-router-dom'
import Portfolio from '../../misc/Animations/Portfolio'
import portfolio from '../../assets/portfolio.json'

function Home() {
  return (
    <div className='landing'>
      <div className='left-container'>
      <Link to='/portfolio'>
        <button>Welcome</button>
        </Link>
      </div>
      <div className='right-container'> 
      <Portfolio animData={portfolio}/>
      </div>
    </div>
  )
}

export default Home