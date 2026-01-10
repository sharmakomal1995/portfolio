import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.png'
import profile_img from '../../assets/profile_img.png'

const About = () => {
  return (
      <div id='about' className='about'>
          <div className="about-title">
              <h1>About Me</h1>
              <img src={theme_pattern} alt='' />
          </div>
          <div className="about-section">
              <div className="about-left">
                  <img src={profile_img} alt='' />
              </div>
            <div className="about-right">
                  <div className="about-para">
                      <p>I am a self-motivated Full-Stack Developer with a strong foundation in building modern web applications. I have hands-on experience in developing complete projects from scratch using <b><span className='heighlight'>React,Node.js,Express and MongoDB</span>.</b></p>
                      <p>As a fresher, I focus on writting clean, maintainable code and building user-friendly, responsive interfaces.I have built <b>5</b> real-world projects including <span className='heighlight'>My Portfolio website,Airbnb clone,Zerodha clone, E-commerce and Video Conferencing applications </span>.</p>
                      <p>Currently seeking an opportunity as a <b><span className='heighlight'>Full-Stack/Fronted/Backend Developer</span></b> where I can apply my skills and grow as a professional developer.</p>
                  </div>
                  <div className="about-skills">
                      <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "50%" }} /></div>
                      <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                      <div className="about-skill"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                      <div className="about-skill"><p>Node.js & Express.js</p><hr style={{ width: "50%" }} /></div>
                      <div className='about-skill'><p>MongoDB</p><hr style={{ width: "70%" }} /></div>
                      <div className='about-skill'><p>Git,GitHub,VS Code</p><hr style={{ width: "60%" }} /></div>
            </div>
            </div>
          </div>
          <div className="about-achivements">
              <div className="about-achivement">
                  <h1>1+</h1>
                  <p>YEARS OF SELF PROJECT BUILT EXPERIENCE</p>
              </div>
              <hr />
              <div className="about-achivement">
                  <h1>5</h1>
                  <p>PROJECTS COMPLETED</p>
              </div>
              <hr />
              <div className="about-achivement">
                  <h1>200+</h1>
                  <p>DSA QUESTIONS COMPLETED</p>
              </div>
          </div>
    </div>
  )
}

export default About
