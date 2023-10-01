

import React from 'react';



const MenuItem = ({ title, price, tags }) => (
  <div className="w-full my-4 flex flex-col pr-5 pl-5">
    <div className="flex justify-between items-center">
      <div className="flex-1">
        <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title} <span><hr></hr></span></p>
      </div>
      <div className="w-90 h-1 bg-var(--color-golden) mx-4" />
      <div className="flex justify-end items-end">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: '#AAAAAA' }}>{tags}</p>
    </div>
  </div>
);

export default MenuItem;
