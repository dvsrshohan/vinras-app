import React from 'react';

const Skills = () => {
  return (
    <div className='py-24'>
      <div className="container bg-[#fafafa] my-24 md:p-24">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-14">
          <div className="container">
            <div className="">
              <div className="mb-12">
                <div className="flex gap-2 items-center">
                  <h4 className='text-[22px] font-semibold text-primary'>Company Skills</h4>
                  <div className='w-10 h-[2px] bg-primary'></div>
                </div>
                <h2 className='text-[50px] font-bold text-[#1a1a1a]'>Exclusive Work Skill</h2>
              </div>
              <div className="">
                <div className="mb-6">
                  <div className="w-[80%] flex justify-between mb-2">
                       <h3 className='text-[16px] font-bold'>Web Design</h3>
                       <h3 className='text-[16px] font-bold'>80%</h3>
                  </div>
                  <div className="bg-[#fefefe] w-full rounded-[20px] h-4 block shadow">
                    <div className="bg-primary w-[80%] rounded-[20px] h-4 block"></div>
                  </div>
                </div>
                <div className="mb-6">
                  <div className="w-[58%] flex justify-between mb-2">
                       <h3 className='text-[16px] font-bold'>Web Development</h3>
                       <h3 className='text-[16px] font-bold'>48%</h3>
                  </div>
                  <div className="bg-[#fefefe] w-full rounded-[20px] h-4 block shadow">
                    <div className="bg-primary w-[58%] rounded-[20px] h-4 block"></div>
                  </div>
                </div>
                <div className="">
                  <div className="w-[38%] flex justify-between mb-2">
                       <h3 className='text-[16px] font-bold'>Web application</h3>
                       <h3 className='text-[16px] font-bold'>28%</h3>
                  </div>
                  <div className="bg-[#fefefe] w-full rounded-[20px] h-4 block shadow">
                    <div className="bg-primary w-[38%] rounded-[20px] h-4 block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-[-35%] md:mr-[-15%]">
            <img className=' w-full' src="/images/skill-1.png" alt="" srcset="" />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-11 items-center mt-24 justify-between">
          <div className="flex items-center gap-7">
            <div className="bg-primary h-[125px] w-[125px] flex items-center justify-center">
              <img src="/images/icon-15.png" alt="" srcset="" />
            </div>
            <div className="">
              <h2 className='text-[40px] font-bold'>20<sup>k</sup></h2>
              <p className='text-[18px] font-semibold'>Completed Cases</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="bg-primary h-[125px] w-[125px] flex items-center justify-center">
              <img src="/images/icon-20.png" alt="" srcset="" />
            </div>
            <div className="">
              <h2 className='text-[40px] font-bold'>10<sup>k</sup></h2>
              <p className='text-[18px] font-semibold'>Satisfied Customers</p>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="bg-primary h-[125px] w-[125px] flex items-center justify-center">
              <img src="/images/icon-21.png" alt="" srcset="" />
            </div>
            <div className="">
              <h2 className='text-[40px] font-bold'>18<sup>k</sup></h2>
              <p className='text-[18px] font-semibold'>Expert Consultant</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;