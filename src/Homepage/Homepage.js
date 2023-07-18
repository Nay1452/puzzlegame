import React, { useState } from 'react';
import Header from '../Header/Header';
import ImageSlider from '../ImageSlider/ImageSlider';
import { SliderData } from '../ImageSlider/SliderData';
import GameSlider from '../GameSlider/GameSlider';

function Homepage() {
  return (
    <div className='hh'>
      <Header />
      
      <ImageSlider slides={SliderData} />
      <GameSlider />

     </div>
  );
}



  


export default Homepage;
