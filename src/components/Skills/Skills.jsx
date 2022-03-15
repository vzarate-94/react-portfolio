import React from 'react'
import Nav from '../Nav/Nav'
import '../../App.css'
import javascript from '../../assets/skills-icons/javascript.png'
import html from '../../assets/skills-icons/html.png'
import css from '../../assets/skills-icons/css.png'
import python from '../../assets/skills-icons/python.png'
import jquery from '../../assets/skills-icons/jquery.png'
import django from '../../assets/skills-icons/django.png'
import react from '../../assets/skills-icons/react.png'
import nodejs from '../../assets/skills-icons/nodejs.png'
import json from '../../assets/skills-icons/json.png'
import express from '../../assets/skills-icons/express.png'
import bootstrap from '../../assets/skills-icons/bootstrap.png'
import git from '../../assets/skills-icons/git.png'
import github from '../../assets/skills-icons/github.png'
import heroku from '../../assets/skills-icons/heroku.png'
import npm from '../../assets/skills-icons/npm.png'
import postgresql from '../../assets/skills-icons/postgresql.png'


function Skills() {
  return (
    <>
    <Nav />
      <div className='skills-landing'>
        <h1><strong>Skills</strong></h1>
        <p>I love to learn new things and experiment with new technologies.
  These are some of the major languages, technologies, tools and platforms I have worked with:</p>
      <div className='tools'>
        <h2><strong>Programming/Frameworks/Libraries</strong></h2>
        <ul className='skills-list'>
          <li><img className='skill-icons-img' src={javascript} alt="" />
          <h4>Javascript</h4></li>
          <li><img className='skill-icons-img' src={python} alt="" />
          <h4>Python</h4></li>
          <li><img className='skill-icons-img' src={django} alt="" />
          <h4>Django</h4></li>
          <li><img className='skill-icons-img' src={react} alt="" />
          <h4>React</h4></li>
          <li><img className='skill-icons-img' src={jquery} alt="" />
          <h4>jQuery</h4></li>
          <li><img className='skill-icons-img' src={nodejs} alt="" />
          <h4>Node.js</h4></li>
          <li><img className='skill-icons-img' src={express} alt="" />
          <h4>Express.js</h4></li>
          <li><img className='skill-icons-img' src={html} alt="" />
          <h4>HTML</h4></li>
          <li><img className='skill-icons-img' src={css} alt="" />
          <h4>CSS</h4></li>
          <li><img className='skill-icons-img' src={bootstrap} alt="" />
          <h4>Bootstrap</h4></li>
        </ul>
        </div>
        <div className='tools'>
          <h2><strong>Tootls and Platforms</strong></h2>
          <ul className='skills-list'>
            <li><img className='skill-icons-img' src={github} alt="" />
            <h4>Github</h4></li>
            <li><img className='skill-icons-img' src={git} alt="" />
            <h4>Git</h4></li>
            <li><img className='skill-icons-img' src={json} alt="" />
            <h4>Json</h4></li>
            <li><img className='skill-icons-img' src={heroku} alt="" />
            <h4>Heroku</h4></li>
            <li><img className='skill-icons-img' src={npm} alt="" />
            <h4>NPM</h4></li>
          </ul>
        </div>
        <div className='tools'> 
          <h2><strong>Database Management</strong></h2>
          <ul className='skills-list'>
            <li><img className='skill-icons-img' src={postgresql} alt="" />
            <h4>PostgreSQL</h4></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills