import React from 'react';
import { FaFacebookF, FaInstagram, FaPlus, FaTwitter } from 'react-icons/fa';
import './Team.css';

const location = window.location.pathname;

const Team = () => {
  return (
    <div className='container my-24 pb-24'>


      <div className={`text-center ${location === "/team" ? "hidden  mb-7" : " "}`}>
        <div className="flex items-center justify-center gap-2">
          <div className='w-10 h-[2px] bg-primary'></div>
          <h4 className='text-[22px] font-semibold text-primary'>Meet Our Advisors</h4>
          <div className='w-10 h-[2px] bg-primary'></div>
        </div>
        <h3 className='xl:text-[50px] text-[33px] font-bold'>Our Professional Consultants</h3>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-[30px] my-14">
        <div className="home-team-card">
          <div className="">
            <img className='rounded-tl-[5px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[5px] hover:brightness-[60%] transition-all duration-700' src="/images/team1.png" alt="" srcset="" />
          </div>
          <div className="home-team-social  transition-all duration-700">
            <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
              <FaPlus className="" />
            </div>
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
          <div className="name-title  transition-all duration-700">
            <h2 className='text-[30px] font-semibold text-white'>Ehristine Eve</h2>
            <p className='font-medium text-white'>Senior Manager</p>
          </div>
        </div>
        <div className="home-team-card">
          <div className="">
            <img className='rounded-tl-[5px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[5px] hover:brightness-[60%] transition-all duration-700' src="/images/team2.png" alt="" srcset="" />
          </div>
          <div className="home-team-social  transition-all duration-700">
            <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
              <FaPlus className="" />
            </div>
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
          <div className="name-title  transition-all duration-700">
            <h2 className='text-[30px] font-semibold text-white'>Ehristine Eve</h2>
            <p className='font-medium text-white'>Senior Manager</p>
          </div>
        </div>
        <div className="home-team-card">
          <div className="">
            <img className='rounded-tl-[5px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[5px] hover:brightness-[60%] transition-all duration-700' src="/images/team3.png" alt="" srcset="" />
          </div>
          <div className="home-team-social  transition-all duration-700">
            <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
              <FaPlus className="" />
            </div>
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
          <div className="name-title  transition-all duration-700">
            <h2 className='text-[30px] font-semibold text-white'>Ehristine Eve</h2>
            <p className='font-medium text-white'>Senior Manager</p>
          </div>
        </div>
        <div className="home-team-card">
          <div className="">
            <img className='rounded-tl-[5px] rounded-tr-[100px] rounded-bl-[100px] rounded-br-[5px] hover:brightness-[60%] transition-all duration-700' src="/images/team4.png" alt="" srcset="" />
          </div>
          <div className="home-team-social  transition-all duration-700">
            <div className='w-[50px] h-[50px] mb-3 cursor-pointer bg-white text-black hover:text-white hover:bg-primary transition-all duration-700 flex items-center justify-center'>
              <FaPlus className="" />
            </div>
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
          <div className="name-title  transition-all duration-700">
            <h2 className='text-[30px] font-semibold text-white'>Ehristine Eve</h2>
            <p className='font-medium text-white'>Senior Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;