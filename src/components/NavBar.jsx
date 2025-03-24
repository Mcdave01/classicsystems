import "@/app/globals.css";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import csil_logo from "@/asset/csil_logo.jpg";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  // Handle scroll event for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check when component mounts
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav 
      ref={navRef}
      className="bg-blue-600   shadow-md w-full transition-all duration-300 fixed top-0 left-0 z-50 h-[100px]"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo with reduced height */}
        <div className="text-white font-bold">
          <Link href="/" className="flex items-center h-15">
            <div className=" mt-10 flex items-center">
              <Image
                src={csil_logo}
                alt="CSIL Logo"
                width={40}
                height={5}
                className="rounded object-contain"
                priority
              />
            </div>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Links for Desktop and Mobile */}
        <div
          className={`lg:flex lg:items-center lg:space-x-8 absolute lg:static left-0 right-0 top-14 lg:top-auto z-50 lg:w-auto w-full bg-blue-600 lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
          onMouseLeave={closeMenu}
        >
          <Link href="/" className="block py-2 lg:py-0 text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/About" className="block py-2 lg:py-0 text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/Services" className="block py-2 lg:py-0 text-white hover:text-gray-300">
            Services
          </Link>
          <Link href="/Contact" className="block py-2 lg:py-0 text-white hover:text-gray-300">
            Contact
          </Link>
          <Link href="/TrainingCourses" className="block py-2 lg:py-0 text-white hover:text-gray-300">
            Training
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;