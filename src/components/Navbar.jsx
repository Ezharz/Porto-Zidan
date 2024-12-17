import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NavIcon from "../assets/Frame.svg";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (section) => {
        setActiveSection(section);
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
    };

    const NavButton = ({ section, children, className = "" }) => (
        <button
            onClick={() => scrollToSection(section)}
            className={`font-medium px-6 py-3 rounded-full focus:outline-none transition-all duration-300 ease-in-out ${activeSection === section
                    ? "bg-orange-500 text-white transform scale-105"
                    : "text-black hover:bg-orange-100 hover:scale-105"
                } ${className}`}
        >
            {children}
        </button>
    );

    return (
        <nav className="py-6 flex justify-center relative">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center justify-between bg-gray-200 rounded-full py-2 px-4 shadow-sm w-[90%] max-w-6xl">
                <NavButton section="home">Home</NavButton>
                <NavButton section="project">My Project</NavButton>
                
                <div className="flex flex-col items-center mx-8">
                    <img src={NavIcon} alt="icon" />
                </div>
                
                <NavButton section="reason">Reason</NavButton>
                <NavButton section="contact">Contact</NavButton>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden w-full px-4">
                {/* Mobile Header */}
                <div className="flex justify-between items-center py-3">
                    <img
                        src={NavIcon}
                        alt="icon"
                        className="w-12 h-12"
                    />
                    
                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-2xl focus:outline-none z-50"
                    >
                        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div 
                        className="fixed top-24 left-0 right-0 z-40 flex justify-center p-4 bg-white bg-opacity-90"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div 
                            className="w-full max-w-md bg-white rounded-xl shadow-lg border border-gray-100 p-4 space-y-4"
                            onClick={(e) => e.stopPropagation()} // Prevent closing menu when clicking inside
                        >
                            <NavButton 
                                section="home" 
                                className="w-full text-left"
                            >
                                Home
                            </NavButton>
                            <NavButton 
                                section="project" 
                                className="w-full text-left"
                            >
                                My Project
                            </NavButton>
                            <NavButton 
                                section="reason" 
                                className="w-full text-left"
                            >
                                Reason
                            </NavButton>
                            <NavButton 
                                section="contact" 
                                className="w-full text-left"
                            >
                                Contact
                            </NavButton>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
