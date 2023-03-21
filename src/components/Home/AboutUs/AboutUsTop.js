import React from 'react';
import './AboutUs.css'

const AboutUsTop = () => {
  return (
    <div className='container'>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
        <div className="home-about-card flex items-center justify-center shadow-md p-[38px] text-center transition-all duration-300 bg-white hover:bg-primary">
          <div className="">
            <div className="about-icon mx-auto bg-white shadow flex items-center justify-center">
              <img className='icon-1' src="/images/aboutIcon1.png" alt="" srcset="" />
              <img className='icon-2' src="/images/aboutIconW1.png" alt="" srcset="" />
            </div>
            <h3 className='text-[30px] font-bold text-center'>Ui/Ux Design</h3>
          </div>
        </div>
        <div className="home-about-card flex items-center justify-center shadow-md p-[38px] text-center transition-all duration-300 bg-white hover:bg-primary">
          <div className="">
            <div className="about-icon mx-auto bg-white shadow flex items-center justify-center">
              <img className='icon-1' src="/images/aboutIcon2.png" alt="" srcset="" />
              <img className='icon-2' src="/images/aboutIconW2.png" alt="" srcset="" />
            </div>
            <h3 className='text-[30px] font-bold text-center'>Committed Quality</h3>
          </div>
        </div>
        <div className="home-about-card flex items-center justify-center shadow-md p-[38px] text-center transition-all duration-300 bg-white hover:bg-primary">
          <div className="">
            <div className="about-icon mx-auto bg-white shadow flex items-center justify-center">
              <img className='icon-1' src="/images/aboutIcon3.png" alt="" srcset="" />
              <img className='icon-2' src="/images/aboutIconW3.png" alt="" srcset="" />
            </div>
            <h3 className='text-[30px] font-bold text-center'>Tax Consulting</h3>
          </div>
        </div>
        <div className="home-about-card flex items-center justify-center shadow-md p-[38px] text-center transition-all duration-300 bg-white hover:bg-primary">
          <div className="">
            <div className="about-icon mx-auto bg-white shadow flex items-center justify-center">
              <img className='icon-1' src="/images/aboutIcon4.png" alt="" srcset="" />
              <img className='icon-2' src="/images/aboutIconW4.png" alt="" srcset="" />
            </div>
            <h3 className='text-[30px] font-bold text-center'>Tax Strategy</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTop;