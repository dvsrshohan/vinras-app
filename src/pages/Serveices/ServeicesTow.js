import React from 'react';
import StaticHero from '../../components/AboutUS/StaticHero';
import FAQTwo from '../../components/HomeTwo/FAQTwo/FAQTwo';
import ServicesTwo from '../../components/HomeTwo/ServicesTwo/ServicesTwo';
import Skills from '../../components/HomeTwo/Skills/Skills';
import TeamTwo from '../../components/HomeTwo/TeamTwo/TeamTwo';
import WhyChooseUs from '../../components/HomeTwo/WhyChooseUs/WhyChooseUs';

const ServicesTow = () => {
  return (
    <div>
      <StaticHero title={"Services"} />

      <div className="">
        <ServicesTwo />
        <FAQTwo />
        <Skills />
        <WhyChooseUs/>
        <TeamTwo/>
      </div>
    </div>
  );
};

export default ServicesTow;