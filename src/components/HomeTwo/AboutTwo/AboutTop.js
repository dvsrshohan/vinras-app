import React from 'react';
import { RxExit } from 'react-icons/rx';

const AboutTop = () => {
  return (
    <div>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="bg-[#fafafa] border py-[53px] px-[35px] shadow mt-[-15%]">
            <div className="flex items-center">
              <div className="mr-10">
                <img src="/images/icon-4.png" alt="" srcset="" />
              </div>
              <h2 className='text-[28px] font-bold'>Build Your Business With Right Way</h2>
              <div className="flex justify-end ml-14">
                <div className="w-[75px] h-[75px] bg-primary flex items-center justify-center text-white font-bold text-[30px]">
                  <RxExit />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#fafafa] border py-[53px] px-[35px] shadow md:mt-[-15%]">
            <div className="flex items-center">
              <div className="mr-10">
                <img src="/images/icon-5.png" alt="" srcset="" />
              </div>
              <h2 className='text-[28px] font-bold'>We Take Care  and Growth
                Your  Business </h2>
              <div className="flex justify-end ml-14">
                <div className="w-[75px] h-[75px] bg-primary flex items-center justify-center text-white font-bold text-[30px]">
                  <RxExit />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTop;