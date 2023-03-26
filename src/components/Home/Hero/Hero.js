import React from 'react';

const Hero = () => {
  return (
    <div className='bg-[url(https://i.ibb.co/hMtT5g0/HeroBG.png)] bg-no-repeat bg-cover bg-center overflow-x-hidden '>
      <div className="bg-[#00000023]">
        <div className="container">
          <div className="grid lg:grid-cols-2  grid-cols-1 items-center pb-7">
            <div className="">
              <div className="my-24">
                <h3 className='xl:text-[30px] text-[26px] font-semibold'>Welcome To Digital Startup Agency</h3>
                <h3 className='2xl:text-[90px] text-[60px] font-bold'>Digital Startup Agency</h3>
                <h3 className='xl:text-[30px] text-[26px] font-semibold'>Welcome To Digital Startup Agency</h3>
                <button className='btn btn-primary capitalize rounded-[39px] py-5 h-auto px-5 mt-14'>Free Consultation</button>
              </div>
            </div>
            <div className="mr-[-28%] lg:block hidden">
              <img src="/images/homeHero.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;