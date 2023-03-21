import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialTwo = () => {
  return (
    <div className='bg-[url(https://i.ibb.co/Pr2sxy4/BG.png)] pt-32 pb-24'>
      <div className="container">
        <div className="text-center my-9">
          <div className="flex items-center justify-center gap-2">
            <div className='w-10 h-[2px] bg-primary'></div>
            <h4 className='text-[22px] font-semibold text-primary'>Testimonial </h4>
            <div className='w-10 h-[2px] bg-primary'></div>
          </div>
          <h3 className='text-[50px] font-bold'>What Saying Our Client </h3>
        </div>

        <Swiper
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 2,
            },
            1024: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 500,
            disableOnInteraction: false
          }} className="mySwiper">
            <SwiperSlide>
              <div className="">
                <div className="bg-contain max-h-[100vh] bg-[100%_100%] bg-no-repeat bg-[url(https://i.ibb.co/m4kFpvg/BG.png)] px-7  py-14" style={{ backgroundSize: '100% 100%' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaRegStar className='text-primary' />
                  </div>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident
                  </p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="">
                      <img src="/images/user-4.png" alt="" />
                    </div>
                    <div className="">
                      <h3 className='text-[22px] font-semibold'>Jhon  Smith</h3>
                      <p className='text-[14px] text-[#979b9e]'>Founder, Seo</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <div className="bg-contain max-h-[100vh] bg-[100%_100%] bg-no-repeat bg-[url(https://i.ibb.co/m4kFpvg/BG.png)] px-7  py-14" style={{ backgroundSize: '100% 100%' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaRegStar className='text-primary' />
                  </div>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident
                  </p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="">
                      <img src="/images/user-5.png" alt="" />
                    </div>
                    <div className="">
                      <h3 className='text-[22px] font-semibold'>Jhon  Smith</h3>
                      <p className='text-[14px] text-[#979b9e]'>Founder, Seo</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <div className="bg-contain max-h-[100vh] bg-[100%_100%] bg-no-repeat bg-[url(https://i.ibb.co/m4kFpvg/BG.png)] px-7  py-14" style={{ backgroundSize: '100% 100%' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaRegStar className='text-primary' />
                  </div>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident
                  </p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="">
                      <img src="/images/user-6.png" alt="" />
                    </div>
                    <div className="">
                      <h3 className='text-[22px] font-semibold'>Jhon  Smith</h3>
                      <p className='text-[14px] text-[#979b9e]'>Founder, Seo</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <div className="bg-contain max-h-[100vh] bg-[100%_100%] bg-no-repeat bg-[url(https://i.ibb.co/m4kFpvg/BG.png)] px-7  py-14" style={{ backgroundSize: '100% 100%' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaRegStar className='text-primary' />
                  </div>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident
                  </p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="">
                      <img src="/images/user-4.png" alt="" />
                    </div>
                    <div className="">
                      <h3 className='text-[22px] font-semibold'>Jhon  Smith</h3>
                      <p className='text-[14px] text-[#979b9e]'>Founder, Seo</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <div className="bg-contain max-h-[100vh] bg-[100%_100%] bg-no-repeat bg-[url(https://i.ibb.co/m4kFpvg/BG.png)] px-7  py-14" style={{ backgroundSize: '100% 100%' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaRegStar className='text-primary' />
                  </div>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident
                  </p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="">
                      <img src="/images/user-5.png" alt="" />
                    </div>
                    <div className="">
                      <h3 className='text-[22px] font-semibold'>Jhon  Smith</h3>
                      <p className='text-[14px] text-[#979b9e]'>Founder, Seo</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <div className="bg-contain max-h-[100vh] bg-[100%_100%] bg-no-repeat bg-[url(https://i.ibb.co/m4kFpvg/BG.png)] px-7  py-14" style={{ backgroundSize: '100% 100%' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaStar className='text-primary' />
                    <FaRegStar className='text-primary' />
                  </div>
                  <p>
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrupidatat exercitation ullamco laboris nisi a ut aliquip ex ea commodo a consequat. reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat non proident
                  </p>
                  <div className="flex items-center gap-6 mt-4">
                    <div className="">
                      <img src="/images/user-6.png" alt="" />
                    </div>
                    <div className="">
                      <h3 className='text-[22px] font-semibold'>Jhon  Smith</h3>
                      <p className='text-[14px] text-[#979b9e]'>Founder, Seo</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
      </div>
    </div>
  );
};

export default TestimonialTwo;