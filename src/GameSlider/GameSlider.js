import React, { useState } from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './GameSlider.css';
import { dataDigitalBestSeller } from './Data';
import img from '../assets/tictac.png';

function GameSlider() {
  const [defaultImage, setDefaultImage] = useState({});
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: img,
    }));
  };

  const handleImageClick = (id) => {
    if (id === 1) {
      navigate('/lotterygame');
    }
    if (id ===2) {
      navigate('/puzzlegame');
    }
    if (id ===4 ) {
      navigate('/flipgame');
    }
    if (id ===5 ) {
      navigate('/snakegame');
    }
    if (id ===3 ) {
      navigate('/boardgame');
    }
  };

  return (
    <div className="Game">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="cart" key={item.id} onClick={() => handleImageClick(item.id)}>
            <div className="cart1">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
              <h1>{item.title}</h1>
            </div>
            <div className="cart2">
              <h3>{item.price}</h3>
              <span className="category">{item.category}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default GameSlider;
