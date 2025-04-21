import React, { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import NavbarLogo from './NavbarLogo';
import NavbarBtn from './NavbarBtn';
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="w-full fixed top-0 left-0 z-20 px-4 py-2 bg-Black border-b border-Orange">
            <div className="max-w-[1300px] mx-auto flex items-center justify-between gap-4">
                {/* Logo */}
                <NavbarLogo />

                {/* "Hire Me" Button – always visible */}
                <div className="sm:block">
                    <NavbarBtn />
                </div>

                {/* Hamburger Icon – only visible on small screens */}
                <button
                    className="text-2xl p-2 border border-Orange rounded-full text-White sm:hidden"
                    onClick={toggleMenu}
                >
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="sm:hidden mt-2">
                    <NavbarLinks />
                </div>
            )}
        </nav>
    );
};

export default NavbarMain;
