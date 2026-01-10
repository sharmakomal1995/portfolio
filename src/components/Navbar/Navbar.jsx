import React, { useState,useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
      <div className='navbar'>
      <img src={logo} alt="" className='nav-logo'/>
      <img src={menu_open} onClick={openMenu} alt='' className='menu-open'/>
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt='' className='menu-close'/>
        <li className={menu === "home" ? "active" : ""}> <AnchorLink className='anchor-link' href="#home"onClick={() => setMenu("home")}><p>Home</p></AnchorLink> </li>
        <li className={menu === "about" ? "active" : ""}> <AnchorLink className='anchor-link' offset={50} href='#about'onClick={() => setMenu("about")}><p>About Me</p></AnchorLink> </li>
        <li className={menu === "services" ? "active" : ""}> <AnchorLink className='anchor-link' offset={50} href='#services'onClick={() => setMenu("services")}><p>Services</p></AnchorLink> </li>
        <li className={menu === "work" ? "active" : ""}> <AnchorLink className='anchor-link' offset={50} href='#work'onClick={() => setMenu("work")}><p>Portfolio</p></AnchorLink> </li>
        <li className={menu === "contact" ? "active" : ""}> <AnchorLink className='anchor-link' offset={50} href='#contact'onClick={()=> setMenu("contact")}><p>Contact</p></AnchorLink> </li>
          </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar
