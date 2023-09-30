

import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleMenuToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="flex flex-row justify-between items-center p-6 text-white w-full min-w-[600px] bg-black border-2 border-solid border-black">
      <div className="flex items-center">
        <img className="w-28" src={images.gericht} alt="logo" />
      </div>

      <div className="hidden md:flex flex-row gap-4">
        <ul style={{ fontFamily: 'var(--font-base)' }} className="flex flex-row gap-4">
         
        
          <li className="p__opensans hover:text-yellow-200">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
       
        </ul>
      </div>

      <div className="hidden md:flex items-center gap-4">
        <a href="#login" className="p__opensans hover:border-b-[1px] border-r-[1px] sm:pl-4 pl-0 pr-4">
          Log In / Registration
        </a>
        <a href="/" className="p__opensans hover:border-b-[1px] pl-4">
          Book Table
        </a>
      </div>

      <GiHamburgerMenu className='md:hidden ' color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

      {toggleMenu && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-95 z-50">
          <MdOutlineRestaurantMenu
            fontSize={27}
            className="text-27px text-orange-300 cursor-pointer absolute top-20 right-20"
            onClick={() => setToggleMenu(false)}
          />
          <ul style={{ fontFamily: 'var(--font-base)' }} className="m-8 cursor-pointer text-orange-300 text-2xl flex flex-col text-center font-base">
           
            <li className="m-8 cursor-pointer text-golden-300 text-2xl text-center font-base">
              <a href="#home" onClick={handleMenuToggle}>
                Home
              </a>
            </li>
            <li className="m-8 cursor-pointer text-golden text-2xl text-center font-base">
              <a href="#about" onClick={handleMenuToggle}>
                About
              </a>
            </li>
            <li className="m-8 cursor-pointer text-golden text-2xl text-center font-base">
              <a href="#menu" onClick={handleMenuToggle}>
                Menu
              </a>
            </li>
            <li className="m-8 cursor-pointer text-golden text-2xl text-center font-base">
              <a href="#awards" onClick={handleMenuToggle}>
                Awards
              </a>
            </li>
            <li className="m-8 cursor-pointer text-golden text-2xl text-center font-base">
              <a href="#contact" onClick={handleMenuToggle}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
