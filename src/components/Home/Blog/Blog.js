import React from 'react';
import { FaLongArrowAltRight, FaRegBookmark, FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="md:bg-[url(https://i.ibb.co/TTPtPyv/BG-shap.png)] bg-no-repeat bg-left-top">

      <div className='container my-24'>
        <div className="text-center mb-9">
          <div className="flex items-center justify-center gap-2">
            <div className='w-10 h-[2px] bg-primary'></div>
            <h4 className='text-[22px] font-semibold text-primary'>Our Articles</h4>
            <div className='w-10 h-[2px] bg-primary'></div>
          </div>
          <h3 className='xl:text-[50px] text-[33px] font-bold'>Our Latest Blog Post</h3>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 lg:w-[85%] w-full mx-auto gap-10">
          <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src="/images/blog-1.png" alt="Shoes" /></figure>
            <div className="card-body">
              <div className="flex items-end justify-between mt-[-20%]">
                <div className="flex items-center gap-2"><FaRegBookmark className='text-primary' /> <p className='text-[#878c8f]'>Admin</p></div>
                <div className="flex items-center gap-2"><FaRegComments className='text-primary' /> <p className='text-[#878c8f]'>Comment</p></div>
                <div className="bg-primary text-white rounded"><h2 className='p-3 font-bold text-center'>20 <br /> May</h2></div>
              </div>
              <h2 className="card-title text-[24px] font-bold mt-4">You Business Advice For Growth</h2>
              <p className='my-5'>Lorem ipsum is simply is text used by copytyping refreshing.</p>
              <hr />
              <div className="flex items-center justify-center mt-2">
                <p><Link to=" " className="hover:text-primary transition-all duration-700">Read more</Link></p>
                <Link to=" " className="hover:text-primary transition-all duration-700">
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src="/images/blog-2.png" alt="Shoes" /></figure>
            <div className="card-body">
              <div className="flex items-end justify-between mt-[-20%]">
                <div className="flex items-center gap-2"><FaRegBookmark className='text-primary' /> <p className='text-[#878c8f]'>Admin</p></div>
                <div className="flex items-center gap-2"><FaRegComments className='text-primary' /> <p className='text-[#878c8f]'>Comment</p></div>
                <div className="bg-primary text-white rounded"><h2 className='p-3 font-bold text-center'>20 <br /> May</h2></div>
              </div>
              <h2 className="card-title text-[24px] font-bold mt-4">You Business Advice For Growth</h2>
              <p className='my-5'>Lorem ipsum is simply is text used by copytyping refreshing.</p>
              <hr />
              <div className="flex items-center justify-center mt-2">
                <p><Link to=" " className="hover:text-primary transition-all duration-700">Read more</Link></p>
                <Link to=" " className="hover:text-primary transition-all duration-700">
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src="/images/blog-3.png" alt="Shoes" /></figure>
            <div className="card-body">
              <div className="flex items-end justify-between mt-[-20%]">
                <div className="flex items-center gap-2"><FaRegBookmark className='text-primary' /> <p className='text-[#878c8f]'>Admin</p></div>
                <div className="flex items-center gap-2"><FaRegComments className='text-primary' /> <p className='text-[#878c8f]'>Comment</p></div>
                <div className="bg-primary text-white rounded"><h2 className='p-3 font-bold text-center'>20 <br /> May</h2></div>
              </div>
              <h2 className="card-title text-[24px] font-bold mt-4">You Business Advice For Growth</h2>
              <p className='my-5'>Lorem ipsum is simply is text used by copytyping refreshing.</p>
              <hr />
              <div className="flex items-center justify-center mt-2">
                <p><Link to=" " className="hover:text-primary transition-all duration-700">Read more</Link></p>
                <Link to=" " className="hover:text-primary transition-all duration-700">
                  <FaLongArrowAltRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;