import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";
import './BusniessDiscussion.css'

const BusniessDiscussion = () => {
  return (
    <div className='mt-[80px]'>
      <div className="container text-center mb-[20%]">
        <h2 className='text-[50px] font-bold'>Live Our Busniess Discussion</h2>
        <p className='font-medium'>Ut enim ad minim veniam, quis nostrud</p>
      </div>


      <div className="bg-[#f7f7f7] py-[250px]">
        <div className="container">
          <div className="relative">
            <div className=" top-[-100px]  left-[15%] mx-auto">
              <img className='w-full mt-[-35%]' src="/images/homeBusnies.png" alt="" srcset="" />
            </div>
          </div>
          <div className="mt-24">
            <div className="flex items-end justify-between mb-14">
              <div className="">
                <div className="flex items-center gap-2">
                  <h4 className='text-[22px] font-semibold text-primary'>How Can Help You</h4>
                  <div className='w-10 h-[2px] bg-primary'></div>
                </div>
                <h2 className='text-[50px] font-bold mt-9'>We Make Bright Agency</h2>
              </div>
              <div className="flex items-center gap-5">
                <div className="bg-white hover:bg-primary text-primary hover:text-white p-4 cursor-pointer transition-all duration-300 shadow">
                  <FaAngleDoubleLeft />
                </div>
                <div className="bg-white hover:bg-primary text-primary hover:text-white p-4 cursor-pointer transition-all duration-300 shadow">
                  <FaAngleDoubleRight />
                </div>
              </div>
            </div>
            <Swiper
              loop={true}
              autoplay={{
                delay: 500,
                disableOnInteraction: false
              }}
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              navigation={
                {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }
              }
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="bg-white shadow p-14">
                  <div className="mb-9">
                    <img src="/images/productIcons.png" alt="" srcset="" />
                  </div>
                  <div className="">
                    <h3 className='text-[24px] font-medium mb-6'><strong>Product Engineering</strong></h3>
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
                    <h3 className='text-[24px] font-medium mb-6'><strong>Product Engineering</strong></h3>
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
                    <h3 className='text-[24px] font-medium mb-6'><strong>Product Engineering</strong></h3>
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
                    <h3 className='text-[24px] font-medium mb-6'><strong>Product Engineering</strong></h3>
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