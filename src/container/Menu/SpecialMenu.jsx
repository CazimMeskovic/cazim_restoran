import React from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';



const SpecialMenu = () => (
  <div id='menu' className='bg-black w-[100%] pt-20 pb-20'>

    <div className='flex flex-col justify-center items-center '>
      <div>
        <p className='p__cormorant'>Menu that fits you palatte</p>
      </div>
      <div>
        <img className='spoon__img mb-5' src={images.spoon} />
      </div>
      <div>
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>
    </div>

    <div className='flex justify-center '>
      <div className="max-w-[1200px] my-2 flex justify-center items-start md:flex-row flex-col gap-5">
        <div className="flex-1 w-full flex flex-col flex__center">
          <h5 className=" headtext__cormorant_juci  text-3xl leading-10 
          tracking-tight text-white">Juice & Vater</h5>
          <div className="flex flex-col my-8 w-full text-white">
            {data.wines.map((wine, index) => (
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

       
        <div>
          <img className='sm:w-[444px] w-[344px] sm:h-[569px] h-[469px] flex-shrink-0' src={images.menu} />
        </div>

        <div className="flex-1 w-full flex flex-col  flex__center">
          <p className="headtext__cormorant_juci font-semibold text-3xl leading-10 tracking-tight text-white">Cocktails</p>
          <div className="flex flex-col my-8 w-full text-white">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
      </div>
    </div>

   
    <div className='flex justify-center items-center' style={{ marginTop: 15 }}>
      <button type="button" className="custom__button ">View More</button>
    </div>

  </div>
);

export default SpecialMenu;
