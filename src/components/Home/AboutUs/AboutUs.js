import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaCheck } from "react-icons/fa";
import { HiOutlinePlay } from "react-icons/hi2";
import ModalVideo from 'react-modal-video';
import './AboutUs.css';

const AboutUs = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  return (
    <div className='bg-[url(https://i.ibb.co/sbRJg5R/BG.png)] bg-right bg-cover bg-no-repeat'>

      <React.Fragment>
        <ModalVideo channel='youtube' autoplay isOpen={isVideoOpen} videoId="6TaVPRcpOts" onClose={() => setVideoOpen(false)} />
      </React.Fragment>

      <div className="container">
        <div className="my-24">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-14">
            <div className="w-full">
              <div className="images-area relative">
                {/* {/ shape /} */}
                <div className="about-shape-wrap">
                  <img src="/images/aboutUsBG.png" alt="" className="w-full" />
                  {/* {/ <div className="about-shape"></div > /} */}
                </div>

                {/* {/ badge /} */}
                <div className="about-badge">
                  <div className="badge-child">
                    <p className='lg:text-[18px] text-[16px] font-medium'>Trusted by</p>
                    <h2>5820</h2>
                  </div>
                </div>

                {/* {/ media icon /} */}
                <div
                  className="absolute md:top-[40%] top-[35%] md:right-[36%] right-[46%] "
                  style={{ transform: "translate(-50%)" }}
                >
                  <div className="about-media-play-wrap">
                    <div className="about-media-play"></div>
                  </div>
                  <div className="">

                    <div onClick={() => setVideoOpen(true)} className="about-media-icon-wrap about-media-icon flex items-center justify-center">
                      <HiOutlinePlay className="about-icon text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <h4 className='text-[22px] font-semibold text-primary'>About Us</h4>
                <div className='w-10 h-[2px] bg-primary'></div>
              </div>
              <h3 className='xl:text-[50px] text-[33px] font-bold'>We are good at these <br /> areas to work</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit
              </p>

              <ul>
                <li className='flex items-center gap-5 my-10'><FaCheck className='w-14 h-14 p-5 bg-white text-slate-400 rounded-full shadow' />
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis</p>
                </li>
                <li className='flex items-center gap-5'><FaCheck className='w-14 h-14 p-5 bg-white text-slate-400 rounded-full shadow' />
                  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nis</p>
                </li>
              </ul>

              <div className="md:flex items-center gap-10 mt-10">
                <div className="flex items-center gap-5 md:mb-0 mb-5">
                  <div style={{ width: 75, height: 75 }}>
                    <CircularProgressbar counterClockwise={true} value={76} text={`${76}%`} />
                  </div>
                  <p className='text-[18px] text-[#bcbec0] font-bold'>Business <br /> Consulting</p>
                </div>
                <div className="flex items-center gap-5">
                  <div style={{ width: 75, height: 75 }}>
                    <CircularProgressbar counterClockwise={true} value={76} text={`${76}%`} />
                  </div>
                  <p className='text-[18px] text-[#bcbec0] font-bold'>Business  <br /> Consulting</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;