import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import oldclothstack from "../assets/oldclothstack.jpg";
import clothsorting from "../assets/clothsorting.jpg";
import washing from "../assets/washing.jpg";
import cutting from "../assets/cutting.jpg";
import last from "../assets/last.jpg";

function HeroSection() {
  const [carouselStyle, setCarouselStyle] = useState({});

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    autoplay: false,
    autoplaySpeed: 5000, // 5 seconds
    beforeChange: (oldIndex, newIndex) => {
      const newColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 2)`;
      setCarouselStyle({ boxShadow: `0px 0px 20px 10px ${newColor}` });
    }
  };

  return (
    <div className="bg-green-100 py-8 px-8" id="home">
      <div className="container mx-auto flex items-center justify-between">
        {/* Carousel */}
        <div className="w-full md:w-1/2 relative" style={carouselStyle}>
          <Slider {...settings}>
            <div className="relative">
              <img src={oldclothstack} alt="oldclothstack" className="w-full h-auto" />
              <p className="text-lg m-2">Got old clothes? Discover how we recycle them to save the Earth!</p>
            </div>
            <div className="relative">
              <img src={clothsorting} alt="clothsorting" className="w-full h-[500px]" />
              <p className="text-lg m-2">Sorting through the threads: where every fabric finds its future.</p>
            </div>
            <div className="relative">
              <img src={washing} alt="washing" className="w-full h-auto" />
              <p className="text-lg m-2">Renewing fabrics: where every thread is treated with care and attention.</p>
            </div>
            <div className="relative">
              <img src={cutting} alt="cutting" className="w-full h-auto" />
              <p className="text-lg m-2">Crafting new beginnings: where every cut shapes a fresh fashion statement.</p>
            </div>
            <div className="relative">
              <img src={last} alt="last" className="w-full h-auto" />
              <p className="text-lg m-2">Nurturing our planet: where every action makes a world of difference.</p>
            </div>
          </Slider>
        </div>

        {/* Detail Text */}
        <div className="md:ml-12 w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Recycle Your Clothes</h1>
          <p className="text-lg text-gray-700 mb-4">Join us in our mission to protect the environment by recycling your old clothes. By recycling, you're not only reducing waste but also giving your clothes a new life. Let's make a positive impact together for a greener planet!</p>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
