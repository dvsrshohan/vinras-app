import React from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";
import Slider from "react-slick";
import './Case.css';

const Case = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <div className="container md:flex items-center justify-between">
        <div className=" mb-9 mt-7">
          <div className="flex justify-start items-center gap-x-2">
            <div className='w-10 h-[2px] bg-primary'></div>
            <h4 className='text-[22px] font-semibold text-primary'>Our case</h4>
            <div className='w-10 h-[2px] bg-primary'></div>
          </div>
          <h3 className='text-[50px] font-bold'>Amazing Work Showcase</h3>
        </div>
        <div className="my-4 md:mt-0">
          <button className="flex justify-between items-center py-4 px-7 bg-[#F94D1C] text-white rounded-full mt-7">
            Free Consultation <TfiAngleDoubleRight className="ml-4" />
          </button>
        </div>
      </div>
      {/* {/ case container /} */}
      <div className="finance-wrapper overflow-hidden mb-20">
        <div className="mt-12 finance">
          {/* {/ finance content /} */}
          <div className="finance-content-box flex items-center justify-center">
            <div className="m max-w-[60%] mx-auto finance-content">
              {/* {/ <img src="../images / finance / 01_Home.jpg" alt="" /> /} */}

              <Slider {...settings}>
                <div className="w-full" >
                  <dir className="w-full" style={{paddingLeft:"0"}}>
                    <img className="w-full" src="https://i.ibb.co/jZYCC5s/01-Home.jpg" alt="" />
                  </dir>
                </div>
                {/* <div>
                  <dir>
                    <img src="https://i.ibb.co/10xYDvS/03-Home.jpg" alt="" />
                  </dir>
                </div>
                <div>
                  <dir>
                    <img src="https://i.ibb.co/G0DScWW/02-Home.jpg" alt="" />
                  </dir>
                </div> */}
              </Slider>

              {/* {/ finance article /} */}
              <div
                className="bg-white p-4 shadow-lg absolute bottom-[-100px] flex items-center justify-between gap-7 max-w-[60%] mx-auto right-1/2 z-10 my-20"
                style={{ transform: "translateX(50%)" }}
              >
                <div>
                  <h4 className="text-xl font-semibold">Business Growth</h4>
                  <p>Forestry Innovation</p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#F94D1C] text-white cursor-pointer">
                  <TfiAngleDoubleRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Case;