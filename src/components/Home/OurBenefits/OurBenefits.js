import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

const OurBenefits = () => {
  return (
    <div className='bg-[#f7f7f7] py-24 my-24 relative'>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
          <div className="">
            <div className="flex items-center gap-2">
              <h4 className='text-[22px] font-semibold text-primary'>Our Benefits</h4>
              <div className='w-10 h-[2px] bg-primary'></div>
            </div>
            <h2 className='xl:text-[50px] text-[33px] font-bold'>Success Building Experience</h2>

            <div className="md:flex mt-16 gap-16 items-center">
              <div className="">
                <div className="">
                  <div className="text-center">
                    <div className='mx-auto mb-5' style={{ width: 75, height: 75 }}>
                      <CircularProgressbar counterClockwise={true} value={95} strokeWidth={5} text={`${95}%`} />
                    </div>
                    <p className='text-[18px] text-black font-bold'>Affordable <br /> Cost</p>
                  </div>

                  <hr className='my-7' />

                  <div className="text-center">
                    <div className='mx-auto mb-5' style={{ width: 75, height: 75 }}>
                      <CircularProgressbar counterClockwise={true} value={52} strokeWidth={5} text={`${52}%`} />
                    </div>
                    <p className='text-[18px] text-black font-bold'>Quality <br /> of Work</p>
                  </div>
                </div>
              </div>

              <div className="">
                <div tabIndex={0} className="collapse collapse-arrow bg-white rounded-box mb-5">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-[18px] font-bold">
                    Think Ahead And Boost Your Business?
                  </div>
                  <div className="collapse-content border-t-[1px]">
                    <p className='text-[18px] p-10'>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                  </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-white rounded-box mb-5">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-[18px] font-bold">
                    Maecenas condimentum sollicitudin ligula,
                  </div>
                  <div className="collapse-content border-t-[1px]">
                    <p className='text-[18px] p-10'>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                  </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow bg-white rounded-box mb-5">
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title text-[18px] font-bold">
                    What Is The Best Advice For Growth?
                  </div>
                  <div className="collapse-content border-t-[1px]">
                    <p className='text-[18px] p-10'>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" ">
            <div className="w-full">
              <img className='lg:absolute right-0 2xl:top-[-20%] top-[-10%] 2xl:w-1/4 lg:w-1/2 w-full' src="/images/benefits.png" alt="" srcset="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBenefits;