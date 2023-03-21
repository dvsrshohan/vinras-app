import React from 'react';
import StaticHero from '../../components/AboutUS/StaticHero';
import OurBlogDetails from '../../components/OurBlog/OurBlogDetails';

const BlogDetails = () => {
  return (
    <div>
      <StaticHero title="Blog Details" />
      
      <div className="">
        <OurBlogDetails/>
      </div>
    </div>
  );
};

export default BlogDetails;