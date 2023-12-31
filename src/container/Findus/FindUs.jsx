import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className='app__bg flex justify-center w-[100%]  h-full  bg-black p-20  '>
    <div className=' flex md:flex-row flex-col justify-between pt-4  items-center  
      md:max-h-[732px] max-h-[90%]   '>
      <div className='ml-6 mt-6 mb-6'>
        {/* tekstovi */}
        <p className='p__cormorant' > Contact</p>
        {/* w-[19px] h-[40px] */}
        <img className='spoon__img pt-3  ' src={images.spoon} />
        {/* text-[90px] capitalize */}
        <h3 className=' headtext__cormorant md:text-[64px] text-[40px]   mt-6'>Find Us</h3>
        <div className='flex flex-row '>
          <p className='p__opensans  mt-6 ' > Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        </div>
        <h4 style={{ color: 'var(--color-golden)' }} className='p__cormorant mt-5'>Opening Hours</h4>
        <p className='p__opensans mt-5'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans mt-5'>Sat - Sun: 10:00 am - 03:00 am</p>

        <button onClick={()=>window.open('https://www.tripadvisor.com/Restaurants-g294450-zfp58-Sarajevo_Sarajevo_Canton_Federation_of_Bosnia_and_Herzegovina.html')}  className='custom__button mt-6'>Visit Us</button>

      </div>

      <div className='flex justify-center items-center pr-4 md:pt-0 pt:10'>
        {/* md:min-w-[450px] min-w-[350px] */}
        <img className=' w-[80%]  md:w-[60%] ss:min-w-[80%]  ' src={images.findus} alt="findus" />
      </div>
    </div>
  </div >
);

export default FindUs;
