import React, { useState } from 'react'
import NavbarLinks from './NavbarLinks'
import NavbarLogo from './NavbarLogo'
import NavbarBtn from './NavbarBtn'
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-20 bg-Black border-b border-Orange">
            <div className="max-w-[1300px] mx-auto px-4 py-2 flex items-center justify-between">
                <NavbarLogo />

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-6">
                    <NavbarLinks />
                    <NavbarBtn />
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-2xl p-2 border border-Orange rounded-full text-White"
                    onClick={toggleMenu}
                >
                    <GiHamburgerMenu />
                </button>
            </div>

            {/* Mobile Menu Links */}
            {menuOpen && (
                <div className="lg:hidden bg-Black border-t border-Orange px-4 pb-4">
                    <NavbarLinks />
                    <div className="mt-4">
                        <NavbarBtn />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavbarMain;
