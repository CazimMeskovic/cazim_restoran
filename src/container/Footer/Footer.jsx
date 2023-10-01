import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';



const Footer = () => (
  <div id='contact' className='app__bg flex flex-col w-[100%] h-full  '>

    <div className='flex justify-center'>
      <div className='flex justify-center flex-col bg-black bg-opacity-30 border-[0.5px]
       border-orange-300 sm:w-[75vw] w-[95vw] md:p-0 p-10 h-[35%]  '>
        <FooterOverlay />
        <Newsletter />
      </div>
    </div>

    <div className='flex flex-wrap flex-row justify-center items-center p-20 gap-10'>

      <div className='text-center'>
        <h1 style={{ color: 'var(--F5EFDB, #F5EFDB)'}} className="p__cormorant pb-5">Contact Us</h1>
        <p style={{ color: 'var(--AAAAAA, #AAA)'}} className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p style={{ color: 'var(--AAAAAA, #AAA)'}} className="p__opensans">+1 212-344-1230</p>
        <p style={{ color: 'var(--AAAAAA, #AAA)'}} className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className='text-center max-w-[450px]' >
        <div className='class="flex flex-row justify-center "'>
          <img class="text-gold headtext__cormorant" src={images.gericht} alt="footer_logo" />
        </div>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <div className='flex justify-center'>
          <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        </div>
        <div className="text-white flex flex-row justify-center gap-5 mt-5 ">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />

        </div>
      </div>
      <div  className='text-center'>
        <h1 style={{ color:'var(--F5EFDB, #F5EFDB)'}} className="p__cormorant pb-5">Working Hours</h1>
        <p style={{ color: 'var(--AAAAAA, #AAA)'}} className="p__opensans">Monday-Friday:</p>
        <p style={{ color: 'var(--AAAAAA, #AAA)'}} className="p__opensans">08:00 am - 12:00 am</p>
        <p style={{ color: 'var(--AAAAAA, #AAA)'}} className="p__opensans">Saturday-Sunday:</p>
        <p style={{ color: 'var(--AAAAAA, #AAA)'}} className="p__opensans">07:00 am - 11:00 pm</p>
      </div>

    </div>

    <div className='flex justify-center mb-24 '>
      <p style={{ color: 'var(--AAAAAA, #AAA)'}} className="p__opensans">2021 Gericht. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
