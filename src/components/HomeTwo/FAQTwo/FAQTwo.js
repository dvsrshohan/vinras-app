import React, { useState } from 'react';
import { RxPlay } from 'react-icons/rx';
import ModalVideo from 'react-modal-video';



const FAQTwo = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="mt-24">
      <div className='bg-[url(https://i.ibb.co/2t7SZvB/BG.png)] bg-cover bg-no-repeat bg-center py-24 block'>
        <div className="container relative mt-[-15%]">
          <div className="relative">
            <div className=" -top-[15%] inset-x-0 bg-[url(https://i.ibb.co/R9h0Vn3/video-bg.png)] py-[245px] flex justify-center" style={{ backgroundSize: '100% 100%' }}>
              <div className="border-white border-[1px] p-4 rounded-full">
                <React.Fragment>
                  <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="6TaVPRcpOts" onClose={() => setOpen(false)} />
                </React.Fragment>
                <div onClick={() => setOpen(true)} className="bg-primary rounded-full w-24 h-24 flex items-center justify-center cursor-pointer">
                  <RxPlay className='text-white text-2xl' />
                </div>
              </div>
            </div>
            <div className="bg-white md:p-[60px] p-6 absolute left-3 bottom-0">
              <h4 className='text-[20px] font-semibold mb-7'>We’re committed to <br /> trusted financial advisors</h4>
              <a href=" " className='text-[12px] uppercase text-primary'>Get Started</a>
            </div>
          </div>
          <div className="mt-24">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
              <div className="grid xl:grid-cols-2 grid-cols-1 gap-[30px]">
                <div className="">
                  <div className="bg-white rounded shadow ">
                    <p className='py-[18px] px-[35px]'>Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum. Sed ut perspiciatis unde </p>

                    <div className="flex items-center justify-between pb-5">
                      <div className="">
                        <div className="">
                          <div className="bg-[#f7f7f7] pl-7 pr-[22px] py-3 rounded-r inline-block">
                            <p className='text-[14px]'>Business</p>
                          </div>
                        </div>
                        <h3 className='text-[22px] font-bold ml-6'>App Development</h3>
                      </div>
                      <div className="mr-[35px]  mb-5">
                        <div className="bg-primary w-[76px] h-[86px] rounded flex items-center justify-center">
                          <img src="/images/icon-22.png" alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white rounded shadow ">
                    <p className='py-[18px] px-[35px]'>Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum. Sed ut perspiciatis unde </p>

                    <div className="flex items-center justify-between pb-5">
                      <div className="">
                        <div className="">
                          <div className="bg-[#f7f7f7] pl-7 pr-[22px] py-3 rounded-r inline-block">
                            <p className='text-[14px]'>Business</p>
                          </div>
                        </div>
                        <h3 className='text-[22px] font-bold ml-6'>Media Marketing</h3>
                      </div>
                      <div className="mr-[35px]  mb-5">
                        <div className="bg-primary w-[76px] h-[86px] rounded flex items-center justify-center">
                          <img src="/images/icon-23.png" alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white rounded shadow ">
                    <p className='py-[18px] px-[35px]'>Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum. Sed ut perspiciatis unde </p>

                    <div className="flex items-center justify-between pb-5">
                      <div className="">
                        <div className="">
                          <div className="bg-[#f7f7f7] pl-7 pr-[22px] py-3 rounded-r inline-block">
                            <p className='text-[14px]'>Business</p>
                          </div>
                        </div>
                        <h3 className='text-[22px] font-bold ml-6'>Ui/Ux Design</h3>
                      </div>
                      <div className="mr-[35px]  mb-5">
                        <div className="bg-primary w-[76px] h-[86px] rounded flex items-center justify-center">
                          <img src="/images/icon-24.png" alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="bg-white rounded shadow ">
                    <p className='py-[18px] px-[35px]'>Excepteur sint occaecat cupidatat paroident sunt in culpa qui officia deserunt mollianim id est laborum. Sed ut perspiciatis unde </p>

                    <div className="flex items-center justify-between pb-5">
                      <div className="">
                        <div className="">
                          <div className="bg-[#f7f7f7] pl-7 pr-[22px] py-3 rounded-r inline-block">
                            <p className='text-[14px]'>Business</p>
                          </div>
                        </div>
                        <h3 className='text-[22px] font-bold ml-6'>Digital Marketing</h3>
                      </div>
                      <div className="mr-[35px]  mb-5">
                        <div className="bg-primary w-[76px] h-[86px] rounded flex items-center justify-center">
                          <img src="/images/icon-25.png" alt="" srcset="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="">
                  <div tabIndex={0} className="collapse collapse-plus bg-white rounded-none mb-5">
                    <input type="checkbox" checked className="peer" />
                    <div className="collapse-title text-[18px] font-bold bg-white peer-checked:bg-primary text-black peer-checked:text-primary-content py-5 ">
                      Think Ahead And Boost Your Business?
                    </div>
                    <div className="collapse-content  ">
                      <p className='text-[18px] p-10'>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                    </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-plus bg-white mb-5">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-[18px] font-bold bg-white peer-checked:bg-primary text-black peer-checked:text-primary-content py-5" >
                      Maecenas condimentum sollicitudin ligula,
                    </div>
                    <div className="collapse-content  ">
                      <p className='text-[18px] p-10'>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                    </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-plus bg-white mb-5">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-[18px] font-bold bg-white peer-checked:bg-primary text-black peer-checked:text-primary-content py-5" >
                      What Is The Best Advice For Growth?
                    </div>
                    <div className="collapse-content  ">
                      <p className='text-[18px] p-10'>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
                    </div>
                  </div>
                  <div tabIndex={0} className="collapse collapse-plus bg-white mb-5">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-[18px] font-bold bg-white peer-checked:bg-primary text-black peer-checked:text-primary-content py-5" >
                      What Is The Best Advice For Growth?
                    </div>
                    <div className="collapse-content  ">
                      <p className='text-[18px] p-10'>Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.</p>
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

export default FAQTwo;