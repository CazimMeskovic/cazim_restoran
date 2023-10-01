import React from 'react';



const Newsletter = () => (
  <div className='flex sm:flex-row flex-col  justify-center gap-[2em] pt-20 w-[75vw] min-w[600px] mb-20'>
    <input className=' w-[55%] h-[60px] border-2 border-orange-200
    pl-5 bg-black ' placeholder='Email Address'></input>
    <button className='custom__button bg-orange-300 '>Subscribe</button>
  </div>
);

export default Newsletter;
