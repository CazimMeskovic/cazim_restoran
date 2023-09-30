

import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="flex md:flex-row flex-col app__bg min-w-[600px] w-full h-full p-16 pt-20 pb-20">
      <div className="flex-1 flex justify-center items-start flex-col max-w-[500px]  pr-8">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans text-gray-400  mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br></br> Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type="button" className="custom__button mt-4">View More</button>
      </div>
      <div className="flex-1 flex flex-row sm:max-w-[65%] max-w[80%] relative">
        <div className="flex flex-row w-max overflow-x-scroll -ms-overflow-style-none scrollbar-none" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
        
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram onClick={() => window.open('https://www.instagram.com/')} className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
