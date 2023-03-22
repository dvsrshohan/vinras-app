import React from 'react';
import AboutTop from '../../components/HomeTwo/AboutTwo/AboutTop';
import AboutTwo from '../../components/HomeTwo/AboutTwo/AboutTwo';
import BlogTwo from '../../components/HomeTwo/BlogTwo/BlogTwo';
import Case from '../../components/HomeTwo/Case/Case';
import FAQTwo from '../../components/HomeTwo/FAQTwo/FAQTwo';
import Hero from '../../components/HomeTwo/Hero/Hero';
import ServicesTwo from '../../components/HomeTwo/ServicesTwo/ServicesTwo';
import Skills from '../../components/HomeTwo/Skills/Skills';
import TeamTwo from '../../components/HomeTwo/TeamTwo/TeamTwo';
import TestimonialTwo from '../../components/HomeTwo/Testimonial/TestimonialTwo';
import WhyChooseUs from '../../components/HomeTwo/WhyChooseUs/WhyChooseUs';

const HomeTwo = () => {
  return (
    <div>
      <Hero />
      <AboutTop/>
      <AboutTwo />
      <ServicesTwo />
      <Case/>
      <Skills />
      <FAQTwo />
      <TeamTwo />
      <WhyChooseUs />
      <TestimonialTwo />
      <BlogTwo />
    </div>
  );
};

export default HomeTwo;