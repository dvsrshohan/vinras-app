import React from 'react';
import StaticHero from '../../components/AboutUS/StaticHero';
import AboutTwo from '../../components/HomeTwo/AboutTwo/AboutTwo';
import FAQTwo from '../../components/HomeTwo/FAQTwo/FAQTwo';
import Skills from '../../components/HomeTwo/Skills/Skills';
import TeamTwo from '../../components/HomeTwo/TeamTwo/TeamTwo';

const AboutUsTow = () => {
  return (
    <div>
      <StaticHero title={"About Us"} />

      <div className="">
        <AboutTwo />
        <Skills />
        <FAQTwo />
        <TeamTwo/>
      </div>
    </div>
  );
};

export default AboutUsTow;