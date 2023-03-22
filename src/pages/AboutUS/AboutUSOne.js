import React from 'react';
import StaticHero from '../../components/AboutUS/StaticHero';
import AboutUs from '../../components/Home/AboutUs/AboutUs';
import OurBenefits from '../../components/Home/OurBenefits/OurBenefits';
import Team from '../../components/Home/Team/Team';
import Testimonial from '../../components/Home/Testimonial/Testimonial';

const AboutUSOne = () => {
  return (
    <div>
      <StaticHero title={"About Us"} />

      <div className="">
        <AboutUs />
        <Team />
        <OurBenefits />
        <Testimonial/>
      </div>
    </div>
  );
};

export default AboutUSOne;