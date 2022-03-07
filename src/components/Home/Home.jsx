import React from 'react'
import {Link} from 'react-router-dom'
import Portfolio from '../../misc/Animations/Portfolio'
import portfolio from '../../assets/portfolio.json'

function Home() {
  return (
    <div className='landing'>
      <div className='left-container'>
        <div className="d-grid gap-2">
                  <Link to='/portfolio'>
                      <button className="btn oliver-btn" type="button"><strong>Portfolio</strong></button>
                  </Link>
                  <a href='https://github.com/vzarate-94' target="_blank" rel='noreferrer'><button className="btn oscar-btn" type="button"><strong>Github</strong></button></a>
                  
                </div>
      </div>
      <div className='right-container'> 
      <Portfolio animData={portfolio}/>
      </div>
    </div>
  )
}

export default Home