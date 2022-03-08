import React, { useState }from 'react'
import projectData from '../../assets/Data/projectData'
import '../../App.css'

function Projects() {
const [bigImage, setBigImage] = useState(projectData[0].img)

const [bigTitle, setBigTitle] = useState(projectData[0].title)

const handleClick = (imgUrl, imgTitle) => {
  setBigImage(imgUrl)
  setBigTitle(imgTitle)
}

const images = projectData.map((image) => {
  return (
    <span>
      <h4>{image.title}</h4>
      <img 
        style={{ border: bigImage === image.img ? "5px solid rgb(205, 71, 71)" : "2px solid white" }}
        onClick={() => handleClick(image.img, image.title)}
        src={image.img}
        alt={image.title}
        className={"thumb"}
        key={image.key}
      />
    </span>
  )
})

return (
    <div>
      <div className='dog-pages'>
        <div id="wrapper">
          <div id="thumbnails">{images}</div>
          <h1>{bigTitle}</h1>
          <img src={bigImage}  id="bigImage" alt="bigImage"/>
        </div>
      </div>
    </div>
  )
}

export default Projects