import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import githubIcon from '../../assets/github.png'
import linkedinIcon from '../../assets/linkedin.png'

const Hero = () => {
    
return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span> Hi,I'm Komal Sharma,</span> Full Stack Developer based in India.</h1>
        <p><i>I build responsive web applications using <span className='heighlight'>React,Node.js & MongoDB</span> .I have build 5 real-world projects and love solving real problems through code.</i> </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink> </div>
            <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' className='hero-resume'>My Resume</a>
        </div>
        <div className="hero-social-icons">
            <a href='https://github.com/sharmakomal1995' target='_blank' className='github-icon' rel='noopener noreferrer'>
                <img src={githubIcon} alt='GitHub'/></a>
            <a href='https://www.linkedin.com/in/komal-kumari-35aa6a178/' target='_blank' className='linkedin-icon' rel='noopener noreferrer'>
                <img src={linkedinIcon} alt='LinkedIn'/></a>
        </div>
    </div>
  )
}

export default Hero
