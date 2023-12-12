import React from 'react'
import Header from './header/Header'
import Banner from './banner/Banner'
import AboutUs from './about/AboutUs'
import Services from './services/Services'
import ContactUs from './contactus/ContactUs'
import Testimonials from './testimonials/Testimonials'
import Footer from './footer/Footer'
import video from '../images/Three-Cocktails.mp4'
import Mission from './mission/Mission'

const Home = () => {
  return (
    <div className='container'>
      
      <Header />
      <Banner />
      <AboutUs />
      <Services />
      <ContactUs />
      <Mission />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Home