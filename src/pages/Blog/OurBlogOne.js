import React from 'react';
import StaticHero from '../../components/AboutUS/StaticHero';
import OurBlog from '../../components/OurBlog/OurBlog';

const OurBlogOne = () => {
  return (
    <div>
      <StaticHero title={"Blog Standard"} />

      <div className="">
        <OurBlog/>
      </div>
    </div>
  );
};

export default OurBlogOne;