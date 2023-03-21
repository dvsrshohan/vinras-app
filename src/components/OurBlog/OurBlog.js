import React from 'react';
import { FaAngleDoubleRight, FaLongArrowAltRight, FaRegClock, FaRegCommentDots, FaRegUserCircle, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OurBlog = () => {
  return (
    <div>
      <div className="container my-14">
        <div className="lg:flex gap-5">
          <div className="lg:w-[70%] w-full">
            <div className=" w-full">
              <div className="">
                <img className='w-full' src="/images/ourBlog-1.png" alt="" srcset="" />
              </div>
              <p className='text-[14px] mt-7 mb-5 inline-flex items-center gap-2'>
                <span className='text-primary'><FaRegClock /></span> 20 may, 2021
                <span className='text-primary ml-2'><FaRegUserCircle /></span>  admin
                <span className='text-primary ml-2'><FaRegCommentDots /></span> 2 comments</p>
              <h3 className='text-[30px] font-bold'>Guide To Newly Suppored Modern Css Pseudo</h3>
              <p className='text-[18px] mt-10 mb-12'>
                Lorem Ipsum available, There are many variations of passages of  but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.
              </p>
                <Link to={" "} className="text-[14px] flex items-center gap-4 text-[#9fa3a6]">Read more <FaLongArrowAltRight/></Link>
            </div>
            <div className="mt-10">
              <div className="">
                <img className='w-full' src="/images/ourBlog-2.png" alt="" srcset="" />
              </div>
              <p className='text-[14px] mt-7 mb-5 inline-flex items-center gap-2'>
                <span className='text-primary'><FaRegClock /></span> 20 may, 2021
                <span className='text-primary ml-2'><FaRegUserCircle /></span>  admin
                <span className='text-primary ml-2'><FaRegCommentDots /></span> 2 comments</p>
              <h3 className='text-[30px] font-bold'>Guide To Newly Suppored Modern Css Pseudo</h3>
              <p className='text-[18px] mt-10 mb-12'>
                Lorem Ipsum available, There are many variations of passages of  but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.
              </p>
                <Link to={" "} className="text-[14px] flex items-center gap-4 text-[#9fa3a6]">Read more <FaLongArrowAltRight/></Link>
            </div>
            <div className="mt-10">
              <div className="">
                <img className='w-full' src="/images/ourBlog-3.png" alt="" srcset="" />
              </div>
              <p className='text-[14px] mt-7 mb-5 inline-flex items-center gap-2'>
                <span className='text-primary'><FaRegClock /></span> 20 may, 2021
                <span className='text-primary ml-2'><FaRegUserCircle /></span>  admin
                <span className='text-primary ml-2'><FaRegCommentDots /></span> 2 comments</p>
              <h3 className='text-[30px] font-bold'>Guide To Newly Suppored Modern Css Pseudo</h3>
              <p className='text-[18px] mt-10 mb-12'>
                Lorem Ipsum available, There are many variations of passages of  but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.
              </p>
                <Link to={" "} className="text-[14px] flex items-center gap-4 text-[#9fa3a6]">Read more <FaLongArrowAltRight/></Link>
            </div>
            <div className="mt-10">
              <div className="">
                <img className='w-full' src="/images/ourBlog-4.png" alt="" srcset="" />
              </div>
              <p className='text-[14px] mt-7 mb-5 inline-flex items-center gap-2'>
                <span className='text-primary'><FaRegClock /></span> 20 may, 2021
                <span className='text-primary ml-2'><FaRegUserCircle /></span>  admin
                <span className='text-primary ml-2'><FaRegCommentDots /></span> 2 comments</p>
              <h3 className='text-[30px] font-bold'>Guide To Newly Suppored Modern Css Pseudo</h3>
              <p className='text-[18px] mt-10 mb-12'>
                Lorem Ipsum available, There are many variations of passages of  but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage.
              </p>
                <Link to={" "} className="text-[14px] flex items-center gap-4 text-[#9fa3a6]">Read more <FaLongArrowAltRight/></Link>
            </div>
            <div className="flex items-center gap-5 mt-12">
              <button className='border-[1px] rounded-full bg-transparent hover:bg-primary hover:text-white transition-all duration-700 w-14 h-14'>1</button>
              <button className='border-[1px] rounded-full bg-transparent hover:bg-primary hover:text-white transition-all duration-700 w-14 h-14'>3</button>
              <button className='border-[1px] rounded-full bg-transparent hover:bg-primary hover:text-white transition-all duration-700 w-14 h-14'>4</button>
              <button className='border-[1px] rounded-full bg-transparent hover:bg-primary hover:text-white transition-all duration-700 w-14 h-14 flex justify-center items-center'>
                <FaAngleDoubleRight />
              </button>
            </div>
          </div>
          <div className="lg:w-[30%] w-full">
            <div className="">
              <div className="bg-[#f2f2f2] p-8 mb-7">
                <h2 className='text-[28px] font-semibold mb-5'>Search</h2>
                <div className="bg-white flex items-center justify-between px-3">
                  <input type="text" placeholder='Search..' className='input bg-transparent border-none focus:outline-none' />
                  <FaSearch/>
                </div>
              </div>
              <div className="bg-[#f2f2f2] p-8 mb-7">
                <h2 className='text-[28px] font-semibold mb-5'>Category</h2>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Financial Consulting</h3>
                  <FaLongArrowAltRight/>
                </button>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Business Strategy</h3>
                  <FaLongArrowAltRight/>
                </button>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Marketing Strategy</h3>
                  <FaLongArrowAltRight/>
                </button>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Product Engineering</h3>
                  <FaLongArrowAltRight/>
                </button>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Strategy Innovition</h3>
                  <FaLongArrowAltRight/>
                </button>
              </div>
              <div className="bg-[#f2f2f2] p-8 mb-7">
                <h2 className='text-[28px] font-semibold mb-5'>Latest News</h2>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1/3">
                    <img className='w-full' src="/images/latestBlog-1.png" alt="" />
                  </div>
                  <div className="">
                    <h4 className='text-[14px] font-semibold'>Sint occaecat cupidatat non proident, sunt in culpa qul</h4>
                    <p className='text-[12px]'>2 May 2021</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1/3">
                    <img className='w-full' src="/images/latestBlog-2.png" alt="" />
                  </div>
                  <div className="">
                    <h4 className='text-[14px] font-semibold'>Sint occaecat cupidatat non proident, sunt in culpa qul</h4>
                    <p className='text-[12px]'>2 May 2021</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-1/3">
                    <img className='w-full' src="/images/latestBlog-3.png" alt="" />
                  </div>
                  <div className="">
                    <h4 className='text-[14px] font-semibold'>Sint occaecat cupidatat non proident, sunt in culpa qul</h4>
                    <p className='text-[12px]'>2 May 2021</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#f2f2f2] p-8 mb-7">
                <h2 className='text-[28px] font-semibold mb-5'>Tags Cloud</h2>
                <div className="flex flex-wrap gap-5">
                  <button className='text-[14px] font-normal px-[30px] py-4 bg-white '>Business</button>
                  <button className='text-[14px] font-normal px-[30px] py-4 bg-white '>Design</button>
                  <button className='text-[14px] font-normal px-[30px] py-4 bg-white '>Planing</button>
                  <button className='text-[14px] font-normal px-[30px] py-4 bg-white '>Art Finance</button>
                  <button className='text-[14px] font-normal px-[30px] py-4 bg-white '>Love</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;