import React from "react";

function ContactUsSection() {
  return (
    <section className="bg-green-100 py-12 px-8" id="contactussection">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-100 border border-gray-400">
            <h1 className="text-3xl font-semibold text-gray-800 mt-4 ">
              Get in Touch
            </h1>
            <form className="p-8 ">
              <div className="mb-4">
                <label htmlFor="name" className="flex text-gray-800 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="flex text-gray-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="flex text-gray-800 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 block w-full"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className=" rounded-lg p-6">
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      Drop-off Points in India
    </h3>
    <ul className="list-none text-gray-600">
      <li className="mb-2">
        <span className="font-semibold">Mumbai:</span> 456 Market Street, Andheri West
      </li>
      <li className="mb-2">
        <span className="font-semibold">Delhi:</span> 789 Central Avenue, Connaught Place
      </li>
      <li className="mb-2">
        <span className="font-semibold">Bangalore:</span> 101 MG Road, Indiranagar
      </li>
      <li className="mb-2">
        <span className="font-semibold">Kolkata:</span> 222 Park Street, Salt Lake City
      </li>
    </ul>
  </div>
  <div>
  <div className="mb-8">
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      Main Branch
    </h3>
    <address className="text-lg text-gray-600 mb-6">
      123 Main Street<br />
      Mumbai, Maharashtra<br />
      India - 400001
    </address>
  </div>
  <div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">
      City Branch
    </h3>
    <address className="text-lg text-gray-600 mb-6">
      456 Market Street<br />
      Bangalore, Karnataka<br />
      India - 560001
    </address>
  </div>
</div>

</div>

        </div>
      </div>
    </section>
  );
}

export default ContactUsSection;
