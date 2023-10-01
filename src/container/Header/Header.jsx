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
        <button onClick={() => window.open('https://www.google.com/search?sca_esv=569812948&rlz=1C1YTUH_hrBA1032BA1032&sxsrf=AM9HkKlHCbitwvWjpwS4TMYeEFX2wwN8qg:1696147730389&q=slike+biha%C4%87a&tbm=isch&source=univ&fir=o4d0qfN001f2DM%252CCEdikUAFzQTm1M%252C_%253BGVko2hwOYDxMsM%252CCEdikUAFzQTm1M%252C_%253Be5TLWHKVTFGPCM%252CXve7PYvWwKCvvM%252C_%253BCQ-5IILY_ZTOYM%252C1FtmX5ua3Pz0YM%252C_%253BgyHYshY3FTRZkM%252CwGS_CBzU1VK36M%252C_%253Bamw-fcJbYi71ZM%252Cg3gSezR5n_87hM%252C_%253BXErlTvJru0PxLM%252C1FtmX5ua3Pz0YM%252C_%253BlkrGqJwynM9RHM%252C8gQEN11EBqus3M%252C_%253BurpAccImYSNYzM%252CHkFM45jr21IQGM%252C_%253BAxIyB1uZWV0y0M%252CXvAUJGQDGHM3pM%252C_%253BotGOPHVqPtBmVM%252CtkGIkc4JCQb43M%252C_%253B_AxyavmWiWj_mM%252COCDsSkbS1qtFEM%252C_%253BUqtnPALcIKQW7M%252C_dWAmUXR1iDvvM%252C_&usg=AI4_-kTGyh9UNbi6B9hL5mdqx8d3SvA2og&sa=X&ved=2ahUKEwjn_tLXstSBAxVPuqQKHfApDbwQjJkEegQIFRAC&biw=1366&bih=651&dpr=1')}  className='custom__button bg-orange-300 mt-6'>Explore Menu</button>

      </div>

      <div className=' pr-4 flex justify-center items-center'>
       
        <img className='  md:w-[50%] w-[80%] md:mt-0 mt-10   ' src={images.welcome} alt="header_img" />
      </div>
    </div>
  
  </header>
);

export default Header;
 

