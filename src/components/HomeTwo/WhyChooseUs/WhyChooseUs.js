import React from 'react';
import './WhyChooseUs.css';


const WhyChooseUs = () => {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58179.07927616818!2d88.9087128470517!3d24.304921210069224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fc05841bd8113d%3A0xa924227abb380cce!2sBanshbaria%20Bazar!5e0!3m2!1sen!2sbd!4v1678770843818!5m2!1sen!2sbd"
  return (
    <div className='bg-[url(https://i.ibb.co/2t7SZvB/BG.png)] bg-no-repeat bg-cover bg-center py-24'>
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 mb-10">
          <div className="">
            <h2 className='xl:text-[50px] text-[33px] font-bold'>Client Choose Wisely</h2>
            <p className='text-primary text-[18px] font-medium'>Why Choose Us</p>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className="flex items-center gap-7">
              <div className="">
                <img src="/images/icon-31.png" alt="" srcset="" />
              </div>
              <div className="">
                <h2 className='text-[70px] font-normal'>28k</h2>
                <p className='font-medium'>Successfull Project</p>
              </div>
            </div>
            <div className="flex items-center gap-7">
              <div className="">
                <img src="/images/icon-32.png" alt="" srcset="" />
              </div>
              <div className="">
                <h2 className='text-[70px] font-normal'>10k</h2>
                <p className='font-medium'>Satisfied Work Membe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="container">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16">
            <div className="">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-[30px]">
                <div className="flex flex-col gap-7 items-end mt-9">
                  <div className="whyChoose-card shadow p-9 transition-all duration-700">
                    <div className="w-[75px] h-[75px] pt-2 pl-2  rounded-md bg-[#fee4dd]">
                      <div className="imgCard h-[75px] w-[75px] bg-primary rounded-md rounded-br-3xl flex items-center justify-center">
                        <img className='img1' src="/images/icon-27.png" alt="" srcset="" />
                        <img className='img2' src="/images/iconW-27.png" alt="" srcset="" />
                      </div>
                    </div>
                    <h3 className='text-[22px] font-semibold mb-6 mt-10'>Free Consulting</h3>
                    <p className='text-[17px]'>Excepteur sint a occaecat cupidatat non proident, sunt</p>
                  </div>
                  <div className="whyChoose-card shadow p-9 transition-all duration-700">
                    <div className="w-[75px] h-[75px] pt-2 pl-2  rounded-md bg-[#fee4dd]">
                      <div className="imgCard h-[75px] w-[75px] bg-primary rounded-md rounded-br-3xl flex items-center justify-center">
                        <img className='img1' src="/images/icon-29.png" alt="" srcset="" />
                        <img className='img2' src="/images/iconW-29.png" alt="" srcset="" />
                      </div>
                    </div>
                    <h3 className='text-[22px] font-semibold mb-6 mt-10'>Satisfied Services</h3>
                    <p className='text-[17px]'>Excepteur sint a occaecat cupidatat non proident, sunt</p>
                  </div>

                </div>
                <div className="flex flex-col gap-7 items-start mb-9">
                  <div className="whyChoose-card shadow p-9 transition-all duration-700">
                    <div className="w-[75px] h-[75px] pt-2 pl-2  rounded-md bg-[#fee4dd]">
                      <div className="imgCard h-[75px] w-[75px] bg-primary rounded-md rounded-br-3xl flex items-center justify-center">
                        <img className='img1' src="/images/icon-28.png" alt="" srcset="" />
                        <img className='img2' src="/images/iconW-28.png" alt="" srcset="" />
                      </div>
                    </div>
                    <h3 className='text-[22px] font-semibold mb-6 mt-10'>Expert Member</h3>
                    <p className='text-[17px]'>Excepteur sint a occaecat cupidatat non proident, sunt</p>
                  </div>
                  <div className="whyChoose-card shadow p-9 transition-all duration-700">
                    <div className="w-[75px] h-[75px] pt-2 pl-2  rounded-md bg-[#fee4dd]">
                      <div className="imgCard h-[75px] w-[75px] bg-primary rounded-md rounded-br-3xl flex items-center justify-center">
                        <img className='img1' src="/images/icon-30.png" alt="" srcset="" />
                        <img className='img2' src="/images/iconW-30.png" alt="" srcset="" />
                      </div>
                    </div>
                    <h3 className='text-[22px] font-semibold mb-6 mt-10'>Advertising Ideas</h3>
                    <p className='text-[17px]'>Excepteur sint a occaecat cupidatat non proident, sunt</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-[50%] w-full lg:absolute top-0 right-0">
              <div className="">
                <iframe src={mapUrl} title="map" className="w-full h-[850px] " frameborder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;