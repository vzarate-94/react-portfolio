import React from 'react'
import Nav from '../Nav/Nav'
import myLogoWhite from '../../assets/images/myLogoWhite.png'
import '../../App.css'
import Resume from '../../assets/Resume2.pdf'

function Contact() {
  return (
    <>
    <Nav />
    <footer className='footer'>
        <img src={myLogoWhite} alt="victor logo" className='logo' />
        <div id="contact-me"><h2>CONTACT ME</h2></div>
        <div className='contact-info'>
          <div className='contact-link'><a 
            href='mailto:vzarate26@gmail.com'>vzarate26@gmail.com<i className="fas fa-paper-plane"></i> | </a></div>
          <div className='contact-link'><a href="tel:4348256618"> (434) 825-6618 <i className="fas fa-phone-square"></i> |   </a></div>
          <div className='contact-link'><a href="https://www.linkedin.com/in/victor-zarate-bustamante/" target="blank"> LinkedIn <i className="fab fa-linkedin"></i> | </a></div>
          <div className='contact-link'><a href="https://github.com/vzarate-94" target="blank"> Github <i className="fab fa-github"></i> | </a></div>
          <div className='contact-link'><a href="https://www.instagram.com/vicz113/" target="blank">Instagram <i className="fab fa-instagram"></i> | </a></div>
          <div className='contact-link'><a href={Resume} target="blank">Resume <i className="fa-solid fa-file"></i></a></div>
        </div>
      </footer>
    </>
  )
}

export default Contact