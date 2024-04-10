import React from "react";
import bg from "../assets/bg.jpg";
import InfiniteLogoCarousel from "./LogoCarousel";
// import testimonial1Image from '../assets/testimonial1.jpg';
// import testimonial2Image from '../assets/testimonial2.jpg';

function AboutUsSection() {
  return (
    <section className="py-12 px-8">
      {/* Mission Statement */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 text-center">
          Our mission is to save the earth by recycling all clothes and creating
          a sustainable ecosystem where every piece of clothing is either reused
          or recycled. We strive to minimize waste, reduce environmental impact,
          and promote responsible consumption through our efforts.
        </p>
      </div>

      {/* Join Us */}
      {/* Join Us */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Join Us
        </h2>
        <p className="text-lg text-gray-600 mb-4 text-center">
          Get involved and support our mission to recycle clothes and protect
          the environment.
        </p>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Testimonials
        </h2>
        <div className="flex justify-center">
          {/* Testimonial 1 */}
          <div className="w-full md:w-1/2 bg-orange-300 p-6 rounded-lg shadow-md mr-4 transform transition duration-500 hover:scale-105">
            <img
              src={bg}
              alt="testimonial1"
              className="mb-4 rounded-full mx-auto"
              style={{ width: "100px", height: "100px" }}
            />
            <p className="text-gray-600 mb-4 text-center">
              "I'm extremely impressed with the quality and variety of recycled
              clothes offered by Your Organization. It's amazing to see how they
              are making a positive impact on the environment while providing
              stylish clothing options."
            </p>
            <p className="text-gray-800 font-semibold text-center">
              - John Doe, Customer
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="w-full md:w-1/2 bg-orange-300 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <img
              src={bg}
              alt="testimonial2"
              className="mb-4 rounded-full mx-auto"
              style={{ width: "100px", height: "100px" }}
            />
            <p className="text-gray-600 mb-4 text-center">
              "Your Organization has been instrumental in spreading awareness
              about the importance of recycling clothes in our community. Their
              dedication and commitment to sustainability inspire us all to do
              our part in protecting the environment."
            </p>
            <p className="text-gray-800 font-semibold text-center">
              - Jane Doe, Volunteer
            </p>
          </div>
        </div>
      </div>

      {/* Partner List */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Our Partners
        </h2>
        <InfiniteLogoCarousel />
      </div>

      {/* What We Do */}
        <div className="bg-orange-300">
      <div className="p-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800  mb-4 text-center">
          What We Do
        </h2>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center ">
        <div className=" w-full md:w-1/2 text-left">
          <ul className="text-lg text-gray-600 mt-4">
            <li className="flex items-start mb-4">
              <span className="mr-2">&#8226;</span>
              <span>
                Collecting old clothes from individuals, organizations, and
                businesses.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="mr-2">&#8226;</span>
              <span>
                Sorting and processing the collected clothes to determine their
                suitability for reuse or recycling.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="mr-2">&#8226;</span>
              <span>
                Collaborating with local communities and organizations to raise
                awareness about the importance of recycling clothes.
              </span>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 text-left">
          <ul className="text-lg text-gray-600 mt-4">
            <li className="flex items-start mb-4">
              <span className="mr-2">&#8226;</span>
              <span>
                Partnering with manufacturers and retailers to promote the use
                of recycled materials in the production of new clothing items.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="mr-2">&#8226;</span>
              <span>
                Distributing recycled clothes to those in need and selling them
                through various channels to fund our initiatives.
              </span>
            </li>
            <li className="flex items-start mb-4">
              <span className="mr-2">&#8226;</span>
              <span>
                Continuously innovating and improving our processes to maximize
                efficiency and minimize environmental impact.
              </span>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}

export default AboutUsSection;
