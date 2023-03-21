import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaCheck } from "react-icons/fa";
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className='bg-[url(https://i.ibb.co/sbRJg5R/BG.png)] bg-right bg-cover bg-no-repeat'>
      <div className="container">
        <div className="my-24">
          <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-14">
            <div className="">
              <img className='w-full' src="/images/aboutUs.png" alt="" srcset="" />
            </div>
            <div className="">
              <div className="flex items-center gap-2">
                <h4 className='text-[22px] font-semibold text-primary'>About Us</h4>
                <div className='w-10 h-[2px] bg-primary'></div>
              </div>
              <h3 className='text-[50px] font-bold'>We are good at these <br /> areas to work</h3>
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

              <div className="flex items-center gap-10 mt-10">
                <div className="flex items-center gap-5">
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