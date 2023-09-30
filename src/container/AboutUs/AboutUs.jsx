import React from 'react';
import { images } from '../../constants';



const AboutUs = () => (

  <div id='about' className='app__bg flex justify-center items-center w-full h-[100%] min-w-[600px] pt-20 pb-20 relative'>

    <div className='flex  justify-center items-center absolute '>
      <img src={`${images.G}`} className='w-[391px] h-[415] z-0 inset-0 ' />
    </div>
    <div className='flex sm:flex-row flex-col justify-center items-center z-10 section__padding '>
      <div className='z-2 inline-flex flex-col justify-center items-end section__padding '>

        <h3 className='headtext__cormorant z-2'>About Us</h3>
        <img className='spoon__img transform rotate-180  ' src={images.spoon} />
        <p className='p__opensans max-w-[523px] '>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quis pharetra adipiscing ultrices vulputate posuere tristique.
          In sed odio nec aliquet eu proin mauris et.</p>
        <button className='custom__button mt-6'>Explore Menu</button>

      </div>
      <div className=' transform rotate-180 flex justify-center items-center flex-shrink-0'>

        <img src={images.knife} className='w-[84px] h-[703px] transform rotate-180 ' />
      </div>
      <div className='section__padding '>

        <h3 className='headtext__cormorant'>Our History</h3>
        <img className='spoon__img  ' src={images.spoon} />
        <p className='p__opensans max-w-[523px] '>
          Adipiscing tempus ullamcorper lobortis odio
          tellus arcu volutpat. Risus placerat morbi volutpat
          habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button className='custom__button  mt-6'>Explore Menu</button>

      </div>

    </div>


  </div>
);

export default AboutUs;




/* 
import React from 'react';
import { images } from '../../constants';

const AboutUs = () => (
  <div id='about' className='app__bg flex justify-center items-center w-full h-screen min-w-[600px] relative'>
    <div className='flex justify-center items-center absolute inset-0 z-10'>
      <div className='flex flex-row justify-center items-center z-2 section__padding'>
        <div className='inline-flex flex-col justify-center items-end z-2 section__padding'>
          <h3 className='headtext__cormorant z-2'>About Us</h3>
          <img className='spoon__img transform rotate-180' src={images.spoon} alt="Spoon" />
          <p className='p__opensans max-w-[523px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Quis pharetra adipiscing ultrices vulputate posuere tristique.
            In sed odio nec aliquet eu proin mauris et.
          </p>
          <button className='custom__button mt-6'>Explore Menu</button>
        </div>
        <div className='transform rotate-180 flex justify-center items-center flex-shrink-0'>
          <img src={images.knife} className='w-[84px] h-[703px] transform rotate-180' alt="Knife" />
        </div>
        <div className='section__padding'>
          <h3 className='headtext__cormorant'>Our History</h3>
          <img className='spoon__img' src={images.spoon} alt="Spoon" />
          <p className='p__opensans max-w-[523px]'>
            Adipiscing tempus ullamcorper lobortis odio
            tellus arcu volutpat. Risus placerat morbi volutpat
            habitasse interdum mi aliquam In sed odio nec aliquet.
          </p>
          <button className='custom__button mt-6'>Explore Menu</button>
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center absolute z-0 inset-0'>
      <img src={images.G} className='w-[391px] h-[415px]' alt="G Logo" />
    </div>
  </div>
);

export default AboutUs;  */
