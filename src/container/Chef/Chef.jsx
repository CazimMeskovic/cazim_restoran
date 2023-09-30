import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';

/* md:max-h-[732px] max-h-[100%]  */

const Chef = () => (
  <div className='flex justify-center max-w-full min-w-[600px] h-full  pb-20 pt-20  app__bg  '>
    <div className=' flex md:flex-row flex-col justify-between pt-4  items-center  
   max-w-[1300px] h-full '>

      <div className='flex justify-center items-center pr-4 md:pt-0 pt:10'>
        {/* md:min-w-[450px] min-w-[350px] */}
        <img className=' w-[80%]  md:w-[60] ss:min-w-[80%]  ' src={images.chef} alt="header_img" />
      </div>

      <div className='ml-6 ss:pt-0 pt-10'>
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
        <div>
          <h4 style={{ fontFamily: 'var(--font-base)' }} class="p__cormorant  text-32 leading-130 tracking-wider uppercase text-orange-400" >Kevin Luo</h4>
          <p style={{ fontFamily: 'var(--font-base)' }} className='p__opensans text-orange-300'>Chef & Founder</p>
          <img className='w-[235px] h-[83px]' src={images.sign} alt="sign_image" />
        </div>


      </div>


    </div>
  </div>
);

export default Chef;
