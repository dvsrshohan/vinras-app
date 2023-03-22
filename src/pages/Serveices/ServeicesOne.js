import React from 'react';
import StaticHero from '../../components/AboutUS/StaticHero';
import BusniessDiscussion from '../../components/Home/BusniessDiscussion/BusniessDiscussion';
import Counter from '../../components/Home/Counter/Counter';
import Services from '../../components/Home/Services/Services';
import Testimonial from '../../components/Home/Testimonial/Testimonial';

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