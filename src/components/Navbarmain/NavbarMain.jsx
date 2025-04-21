import React from 'react'
import ReactDom from 'react-dom'
import NavbarLinks from './NavbarLinks'
import NavbarLogo from './NavbarLogo'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'

const NavbarMain = () => {
    const[menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };  
  return (
    <nav className="max-w-[1200px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
        <div className= " flex justify-between w-full max-w-[1200px] mx-auto bg-Black items-center p-5 rounded-r-full rounded-l-full border-[0.5px] border-Orange ">
        <NavbarLogo />
        <div className={`${menuOpen? "sm:block" : "sm:hidden"} lg:block` }>
      <NavbarLinks />
      </div>
      <NavbarBtn />
      </div>
      <div className="flex lg:hidden sm:block p-5 bg-Black items-center justify-center rounded-full border-[0.5px] border-Orange">
       <button className="text-2xl p-3 border border-Orange rounded-full text-White" 
       onClick={toggleMenu}> 
       <GiHamburgerMenu /> 
      </button>  
      </div>
    </nav>
  )
}

export default NavbarMain
