import React from 'react';
import { GoPlus } from "react-icons/go";
import StaticHero from '../../components/AboutUS/StaticHero';
import './portfolio.css';

const OurProtfolioTwo = () => {
  return (
    <div>

      <StaticHero title={"Our Portfolio"}/>

      <div className="container mt-12">
        <div>
          {/* {/ gallery /} */}
          <div>
            <div className="grid xs:grid-cols-1  sm:grid-cols-2  md:grid-cols-2  lg:grid-cols-2  xl:grid-cols-2 gap-7 items-start">
              <div className="row-span-3 mt-20">
                <div className="mt-7">
                  <div className=" mb-9">
                    <div className="flex items-center justify-start gap-2">
                      <h4 className='text-[22px] font-semibold text-primary'>Working Process</h4>
                      <div className='w-10 h-[2px] bg-primary'></div>
                    </div>
                    <h3 className='text-[50px] font-bold'>Our Work Showcase</h3>
                  </div>

                  <div
                    className="project-link mb-7"
                    style={{ borderLeft: "3px solid #f94d1c" }}
                  >
                    <span className="py-3 px-4 no-underline text-primary cursor-pointer hover:text-[rgb(249,77,28)] font-bold">
                      All
                    </span>
                    <span className="py-3 px-4 no-underline cursor-pointer hover:text-[#F94D1C] font-bold">
                      Web design
                    </span>
                    <span className="py-3 px-4 no-underline cursor-pointer hover:text-[#F94D1C] font-bold">
                      Branding
                    </span>
                    <span className="py-3 px-4 no-underline cursor-pointer hover:text-[#F94D1C] font-bold">
                      Photography
                    </span>
                  </div>
                </div>
                <div className="gallery-box">
                  <div className="gallery-items">
                    <img
                      src="https://i.ibb.co/YBWn5gx/gallery-1.png"
                      alt="gallery"
                      className="w-full max-w-full"
                    />
                    <span className="gallery-icon">
                      <GoPlus />
                    </span>
                  </div>
                </div>
              </div>

              <div className="gallery-box  row-span-2">
                <div className="gallery-items">
                  <img
                    src="https://i.ibb.co/MSY1Vsh/gallery-5.png"
                    alt="gallery"
                    className="w-full max-w-full"
                  />
                  <span className="gallery-icon">
                    <GoPlus />
                  </span>
                </div>
              </div>

              <div className="gallery-box">
                <div className="gallery-items">
                  <img
                    src="https://i.ibb.co/N90sQ13/gallery-4.png"
                    alt="gallery"
                    className="w-full max-w-full"
                  />
                  <span className="gallery-icon">
                    <GoPlus />
                  </span>
                </div>
              </div>

              <div className="gallery-box  row-span-2">
                <div className="gallery-items">
                  <img
                    src="https://i.ibb.co/y4gB2JR/gallery-2.png"
                    alt="gallery"
                    className="w-full max-w-full h-full max-h-full"
                  />
                  <span className="gallery-icon">
                    <GoPlus />
                  </span>
                </div>
              </div>

              <div className="gallery-box">
                <div className="gallery-items">
                  <img
                    src="https://i.ibb.co/3vG2Mjg/gallery-3.png"
                    alt="gallery"
                    className="w-full max-w-full"
                  />
                  <span className="gallery-icon">
                    <GoPlus />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProtfolioTwo;