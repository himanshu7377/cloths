import React from 'react';
import buyRecycleClothesImage from '../assets/buyRecycleClothesImage.jpg';
import donateClothesImage from '../assets/donateClothesImage.webp';
import bg from '../assets/bg.jpg';

function FeaturesSection() {
  return (
    <section className="relative bg-green-100 py-4 px-8">
      {/* <img src={bg} alt='bg' className='absolute inset-0 w-full h-full object-fill opacity-90'/> */}
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buy Recycled Clothes Card */}
          <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-10">
            <img src={bg} style={{height:"450px", width:"670px"}}  alt='buy recyle clothes' className='mb-5 opacity-90'/>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Buy Recycled Clothes</h3>
            <p className="text-gray-600 mb-4">Explore our collection of high-quality recycled clothes. Each item is made from sustainable materials and contributes to reducing waste.</p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600">Shop Now</button>
          </div>

          {/* Donate Clothes for Recycling Card */}
          <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-10">
            <img src={donateClothesImage} alt=' donate clothes' style={{height:"450px", width:"670px"}} className='mb-5'/>
            <h3 className="text-3xl font-semibold text-gray-800 mb-4">Donate Clothes for Recycling</h3>
            <p className="text-gray-600 mb-4">Help us in our mission to recycle clothes and protect the environment. Donate your old clothes, and we'll ensure they're reused or recycled responsibly.</p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600">Donate Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
