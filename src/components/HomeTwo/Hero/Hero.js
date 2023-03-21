import React from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";


const Hero = () => {
  return (
    <div>
      <div className="h-[100vh] flex items-end" style={{
        backgroundImage: `linear-gradient(rgb(3 3 3 / 51%),rgb(3 3 3 / 51%)),url(${"https://i.ibb.co/zXDLDf2/bgbg.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="container my-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="">
              <div className="text-[30px] font-medium text-white">
                <span>Technology </span> <span>|</span> <span> Business  </span> <span> | </span> <span>Consultan</span>
              </div>
              <h2 className='2xl:text-[90px] text-[60px] font-bold text-white '>Best Grow Your Business</h2>
              <p className="text-[30px] font-semibold text-white">Our  Best Business Technology Consulting</p>
              <button className='btn btn-primary capitalize rounded-[39px] py-5 h-auto px-5 mt-14'>Free Consultation <FaAngleDoubleRight /></button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;