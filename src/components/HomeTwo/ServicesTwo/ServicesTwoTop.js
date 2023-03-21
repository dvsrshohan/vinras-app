import React from 'react';

const ServicesTwoTop = () => {
  return (
    <div className='container lg:w-[90%]'>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center gap-7">
        <div className=" md:mt-[-50%]">
          <div className="homeTow-service-card bg-white hover:bg-primary transition-all duration-700 p-14 border shadow">
            <div className="flex justify-center mb-7">
              <img className='icon-w' src="/images/iconW-8.png" alt="" srcset="" />
              <img className='icon-n' src="/images/icon-8.png" alt="" srcset="" />
            </div>
            <p className='text-[18px] text-center font-semibold'>We Experience <br /> Build</p>
          </div>
        </div>
        <div className="  md:mt-[-50%]">
          <div className="homeTow-service-card bg-white hover:bg-primary transition-all duration-700 p-14 border shadow">
            <div className="flex justify-center mb-7">
              <img className='icon-w' src="/images/iconW-9.png" alt="" srcset="" />
              <img className='icon-n' src="/images/icon-9.png" alt="" srcset="" />
            </div>
            <p className='text-[18px] text-center font-semibold'>Highest Success Rates</p>
          </div>
        </div>
        <div className="  md:mt-[-50%]">
          <div className="homeTow-service-card bg-white hover:bg-primary transition-all duration-700 p-14 border shadow">
            <div className="flex justify-center mb-7">
              <img className='icon-w' src="/images/iconW-10.png" alt="" srcset="" />
              <img className='icon-n' src="/images/icon-10.png" alt="" srcset="" />
            </div>
            <p className='text-[18px] text-center font-semibold'>Branding Strengh Solution </p>
          </div>
        </div>
        <div className="  md:mt-[-50%]">
          <div className="homeTow-service-card bg-white hover:bg-primary transition-all duration-700 p-14 border shadow">
            <div className="flex justify-center mb-7">
              <img className='icon-w' src="/images/iconW-11.png" alt="" srcset="" />
              <img className='icon-n' src="/images/icon-11.png" alt="" srcset="" />
            </div>
            <p className='text-[18px] text-center font-semibold'>Personal & Business Insurance</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwoTop;