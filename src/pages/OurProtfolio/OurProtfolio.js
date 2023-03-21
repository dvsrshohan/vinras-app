import React from 'react';
import StaticHero from '../../components/AboutUS/StaticHero';
import Case from '../../components/HomeTwo/Case/Case';

const OurProtfolio = () => {
  return (
    <div>
      <StaticHero title="Our Portfolio" />
      <div className="">
        <Case/>
      </div>
    </div>
  );
};

export default OurProtfolio;