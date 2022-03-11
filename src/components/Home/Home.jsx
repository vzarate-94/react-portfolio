import React from 'react'
import {Link} from 'react-router-dom'
import Portfolio from '../../misc/Animations/Lottie'
import portfolio from '../../assets/portfolio.json'

function Home() {
  return (
    <>   
      <span className='landing'>
        <div className='left-container'>
          <div className='message'>
            <h1 id='name-head'>Victor Zarate-Bustamante</h1>
            <h2>Software Engineer</h2>
          </div>
          <div className='d-grid gap-2'>
                    <Link to='/portfolio'>
                        <button className='btn oliver-btn' type='button'><strong>Portfolio</strong></button>
                    </Link>
                    <a href='https://github.com/vzarate-94' target='_blank' rel='noreferrer'><button className='btn oscar-btn' type='button'><strong>Github</strong></button></a>
                    
                  </div>
        </div>
        <div className='right-container'> 
        <Portfolio animData={portfolio}/>
        </div>
      </span>
    </>

  )
}

export default Home