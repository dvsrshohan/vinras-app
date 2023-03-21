import React from 'react';
import StaticHero from '../../components/AboutUS/StaticHero';
import AboutUs from '../../components/Home/AboutUs/AboutUs';
import BusniessDiscussion from '../../components/Home/BusniessDiscussion/BusniessDiscussion';
import Counter from '../../components/Home/Counter/Counter';
import OurBenefits from '../../components/Home/OurBenefits/OurBenefits';
import Services from '../../components/Home/Services/Services';
import Team from '../../components/Home/Team/Team';
import Testimonial from '../../components/Home/Testimonial/Testimonial';
import FAQTwo from '../../components/HomeTwo/FAQTwo/FAQTwo';
import Skills from '../../components/HomeTwo/Skills/Skills';
import TeamTwo from '../../components/HomeTwo/TeamTwo/TeamTwo';

const ServicesOne = () => {
  return (
    <div>
      <StaticHero title={"Services"} />

      <div className="">
        <Services />
        <BusniessDiscussion />
        <Counter />
        <div className="mt-14">
          <Testimonial />
        </div>
      </div>
    </div>
  );
};

export default ServicesOne;