import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <div className='bg-primary py-24'>
      <div className="container">
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-7">
          <div className="bg-white rounded shadow text-center p-7">
            <div className="flex justify-center">
              <img src="/images/counter1.png" alt="" srcset="" />
            </div>
            <p className='py-5 font-semibold'>Complete Project</p>
            <h2 className='text-primary text-[40px] font-bold'><CountUp end={5684} enableScrollSpy/></h2>
          </div>
          <div className="bg-white rounded shadow text-center p-7">
            <div className="flex justify-center">
              <img src="/images/counter2.png" alt="" srcset="" />
            </div>
            <p className='py-5 font-semibold'>Total Download</p>
            <h2 className='text-primary text-[40px] font-bold'><CountUp start={0} end={5684} enableScrollSpy /></h2>
          </div>
          <div className="bg-white rounded shadow text-center p-7">
            <div className="flex justify-center">
              <img src="/images/counter3.png" alt="" srcset="" />
            </div>
            <p className='py-5 font-semibold'>Positive Review</p>
            <h2 className='text-primary text-[40px] font-bold'><CountUp start={0} end={5684} enableScrollSpy /></h2>
          </div>
          <div className="bg-white rounded shadow text-center p-7">
            <div className="flex justify-center">
              <img src="/images/counter4.png" alt="" srcset="" />
            </div>
            <p className='py-5 font-semibold'>Team Members</p>
            <h2 className='text-primary text-[40px] font-bold'><CountUp start={0} end={5684} enableScrollSpy /></h2>
          </div>
          <div className="bg-white rounded shadow text-center p-7">
            <div className="flex justify-center">
              <img src="/images/counter5.png" alt="" srcset="" />
            </div>
            <p className='py-5 font-semibold'>Cup Of Coffee</p>
            <h2 className='text-primary text-[40px] font-bold'><CountUp start={0} end={5684} enableScrollSpy /></h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;