import React from 'react';
import { } from 'react-icons/fa';
import { RxExit } from 'react-icons/rx';

const ServicesTwo = () => {
  return (
    <div className='bg-[url(https://i.ibb.co/1vqrgfY/Layer-76.png)] bg-no-repeat bg-cover bg-[#fafafa] my-24'>
      <div className="container">
        <div className="container lg:w-[90%]">
          <div className="py-24">
            <div className="text-center">
              <div className="flex items-center gap-2 justify-center">
                <div className='w-10 h-[2px] bg-primary'></div>
                <h4 className='text-[22px] font-semibold text-primary'>Our Services</h4>
                <div className='w-10 h-[2px] bg-primary'></div>
              </div>
              <h2 className='xl:text-[50px] text-[33px] font-bold text-[#1a1a1a]'>Our Popular Service</h2>
            </div>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 my-16 gap-5">
              <div className="">
                <div className="card bg-base-100 shadow-xl">
                  <figure><img className='w-full' src="/images/blog-1.png" alt="Shoes" /></figure>
                  <div className="card-body">
                    <div className="flex items-end justify-between mt-[-17%]">
                      <p className='text-[#878c8f] text-[14px]'>Creative, Designs, Business</p>
                      <div className="bg-primary text-white rounded-t"><h2 className='p-4 text-3xl font-bold text-center'><RxExit /></h2></div>
                    </div>
                    <div className="flex items-end gap-[30px]">
                      <div className="">
                        <h3 className='text-[22px] font-bold'>Product Engineering</h3>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qoffic </p>
                      </div>
                      <div className="bg-[#f3f3f4] p-4 rounded">
                        <img className='w-[60px] h-[40px]' src="/images/icon-12.png" alt="" srcset="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="">
                <div className="card bg-base-100 shadow-xl">
                  <figure><img className='w-full' src="/images/blog-2.png" alt="Shoes" /></figure>
                  <div className="card-body">
                    <div className="flex items-end justify-between mt-[-17%]">
                      <p className='text-[#878c8f] text-[14px]'>Creative, Designs, Business</p>
                      <div className="bg-primary text-white rounded-t"><h2 className='p-4 text-3xl font-bold text-center'><RxExit /></h2></div>
                    </div>
                    <div className="flex items-end gap-[30px]">
                      <div className="">
                        <h3 className='text-[22px] font-bold'>Marketing Solution</h3>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qoffic </p>
                      </div>
                      <div className="bg-[#f3f3f4] p-4 rounded">
                        <img className='w-[60px] h-[40px]' src="/images/icon-13.png" alt="" srcset="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="">
                <div className="card bg-base-100 shadow-xl">
                  <figure><img className='w-full' src="/images/blog-3.png" alt="Shoes" /></figure>
                  <div className="card-body">
                    <div className="flex items-end justify-between mt-[-17%]">
                      <p className='text-[#878c8f] text-[14px]'>Creative, Designs, Business</p>
                      <div className="bg-primary text-white rounded-t"><h2 className='p-4 text-3xl font-bold text-center'><RxExit /></h2></div>
                    </div>
                    <div className="flex items-end gap-[30px]">
                      <div className="">
                        <h3 className='text-[22px] font-bold'>Web Development</h3>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qoffic </p>
                      </div>
                      <div className="bg-[#f3f3f4] p-4 rounded">
                        <img className='w-[60px] h-[40px]' src="/images/icon-14.png" alt="" srcset="" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesTwo;