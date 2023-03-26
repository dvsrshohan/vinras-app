import React, { useRef } from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from 'react';
import { CgPlayButton } from 'react-icons/cg';
import ModalVideo from 'react-modal-video';
import { FreeMode, Pagination } from "swiper";
import './BusniessDiscussion.css';

const BusniessDiscussion = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='mt-[80px]'>
      <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="6TaVPRcpOts" onClose={() => setOpen(false)} />
      </React.Fragment>
      <div className="container text-center mb-[20%]">
        <h2 className='xl:text-[50px] text-[33px] font-bold'>Live Our Busniess Discussion</h2>
        <p className='font-medium'>Ut enim ad minim veniam, quis nostrud</p>
      </div>


      <div className="bg-[#f7f7f7] md:py-[250px] md:mb-[150px] relative">
        <div className="container">
          <div className=" md:absolute md:-top-[10%] -top-[2%]">
            <div className="relative">
              <div className="live-dis-content">
                {/* banner area */}
                <div className="live-dis-banner relative overflow-hidden">
                  <img className='w-full' src="https://i.ibb.co/17ZFVCy/Layer-81.png" alt="" />

                  {/* video shape */}
                  <div className="video-shape">
                    <div className="video-border md:w-16 w-10 md:h-16 h-10 flex justify-center items-center rounded-full border border-gray-200 m-4">

                      <span onClick={() => setOpen(true)} className="md:w-12 w-7 md:h-12 h-7 flex justify-center items-center rounded-full border border-gray-200 text-7xl text-orange-600  bg-white">
                        <CgPlayButton />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-[140px] mt-14">
            <div className="flex items-end justify-between mb-14 relative">
              <div className="">
                <div className="flex items-center gap-2">
                  <h4 className='text-[22px] font-semibold text-primary'>How Can Help You</h4>
                  <div className='w-10 h-[2px] bg-primary'></div>
                </div>
                <h2 className='xl:text-[50px] text-[33px] font-bold mt-9'>We Make Bright Agency</h2>

              </div>
              <div className="md:flex hidden items-center gap-5">
                <div onClick={() => useRef.current?.slidePrev()} className=" mr-4">
                  <FaAngleDoubleLeft className='swiper-button-next text-[26px] hover:bg-primary text-primary hover:text-white p-4 cursor-pointer transition-all duration-700 shadow ' />
                </div>
                <div onClick={() => useRef.current?.slideNext()} className="shadow">
                  <FaAngleDoubleRight className='swiper-button-prev hover:bg-primary text-primary hover:text-white p-4 cursor-pointer transition-all duration-700 shadow ' />
                </div>
              </div>
            </div>
            <Swiper
              loop={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false
              }}
              breakpoints={{
                576: {
                  // width: 576,
                  slidesPerView: 1,
                },
                768: {
                  // width: 768,
                  slidesPerView: 1,
                },
                992: {
                  // width: 768,
                  slidesPerView: 2,
                },
                1040: {
                  // width: 768,
                  slidesPerView: 3,
                },
                1280: {
                  // width: 768,
                  slidesPerView: 3,
                },
              }}
              spaceBetween={30}
              freeMode={true}
              navigation={
                {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }
              }
              onBeforeInit={(swiper) => { useRef.current = swiper; }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-white shadow p-14">
                  <div className="mb-9">
                    <img src="/images/productIcons.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h3 className='text-[24px] font-medium mb-6'><strong>Product Engineering 11</strong></h3>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.
                    </p>
                    <ul className='mt-6'>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Logo & Branding</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Website Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Mobile App Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Graphic/Print Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p> Video Production</p></li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow p-14">
                  <div className="mb-9">
                    <img src="/images/productIcons.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h3 className='text-[24px] font-medium mb-6'><strong>Product Engineering 22</strong></h3>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.
                    </p>
                    <ul className='mt-6'>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Logo & Branding</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Website Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Mobile App Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Graphic/Print Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p> Video Production</p></li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow p-14">
                  <div className="mb-9">
                    <img src="/images/productIcons.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h3 className='text-[24px] font-medium mb-6'><strong>Product Engineering 33</strong></h3>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.
                    </p>
                    <ul className='mt-6'>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Logo & Branding</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Website Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Mobile App Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Graphic/Print Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p> Video Production</p></li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="bg-white shadow p-14">
                  <div className="mb-9">
                    <img src="/images/productIcons.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h3 className='text-[24px] font-medium mb-6'><strong>Product Engineering 44</strong></h3>
                    <p>
                      Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed.
                    </p>
                    <ul className='mt-6'>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Logo & Branding</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Website Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Mobile App Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p>Graphic/Print Design</p></li>
                      <li className='flex items-center gap-3 font-medium mb-4'><FaAngleDoubleRight className='text-primary' /><p> Video Production</p></li>
                    </ul>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </div >
  );
};

export default BusniessDiscussion;