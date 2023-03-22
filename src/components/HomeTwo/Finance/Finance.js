import React from "react";
import { CgArrowLongRight } from "react-icons/cg";
import Slider from "react-slick";
import "./Finance.css";

const Finance = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="finance-wrapper overflow-hidden">
      <div className="mt-12 finance">
        {/* {/ finance content /} */}
        <div className="finance-content-box flex items-center justify-center">
          <div className="m-4 max-w-[60%] mx-auto finance-content">
            {/* {/ <img src="../images / finance / 01_Home.jpg" alt="" /> /} */}

            <Slider {...settings}>
              <div>
                <dir style={{paddingLeft:"0"}}>
                  <img src="https://i.ibb.co/jZYCC5s/01-Home.jpg" alt="" />
                </dir>
              </div>
              <div className="w-full">
                <dir className="w-full">
                  <img className="w-full" src="https://i.ibb.co/10xYDvS/03-Home.jpg" alt="" />
                </dir>
              </div>
              <div>
                <dir>
                  <img src="https://i.ibb.co/G0DScWW/02-Home.jpg" alt="" />
                </dir>
              </div>
            </Slider>

            {/* {/ finance article /} */}
            <div className="finance-article-wrap flex items-center justify-between gap-7">
              <article className="finance-article grow">
                <h5 className="text-sm font-light uppercase">
                  Business, finance
                </h5>
                <h3 className="text-2xl font-semibold">Finance Consulting</h3>
                <p className="text-white text-[13px] mt-2">
                  Suspendisse finibus urna mauris, vitae quam vel. <br />{" "}
                  Vestibulum leo ligula, ed luctus.
                </p>
              </article>

              {/* {/ array /} */}
              <div className="grow-0 ml-20 cursor-pointer">
                <span className="w-12 h-12 rounded-full border-gray-200 border text-7xl flex items-center justify-center relative">
                  <CgArrowLongRight className="absolute left-[-35px]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;