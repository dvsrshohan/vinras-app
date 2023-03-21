import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import './TeamTwo.css';

const TeamTwo = () => {
  return (
    <div className='bg-[url(https://i.ibb.co/Pr2sxy4/BG.png)] bg-no-repeat bg-cover bg-center py-24 bg-white'>
      <div className="container">
        <div className="text-center">
          <div className="flex items-center gap-2 justify-center">
            <div className='w-10 h-[2px] bg-primary'></div>
            <h4 className='text-[22px] font-semibold text-primary'>Our Team</h4>
            <div className='w-10 h-[2px] bg-primary'></div>
          </div>
          <h2 className='text-[50px] font-bold text-[#1a1a1a]'>Meet  Our Amazing Team </h2>
        </div>

        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-[30px] py-[50px] ">
          <div className="team-two-card">
            <div className="">
              <img className='w-full hover:brightness-[60%] transition-all duration-700' src="/images/team-1.png" alt="" srcset="" />
            </div>
            <div className="home-team-social  transition-all duration-700">
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaInstagram className="" />
              </div>
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaTwitter className="" />
              </div>
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaFacebookF className="" />
              </div>
            </div>
            <div className="name-title  transition-all duration-700 border-l-[7px] border-primary px-[26px] py-3 shadow">
              <h2 className='text-[30px] font-semibold text-black'>Ehristine Eve</h2>
              <p className='font-medium text-[#878c8f]'>Senior Manager</p>
            </div>
          </div>
          <div className="team-two-card">
            <div className="">
              <img className='w-full  hover:brightness-[60%] transition-all duration-700' src="/images/team-2.png" alt="" srcset="" />
            </div>
            <div className="home-team-social  transition-all duration-700">
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaInstagram className="" />
              </div>
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaTwitter className="" />
              </div>
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaFacebookF className="" />
              </div>
            </div>
            <div className="name-title  transition-all duration-700 border-l-[7px] border-primary px-[26px] py-3 shadow">
              <h2 className='text-[30px] font-semibold text-black'>Ehristine Eve</h2>
              <p className='font-medium text-[#878c8f]'>Senior Manager</p>
            </div>
          </div>
          <div className="team-two-card">
            <div className="">
              <img className='w-full  hover:brightness-[60%] transition-all duration-700' src="/images/team-3.png" alt="" srcset="" />
            </div>
            <div className="home-team-social  transition-all duration-700">
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaInstagram className="" />
              </div>
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaTwitter className="" />
              </div>
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaFacebookF className="" />
              </div>
            </div>
            <div className="name-title  transition-all duration-700 border-l-[7px] border-primary px-[26px] py-3 shadow">
              <h2 className='text-[30px] font-semibold text-black'>Ehristine Eve</h2>
              <p className='font-medium text-[#878c8f]'>Senior Manager</p>
            </div>
          </div>
          <div className="team-two-card">
            <div className="">
              <img className='w-full  hover:brightness-[60%] transition-all duration-700' src="/images/team-4.png" alt="" srcset="" />
            </div>
            <div className="home-team-social  transition-all duration-700">
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaInstagram className="" />
              </div>
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaTwitter className="" />
              </div>
              <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
                <FaFacebookF className="" />
              </div>
            </div>
            <div className="name-title  transition-all duration-700 border-l-[7px] border-primary px-[26px] py-3 shadow">
              <h2 className='text-[30px] font-semibold text-black'>Ehristine Eve</h2>
              <p className='font-medium text-[#878c8f]'>Senior Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamTwo;