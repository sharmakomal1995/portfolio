import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    
return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1><span> Hi,I'm Komal Sharma,</span> Full Stack Developer based in India.</h1>
        <p>I build responsive web applications using React,Node.js & MongoDB.I have build 5 real-world projects and love solving real problems through code. </p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink> </div>
            <a href='/resume.pdf' target='_blank' rel='noopener noreferrer' className='hero-resume'>My Resume</a>
        </div>
    </div>
  )
}

export default Hero
