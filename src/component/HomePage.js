import React from 'react'

import Navbar from './Navbar'
import HeroSection from './Banner'
import FeaturesSection from './FeaturesSection'
import AboutUsSection from './AboutUsSection'
import ContactUsSection from './ContactUsSection'

function HomePage() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <FeaturesSection/>
      <AboutUsSection/>
      <ContactUsSection/>

    </div>
  )
}

export default HomePage
