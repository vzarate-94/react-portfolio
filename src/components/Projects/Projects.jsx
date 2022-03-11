import React, { useState }from 'react'
import projectData from '../../assets/Data/projectData'
import '../../App.css'

function Projects() {
const [bigImage, setBigImage] = useState(projectData[0].img)

const [bigTitle, setBigTitle] = useState(projectData[0].title)

const [bigDetails, setBIgDetails] = useState(projectData[0].details)

const [bigWebsite, setBigWebsite] = useState(projectData[0].website)

const [bigRepo, setBigRepo] = useState(projectData[0].repo)


const handleClick = (imgUrl, imgTitle, imgDetails, imgWebsite, imgRepo) => {
  setBigImage(imgUrl)
  setBigTitle(imgTitle)
  setBIgDetails(imgDetails)
  setBigWebsite(imgWebsite)
  setBigRepo(imgRepo)
}

const images = projectData.map((image) => {
  return (
    <span>
      <h4>{image.title}</h4>
      <img 
        style={{ border: bigImage === image.img ? '5px solid rgb(205, 71, 71)' : '2px solid white' }}
        onClick={() => handleClick(image.img, image.title, image.details, image.website, image.repo)}
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
            <div className='project-btn-div'>
              <a href={bigWebsite} target='_blank' rel='noreferrer'><button className='btn website-btn' type='button'><strong>Website</strong></button></a>
              <a href={bigRepo} target='_blank' rel='noreferrer'><button className='btn website-btn' type='button'><strong>Github Repo</strong></button></a>
          </div>
          </div>
        </div>
      </div>
    
  )
}

export default Projects