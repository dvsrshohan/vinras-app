import React from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FaFacebookSquare, FaInstagram, FaPinterestP, FaTwitter } from 'react-icons/fa';
import StaticHero from '../../components/AboutUS/StaticHero';
import Case from '../../components/HomeTwo/Case/Case';

const ProtfolioDetails = () => {
  return (
    <div>

      <StaticHero title={"Portfolio Details"}/>

      <div className="container my-24">
        <div className="lg:flex items-start gap-6">
          <div className="lg:w-8/12 w-full">
            <div className="mb-4">
              <img className='w-full' src="https://i.ibb.co/XXGhrS2/Layer-94.png" alt="" />
            </div>
            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
              <img src="https://i.ibb.co/TKMfWcT/Layer-95.png" alt="" />
              <img src="https://i.ibb.co/h97cTNm/Layer-96.png" alt="" />
            </div>
          </div>
          <div className="lg:w-4/12 w-full">
            <div className="">
              <h2 className='text-[24px] font-bold mb-14'>Hilix Marko Polo Business</h2>
              <p className='text-[18px] text-[#878c8f]'>
                ipsum velit massa fringilla leo orci dolors sit amet elit amet.Tincidunt elit magnis nulla facilisis sagittis sapien nunc amet ultrices dolores sit ipsum velit purus aliquet massa fringilla leo orci. Sapien nunc amet ultrices, dolores sit 
              </p>
              <div className="mt-6">
                <h3 className='text-[20px] text-black font-bold'>Clients:</h3>
                <p className='text-[18px] text-primary'>Hony Smith</p>
              </div>
              <div className="mt-5">
                <h3 className='text-[20px] text-black font-bold'>Category:</h3>
                <p className='text-[18px] text-primary'>Graphic, Illustrations</p>
              </div>
              <div className="mt-5">
                <h3 className='text-[20px] text-black font-bold'>Date:</h3>
                <p className='text-[18px] text-primary'>12 may, 2021</p>
              </div>

              <div className="flex items-center gap-5 mt-7">
                <FaTwitter />
                <FaFacebookSquare />
                <FaPinterestP/>
                <FaInstagram/>
              </div>
            </div>
          </div>
        </div>
        {/* {/ next and prev /} */}
        <div className="flex items-center justify-between border-t pt-7 border-b pb-7 my-7">
          <span className="flex items-center cursor-pointer justify-between">
            <BsArrowLeft className="mr-4" /> Previous
          </span>
          <span className="flex items-center cursor-pointer justify-between">
            Next <BsArrowRight className="ml-4" />
          </span>
        </div>
      </div>

      <Case/>
    </div>
  );
};

export default ProtfolioDetails;