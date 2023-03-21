import React from 'react';
import { FaCircle, FaFacebookF, FaInstagram, FaLongArrowAltRight, FaQuoteLeft, FaRegClock, FaRegCommentDots, FaRegUserCircle, FaSearch, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const OurBlogDetails = () => {
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
            </div>
            <div className="mt-10">
              <div className="">
                <img className='w-full' src="/images/ourBlog-01.png" alt="" srcset="" />
              </div>
              <p className='text-[18px] mt-10 mb-12'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              </p>
              <div className="flex items-start gap-5">
                <FaQuoteLeft className='text-6xl' />
                <p className='text-[18px] mb-12'>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan doloremque laudantium, totam rem aperiam, eaque ipsa quae ab ilnventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>

              </div>
              <p className='text-[18px] mt-10 mb-12'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
              </p>
              <div className="flex items-start gap-x-5 mt-3">
                <FaCircle className='text-[#bfc2c3]' />
                <p className="text-[18px] -mt-2">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molla
                </p>
              </div>
              <div className="flex items-start gap-x-5 mt-3">
                <FaCircle className='text-[#bfc2c3]' />
                <p className="text-[18px] -mt-2">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molla
                </p>
              </div>
              <div className="flex items-start gap-x-5 mt-3">
                <FaCircle className='text-[#bfc2c3]' />
                <p className="text-[18px] -mt-2">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molla
                </p>
              </div>
              <div className="flex items-start gap-x-5 mt-3">
                <FaCircle className='text-[#bfc2c3]' />
                <p className="text-[18px] -mt-2">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt molla
                </p>
              </div>

              <p className='text-[18px] mt-10 mb-12'>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
              </p>

              <p className='text-[18px] mt-10 mb-12'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
              </p>

              <div className="flex justify-between">
                <div className="flex gap-5">
                  <button className='bg-white border py-3 px-10 text-[14px] text-[#878c8f] text-medium'>Office</button>
                  <button className='bg-white border py-3 px-10 text-[14px] text-[#878c8f] text-medium'>Design</button>
                  <button className='bg-white border py-3 px-10 text-[14px] text-[#878c8f] text-medium'>Clean</button>
                </div>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2] hover:bg-primary text-black hover:text-white transition-all duration-700 flex items-center justify-center cursor-pointer">
                    <FaFacebookF />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2] hover:bg-primary text-black hover:text-white transition-all duration-700 flex items-center justify-center cursor-pointer">
                    <FaTwitter />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#f2f2f2] hover:bg-primary text-black hover:text-white transition-all duration-700 flex items-center justify-center cursor-pointer">
                    <FaInstagram />
                  </div>
                </div>
              </div>
              <div className="bg-[#f2f2f2] py-9 px-7 w-full mt-5">
                <div className="flex items-center gap-0">
                  <div className="w-full">
                    <img className='rounded-full' src="/images/blogUser-1.png" alt="" />
                  </div>
                  <div className="">
                    <h3 className='text-[22px] font-semibold'>Mhon Smith</h3>
                    <p className='py-5'>
                      Them cattle had their you're female, living seed firmament earth saying mud you dark make heaven face carribian surface saying without.
                    </p>
                    <div className="flex items-center gap-2">
                      <div className='text-black hover:text-primary transition-all duration-700 cursor-pointer p-3'>
                        <FaFacebookF />
                      </div>
                      <div className='text-black hover:text-primary transition-all duration-700 cursor-pointer p-3'>
                        <FaTwitter />
                      </div>
                      <div className='text-black hover:text-primary transition-all duration-700 cursor-pointer p-3'>
                        <FaInstagram />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className='text-[33px] font-semibold my-7'>Comments ( 2)</h2>

              <div className="flex items-center gap-5 mb-9">
                <div className="w-1/3">
                  <img className='rounded-full w-full h-auto' src="/images/blogUser-1.png" alt="" />
                </div>
                <div className="">
                  <h3 className='text-[22px] font-semibold'>Mhon Smith</h3>
                  <p className='py-5'>
                    Them cattle had their you're female, living seed firmament earth saying mud you dark make heaven face carribian surface saying without.
                  </p>
                  <div className="flex items-center text-[#707480] gap-x-9">
                    <p className='text-[15px] font-semibold'>February 03. 2021</p>
                    <Link to={""} className='text-[15px] font-semibold text-primary' >Reply</Link>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="w-1/3">
                  <img className='rounded-full w-full h-auto' src="/images/blogUser-1.png" alt="" />
                </div>
                <div className="">
                  <h3 className='text-[22px] font-semibold'>Jhon Smith</h3>
                  <p className='py-5'>
                    Them cattle had their you're female, living seed firmament earth saying mud you dark make heaven face carribian surface saying without.
                  </p>
                  <div className="flex items-center text-[#707480] gap-x-9">
                    <p className='text-[15px] font-semibold'>February 03. 2021</p>
                    <Link to={""} className='text-[15px] font-semibold text-primary' >Reply</Link>
                  </div>
                </div>
              </div>

              <h2 className='text-[32px] font-semibold my-7'>Leave A Reply</h2>

              <div className="">
                <input type="text" name="" id="" placeholder='YOUR NAME' className='input rounded-none border-[#dbdfe2] w-full  focus:outline-none min-h-[60px] mb-5' />
                <input type="email" name="" id="" placeholder='EMAIL ADDRESS' className='input rounded-none border-[#dbdfe2] w-full  focus:outline-none min-h-[60px] mb-5' />

                <textarea className='textarea rounded-none border-[#dbdfe2] w-full  focus:outline-none' placeholder='WRITE COMMENT' name="" id="" cols="100" rows="10"></textarea>

                <button className='btn btn-primary capitalize rounded-full text-white text-[15px] font-semibold px-10 mt-7'>Post Comment</button>
              </div>
            </div>
          </div>
          <div className="lg:w-[30%] w-full">
            <div className="">
              <div className="bg-[#f2f2f2] p-8 mb-7">
                <h2 className='text-[28px] font-semibold mb-5'>Search</h2>
                <div className="bg-white flex items-center justify-between px-3">
                  <input type="text" placeholder='Search..' className='input bg-transparent border-none focus:outline-none' />
                  <FaSearch />
                </div>
              </div>
              <div className="bg-[#f2f2f2] p-8 mb-7">
                <h2 className='text-[28px] font-semibold mb-5'>Category</h2>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Financial Consulting</h3>
                  <FaLongArrowAltRight />
                </button>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Business Strategy</h3>
                  <FaLongArrowAltRight />
                </button>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Marketing Strategy</h3>
                  <FaLongArrowAltRight />
                </button>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Product Engineering</h3>
                  <FaLongArrowAltRight />
                </button>
                <button className="bg-white mb-4 flex items-center justify-between px-4 py-4 w-full hover:bg-primary hover:text-white transition-all duration-700">
                  <h3 className='text-[17px] font-bold'>Strategy Innovition</h3>
                  <FaLongArrowAltRight />
                </button>
              </div>
              <div className="bg-[#f2f2f2] p-8 mb-7">
                <h2 className='text-[28px] font-semibold mb-5'>Recent News</h2>
                <div className=" mb-5">
                  <div className="w-full mb-3">
                    <img className='w-full' src="/images/recentBlog-1.png" alt="" />
                  </div>
                  <div className="">
                    <h4 className='text-[14px] font-semibold'>Sint occaecat cupidatat non proident, sunt in culpa qul officia</h4>
                  </div>
                </div>
                <div className=" mb-5">
                  <div className="w-full mb-3">
                    <img className='w-full' src="/images/recentBlog-2.png" alt="" />
                  </div>
                  <div className="">
                    <h4 className='text-[14px] font-semibold'>Sint occaecat cupidatat non proident, sunt in culpa qul officia</h4>
                  </div>
                </div>
                <div className=" mb-5">
                  <div className="w-full mb-3">
                    <img className='w-full' src="/images/recentBlog-3.png" alt="" />
                  </div>
                  <div className="">
                    <h4 className='text-[14px] font-semibold'>Sint occaecat cupidatat non proident, sunt in culpa qul officia</h4>
                  </div>
                </div>
              </div>
              <div className="bg-[url(https://i.ibb.co/4ZnMfNp/blogBG.png)] bg-[100%_100%] mb-7 text-center py-24 px-11">
                <h3 className='xl:text-[48px] text-[36px] font-medium text-white'>Have Any Query?</h3>
                <p className="text-[15px] my-7 text-white">
                  Great fruit grass their are first over spirit good whose very subdue
                </p>
                <button className='btn btn-primary capitalize rounded-full text-white text-[15px] font-semibold px-10 mt-7'>Send Message</button>
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

export default OurBlogDetails;