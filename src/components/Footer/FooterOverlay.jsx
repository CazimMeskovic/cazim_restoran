import React from 'react';
import { images } from '../../constants';



const FooterOverlay = () => (

  <div className='flex flex-col justify-center items-center pt-20 '>
    <h4 className='p__cormorant '>Newsletter</h4>
    <img className='spoon__img mt-5' src={images.spoon} />
    <h2 className='headtext__cormorant pt-5'>Subscribe to Our Newsletter</h2>
    <p className='p__cormorant pt-5'>And never miss latest Updates!</p>
  </div>

);

export default FooterOverlay;
