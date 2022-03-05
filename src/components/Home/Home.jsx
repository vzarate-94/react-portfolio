import React from 'react'
import Portfolio from '../../misc/Animations/Portfolio'
import portfolio from '../../assets/portfolio.json'

function Home() {
  return (
    <div>
      <div>Home</div>
      <Portfolio animData={portfolio}/>
    </div>
  )
}

export default Home