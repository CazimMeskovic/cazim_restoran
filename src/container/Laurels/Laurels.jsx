import React from 'react';
import { SubHeading } from '../../components';
import { images, data } from '../../constants';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="flex-1 flex justify-start items-start min-w-230px m-4">
    <img className='w-[50px] h-[50px]' src={imgUrl} alt="awards" />
    <div className="flex flex-col ml-4">
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <p className="p__opensans">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <div id='awards' className='app__bg flex ss:flex-row flex-col  w-full h-full min-w-[600px]'>
    <div>
    <img  src={images.logo} alt='logo' className='w-[146px] h-[146px] pt-10 pl-10' />
    </div>

<div className='flex justify-end items-center '>
    <div className='flex  sm:flex-row flex-col justify-end sm:ml-24 ml-0 items-center pb-20 '>

<div className='pl-10 mr-10 max-w-[634px] '>
{/* tekst */}
<SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant text-[64px]">Our Laurels</h1>

      <div className="flex flex-1 flex-row justify-start items-center flex-wrap mt-12 text-[23px]">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>


<div>
  {/* slika  md:w-[60%] w-[80%]  */}
  <div className='w-[100%] sm:pt-0 pt-10 flex justify-center items-center '>
<img src={images.laurels} alt="laurels_img" className='  w-[80%]  md:w-[60%] ss:min-w-[80%]  ' />
</div>
</div>
</div>
    </div>

    </div>

);

export default Laurels;
