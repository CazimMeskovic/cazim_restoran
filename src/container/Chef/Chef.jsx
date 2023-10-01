import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';



const Chef = () => (
  <div className='flex justify-center w-[100%] h-full  pb-28 pt-20  app__bg  '>
    <div className=' flex md:flex-row flex-col justify-between pt-4  items-center  
    h-full '>

      <div className='flex justify-center items-center  md:pt-0 pt:10'>
        {/* md:min-w-[450px] min-w-[350px] */}
        <img className=' lg:w-[50%] sm:w-[80%] w-[80%]  ' src={images.chef} alt="header_img" />
      </div>

      <div className='ml-6 ss:pt-0 pt-10 pr-20 max-w-[700px]'>
        {/* tekstovi */}
        <p className='p__cormorant' > Chef’s Word</p>
        {/* w-[19px] h-[40px] */}
        <img className='spoon__img   ' src={images.spoon} />
        {/* text-[90px] capitalize */}
        <h3 className=' headtext__cormorant md:text-[64px] text-[40px]  mt-6'>What we believe in</h3>

        <p className='p__opensans mt-6 flex flex-wrap' ><img className='w-[47px] h-[40px]' src={images.quote} /> Lorem ipsum dolor sit amet,
          consectetur adipiscing elit auctor sit.auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
          Nulla scelerisque scelerisque congue ac consequat,
          aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        <div className='p__opensans '>
          <h4 style={{ color: 'var(--DCCA87, #DCCA87)' }} class="p__cormorant mt-16 mb-5  text-32 leading-130
           tracking-wider uppercase text-orange-400" >Kevin Luo</h4>
          <p style={{ fontFamily: 'var(--font-base)' }} className='p__opensans mb-16 text-orange-300'>Chef & Founder</p>
          <img className='w-[235px] h-[83px]' src={images.sign} alt="sign_image" />
        </div>


      </div>


    </div>
  </div>
);

export default Chef;
