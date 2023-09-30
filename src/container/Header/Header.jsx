import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

/* 
import './Header.css'; */

/* w-[100%] h-[100%]   md:max-h-[732px] max-h-[90%]*/
const Header = () => (
  <header id='home' className='flex justify-center max-w-full min-w-[600px] h-full pt-20 pb-28  bg-black  '>
    <div className=' flex md:flex-row flex-col justify-between pt-4  items-center  
     max-w-[1300px]  mb-20  '>
      <div className='ml-6 mt-6 mb-6'>
        {/* tekstovi */}
        <p className='p__cormorant' > Chase the new Flavour</p>
        {/* w-[19px] h-[40px] */}
        <img className='spoon__img   ' src={images.spoon} />
        {/* text-[90px] capitalize */}
        <h3 className=' headtext__cormorant md:text-[64px] text-[40px]  mt-6'>The key to Fine dining</h3>

        <p className='p__opensans mt-6 flex flex-wrap' > Sit tellus lobortis sed senectus vivamus molestie.
          Condimentum volutpat morbi facilisis quam scelerisque sapien.
          Et, penatibus aliquam amet tellus</p>
        <button className='custom__button mt-6'>Explore Menu</button>

      </div>

      <div className='flex justify-center items-center pr-4 md:pt-0 pt:10'>
        {/* md:min-w-[450px] min-w-[350px] */}
        <img className=' w-[80%]  md:w-[60] ss:min-w-[80%]   ' src={images.welcome} alt="header_img" />
      </div>
    </div>
  </header>
);

export default Header;
