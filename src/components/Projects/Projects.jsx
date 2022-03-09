import React, { useState }from 'react'
import projectData from '../../assets/Data/projectData'
import '../../App.css'

function Projects() {
const [bigImage, setBigImage] = useState(projectData[0].img)

const [bigTitle, setBigTitle] = useState(projectData[0].title)

const [bigDetails, setBIgDetails] = useState(projectData[0].details)

const [bigWebsite, setBigWebsite] = useState(projectData[0].website)

const handleClick = (imgUrl, imgTitle, imgDetails) => {
  setBigImage(imgUrl)
  setBigTitle(imgTitle)
  setBIgDetails(imgDetails)
}

const images = projectData.map((image) => {
  return (
    <span>
      <h4>{image.title}</h4>
      <img 
        style={{ border: bigImage === image.img ? '5px solid rgb(205, 71, 71)' : '2px solid white' }}
        onClick={() => handleClick(image.img, image.title, image.details)}
        src={image.img}
        alt={image.title}
        className={'thumb'}
        key={image.key}
      />
    </span>
  )
})

return (
      <div>
        <h1 id='project-head'>Projects!</h1>
        <div  className='project-landing'>
          <div className='left-project'>
            <div id='thumbnails'>{images}</div>
          </div>
          <div className='right-project'>
            <h1>{bigTitle}</h1>
            <img src={bigImage}  id='bigImage' alt='bigImage'/>
            <p className='details'>{bigDetails}</p>
            <div>
            <a href='https://github.com/vzarate-94' target='_blank' rel='noreferrer'><button className='btn oscar-btn' type='button'><strong>Github</strong></button></a>
            <a href='https://github.com/vzarate-94' target='_blank' rel='noreferrer'><button className='btn oscar-btn' type='button'><strong>Github</strong></button></a>
            </div>
          </div>
        </div>
      </div>
    
  )
}

export default Projects