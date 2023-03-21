import React from 'react';
import { RxExit } from 'react-icons/rx';
import './AboutTwo.css';

const AboutTwo = () => {
  return (
    <div className='bg-[url(https://i.ibb.co/6rwJyvw/BG.png)] bg-no-repeat bg-cover bg-center'>
      <div className="container py-24">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-center">
          <div className="relative">
            <div className="">
              <img className='min-w-[92%]' src="/images/about-2.png" alt="" srcset="" />
            </div>
            <div className="">
              <div className="bg-primary py-[47px] px-9 block absolute bottom-0 right-0">
                <h2 className='text-[40px] font-bold text-white'>12k <sup>+</sup> <br /> Projects <br /> Complete </h2>
              </div>
              <div className="bg-primary py-[47px] px-9 block absolute top-0 right-0">
                <h2 className='text-[25px] font-semibold text-white'>10<sup>+</sup> Year <br /> Experience </h2>
              </div>
            </div>
          </div>
          <div className="md:ml-16">
            <div className="flex items-center gap-2">
              <h4 className='text-[22px] font-semibold text-primary'>About Us</h4>
              <div className='w-10 h-[2px] bg-primary'></div>
            </div>
            <h3 className='text-[50px] font-bold'>We are more than you
              imagine</h3>
            
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-14 mt-12">
              <div className="">
                <div className="">
                  <img src="/images/icon-6.png" alt="" srcset="" />
                </div>
                <h3 className='text-[22px] font-semibold mt-4 mb-2'>Brand Solution</h3>
                <p className='text-[15px]'>
                  Multiply moved in also real after fish males beast doesn give
                </p>
              </div>
              <div className="">
                <div className="">
                  <img src="/images/icon-7.png" alt="" srcset="" />
                </div>
                <h3 className='text-[22px] font-semibold mt-4 mb-2'>Our Mission</h3>
                <p className='text-[15px]'>
                  Multiply moved in also real after fish males beast doesn give
                </p>
              </div>
            </div>
            <p className='text-[15px] mt-6 mb-10'>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qofficia mollianim
              id est laborum. Sed ut perspiciatis unde omnis iste natuvoluptateaccusantium
              Nemo enim ipsam voluptatem 
            </p>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
              <div className="block">
                <div className="border-black rounded border-2 border-dashed p-5 flex justify-between items-center">
                  <h2 className='text-[50px] font-medium text-black'>10<sup>+</sup> <br /> </h2>
                  <h3 className='text-[20px] font-medium'>Years Of <br /> Experience </h3>
                </div>
              </div>
              <div className="block">
                <div className="border-black rounded border-2 border-dashed p-5 flex justify-between items-center">
                  <h2 className='text-[50px] font-medium text-black'>70<sup>k</sup> <br /> </h2>
                  <h3 className='text-[20px] font-medium'>Clients <br /> Individual </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container lg:w-[70%]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-7">
          <div className="">
            <div className="homeTow-service-card bg-white hover:bg-primary transition-all duration-700 p-14 border shadow">
              <div className="flex justify-center mb-7">
                <img className='icon-w' src="/images/iconW-8.png" alt="" srcset="" />
                <img className='icon-n' src="/images/icon-8.png" alt="" srcset="" />
              </div>
              <p className='text-[18px] text-center font-semibold'>We Experience <br /> Build</p>
            </div>
           </div>
          <div className="">
            <div className="homeTow-service-card bg-white hover:bg-primary transition-all duration-700 p-14 border shadow">
              <div className="flex justify-center mb-7">
                <img className='icon-w' src="/images/iconW-9.png" alt="" srcset="" />
                <img className='icon-n' src="/images/icon-9.png" alt="" srcset="" />
              </div>
              <p className='text-[18px] text-center font-semibold'>Highest Success Rates</p>
            </div>
           </div>
          <div className="">
            <div className="homeTow-service-card bg-white hover:bg-primary transition-all duration-700 p-14 border shadow">
              <div className="flex justify-center mb-7">
                <img className='icon-w' src="/images/iconW-10.png" alt="" srcset="" />
                <img className='icon-n' src="/images/icon-10.png" alt="" srcset="" />
              </div>
              <p className='text-[18px] text-center font-semibold'>Branding Strengh Solution </p>
            </div>
           </div>
          <div className="">
            <div className="homeTow-service-card bg-white hover:bg-primary transition-all duration-700 p-14 border shadow">
              <div className="flex justify-center mb-7">
                <img className='icon-w' src="/images/iconW-11.png" alt="" srcset="" />
                <img className='icon-n' src="/images/icon-11.png" alt="" srcset="" />
              </div>
              <p className='text-[18px] text-center font-semibold'>Personal & Business Insurance</p>
            </div>
           </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutTwo;