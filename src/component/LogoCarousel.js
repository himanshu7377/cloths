import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import puma from '../assets/puma.svg';
import prada from '../assets/prada.svg';
import nike from '../assets/nike.svg';
import lacos from '../assets/lacos.svg';
import grab from '../assets/grab.svg';
import flipkart from '../assets/flipkart.svg';
import chanel from '../assets/chanel.svg';
import adidas from '../assets/adidas.svg';
import amazon from '../assets/amazon.svg';

// Import additional logos as needed

const InfiniteLogoCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" py-4 bg-white">
      <Slider {...settings}>
        <div className="logo-container">
          <img src={puma} alt="Logo 1" className="w-full h-[150px]" />
        </div>
        <div className="logo-container">
          <img src={prada} alt="Logo 2" className="w-full h-[150px]" />
        </div>
        <div className="logo-container">
          <img src={nike} alt="Logo 3" className="w-full h-[150px]" />
        </div>
        <div className="logo-container">
          <img src={grab} alt="Logo 3" className="w-full h-[150px]" />
        </div>
        <div className="logo-container">
          <img src={adidas} alt="Logo 3" className="w-full h-[150px]" />
        </div>
        <div className="logo-container">
          <img src={amazon} alt="Logo 3" className="w-full h-[150px]" />
        </div>
        <div className="logo-container">
          <img src={chanel} alt="Logo 3" className="w-full h-[150px]" />
        </div>
        <div className="logo-container">
          <img src={lacos} alt="Logo 3" className="w-full h-[150px]" />
        </div>
        <div className="logo-container">
          <img src={flipkart} alt="Logo 3" className="w-full h-[150px]" />
        </div>
        {/* Add more logo containers with images as needed */}
      </Slider>
    </div>
  );
};

export default InfiniteLogoCarousel;
