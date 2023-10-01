import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

 

/*  max-w-[1300px]  */

const Header = () => (
  <header id='home' className='flex  justify-center items-center  w-[100%] h-full pt-20 pb-28  bg-black  '>
   
    <div className=' flex md:flex-row flex-col  w-[100%] pt-4  items-center justify-end md:ml-32 ml-0
     mb-20  '>
      <div className='ml-6 mt-6 mb-6 max-w-[400px]  '>
      
        <p className='p__cormorant' > Chase the new Flavour</p>
      
        <img className='spoon__img   ' src={images.spoon} />
       
        <h3 className=' headtext__cormorant md:text-[64px] text-[40px]  mt-6'>The key to Fine dining</h3>

        <p className='p__opensans mt-6 flex flex-wrap' > Sit tellus lobortis sed senectus vivamus molestie.
          Condimentum volutpat morbi facilisis quam scelerisque sapien.
          Et, penatibus aliquam amet tellus</p>
        <button className='custom__button bg-orange-300 mt-6'>Explore Menu</button>

      </div>

      <div className=' pr-4 flex justify-center items-center'>
       
        <img className='  md:w-[50%] w-[80%] md:mt-0 mt-10   ' src={images.welcome} alt="header_img" />
      </div>
    </div>
  
  </header>
);

export default Header;
 

