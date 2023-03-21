import React from 'react';
import Navbar from '../../common/Navbar/Navbar';
import AboutUs from '../../components/Home/AboutUs/AboutUs';
import AboutUsTop from '../../components/Home/AboutUs/AboutUsTop';
import Blog from '../../components/Home/Blog/Blog';
import BusniessDiscussion from '../../components/Home/BusniessDiscussion/BusniessDiscussion';
import Contact from '../../components/Home/Contact/Contact';
import Counter from '../../components/Home/Counter/Counter';
import Hero from '../../components/Home/Hero/Hero';
import OurBenefits from '../../components/Home/OurBenefits/OurBenefits';
import Services from '../../components/Home/Services/Services';
import Team from '../../components/Home/Team/Team';
import Testimonial from '../../components/Home/Testimonial/Testimonial';
import Finance from '../../components/HomeTwo/Finance/Finance';

const HomeOne = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <AboutUsTop/>
      <AboutUs />
      <Services />
      <Finance/>
      <BusniessDiscussion />
      <Counter />
      <Team />
      <OurBenefits />
      <Testimonial />
      <Contact />
      <Blog />
    </div>
  );
};

export default HomeOne;