import React from 'react';
import { CiSearch } from "react-icons/ci";
import {
  FaAngleDoubleRight,
  FaCloudDownloadAlt,
  FaRegEnvelopeOpen,
  FaRegFilePdf,
  FaRegUser
} from "react-icons/fa";
import { GrPlay } from "react-icons/gr";
import { HiOutlineArrowNarrowRight, HiOutlineCheck } from "react-icons/hi";
import StaticHero from '../../components/AboutUS/StaticHero';

const ServicesDetailsTwo = () => {
  return (
    <div>
      <StaticHero title={"Services Details"} />
      

      <div className="">
        <div className="service-details-content ">
          <div className="container">
            <div className="lg:flex max-w-[100%] gap-7 py-12">
              {/* {/ content /} */}
              <div className="max-w-full lg:w-[70%]">
                <img
                  src="https://i.ibb.co/PW7Xf1v/Layer-37.png"
                  alt="cata"
                  className="max-w-full w-full"
                />
                <article className="m-7">
                  <h2 className="my-4 text-3xl font-bold">Financial Planning</h2>

                  <p className="text-[16px]">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollanim id est laborum. Sed ut
                    perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa
                  </p>
                  <p className="text-[16px] mt-4">
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit
                  </p>

                  <ul className="py-4">
                    <li className="flex items-center justify-start py-2">
                      <HiOutlineCheck className="mr-4 w-8 h-8 p-1 rounded-full border" />
                      Nostrud exercitation ullamco laboris consequat.reprehenderit
                    </li>
                    <li className="flex items-center justify-start py-2">
                      <HiOutlineCheck className="mr-4 w-8 h-8 p-1 rounded-full border" />
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui
                    </li>
                  </ul>

                  <p className="text-[16px]">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut consequun magni dolores eos qui ratione
                    volsnesciunt.Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, sed quia non numquam eius modi
                    tempora incidunt ut labore et dolore aliquam quaerat
                    voluptatem.
                  </p>
                </article>

                <div className="relative">
                  <img
                    src="https://i.ibb.co/26fr6Vr/video-btn.png"
                    alt="cata"
                    className="max-w-full w-full"
                  />
                  <div
                    className="absolute top-1/2 left-1/2"
                    style={{ transform: "translateX(-50%)" }}
                  >
                    <span className="w-[90px] h-[90px] rounded-full border flex items-center justify-center">
                      <span className="w-16 h-16 rounded-full flex items-center justify-center bg-[#F94D1C] text-white cursor-pointer">
                        <GrPlay className="text-white" />
                      </span>
                    </span>
                  </div>
                </div>

                <article className="m-7">
                  <p className="text-[16px]">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollanim id est laborum. Sed ut
                    perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>

                  <div className="my-12 flex flex-wrap">
                    <span className="p-4 py-3 px-7 border hover:bg-[#F94D1C] cursor-pointer transition-all duration-500 hover:text-white font-bold">
                      Specializations
                    </span>
                    <span className="p-4 py-3 px-7 border hover:bg-[#F94D1C] cursor-pointer transition-all duration-500 hover:text-white font-bold">
                      Intelligence
                    </span>
                    <span className="p-4 py-3 px-7 border hover:bg-[#F94D1C] cursor-pointer transition-all duration-500 hover:text-white font-bold">
                      Precautions
                    </span>
                    <span className="p-4 py-3 px-7 border hover:bg-[#F94D1C] cursor-pointer transition-all duration-500 hover:text-white font-bold">
                      Supper support
                    </span>
                  </div>

                  {/* {/ list /} */}
                  <div className="md:flex items-center justify-start my-7">
                    <div>
                      <img
                        src="https://i.ibb.co/Zzfy0C1/Layer-94-1.png"
                        alt="cata"
                        className="max-w-full w-full"
                      />
                    </div>

                    <ul className=" ml-7">
                      <li className="flex items-center justify-start py-2">
                        <HiOutlineCheck className="mr-4 text-[#F94D1C] text-xl" />
                        The ability to turnaround consulting work on it
                      </li>
                      <li className="flex items-center justify-start py-2">
                        <HiOutlineCheck className="mr-4 text-[#F94D1C] text-xl" />
                        Marketing options and rates lipsum simply
                      </li>
                      <li className="flex items-center justify-start py-2">
                        <HiOutlineCheck className="mr-4 text-[#F94D1C] text-xl" />
                        The ability to turnaround consulting work on it
                      </li>
                      <li className="flex items-center justify-start py-2">
                        <HiOutlineCheck className="mr-4 text-[#F94D1C] text-xl" />
                        Customer engagement matters not at all
                      </li>
                    </ul>
                  </div>

                  <p className="text-[16px]">
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                    odit aut consequun magni dolores eos qui ratione
                    volsnesciunt.Neque porro quisquam est, qui dolorem ipsum quia
                    dolor sit amet, consectetur, sed quia non numquam eius modi
                    tempora incidunt ut labore et dolore aliquam quaerat
                    voluptatem.
                  </p>
                </article>
              </div>

              {/* {/ sidebar /} */}
              <div className="max-w-full lg:w-[30%] mt-4 lg:mt-0">
                {/* {/ Search box /} */}
                <div className="bg-gray-100 p-7 mt-8">
                  <h1 className="py-7 text-3xl font-bold text-center">Search</h1>
                  <div className="relative flex items-center justify-between overflow-hidden rounded-lg">
                    <input
                      type="search"
                      name=""
                      id=""
                      placeholder="Search"
                      className="w-full max-w-full p-4"
                    />
                    <span
                      className="absolute top-1/2 right-0 bg-white p-7 cursor-pointer"
                      style={{ transform: "translateY(-50%)" }}
                    >
                      <CiSearch />
                    </span>
                  </div>
                </div>

                {/* {/ service containter /} */}
                <div className="bg-gray-100 p-7">
                  <h1 className="py-7 text-3xl font-bold text-center">
                    Service catagories
                  </h1>

                  {/* {/ list /} */}
                  <ul>
                    <li className="flex items-center justify-between bg-gray-50 text-lg font-semibold p-4 mt-2 hover:bg-[#F94D1C] transition-all duration-500 hover:text-white cursor-pointer  hover:ml-4">
                      <span>Software & Research</span>{" "}
                      <span>
                        <HiOutlineArrowNarrowRight className="text-2xl" />
                      </span>
                    </li>
                    <li className="flex items-center justify-between bg-gray-50 text-lg font-semibold p-4 mt-2 hover:bg-[#F94D1C] transition-all duration-500 hover:text-white cursor-pointer  hover:ml-4">
                      <span>Relationship Buildup </span>{" "}
                      <span>
                        <HiOutlineArrowNarrowRight className="text-2xl" />
                      </span>
                    </li>
                    <li className="flex items-center justify-between bg-gray-50 text-lg font-semibold p-4 mt-2 hover:bg-[#F94D1C] transition-all duration-500 hover:text-white cursor-pointer  hover:ml-4">
                      <span>Marketing Strategy</span>{" "}
                      <span>
                        <HiOutlineArrowNarrowRight className="text-2xl" />
                      </span>
                    </li>
                    <li className="flex items-center justify-between bg-gray-50 text-lg font-semibold p-4 mt-2 hover:bg-[#F94D1C] transition-all duration-500 hover:text-white cursor-pointer  hover:ml-4">
                      <span>Product Strategy</span>{" "}
                      <span>
                        <HiOutlineArrowNarrowRight className="text-2xl" />
                      </span>
                    </li>
                    <li className="flex items-center justify-between bg-gray-50 text-lg font-semibold p-4 mt-2 hover:bg-[#F94D1C] transition-all duration-500 hover:text-white cursor-pointer  hover:ml-4">
                      <span>Investement Planning</span>{" "}
                      <span>
                        <HiOutlineArrowNarrowRight className="text-2xl" />
                      </span>
                    </li>
                  </ul>
                </div>

                {/* {/ message box /} */}
                <div className="bg-gray-100 p-7 mt-8">
                  <h1 className="py-7 text-3xl font-bold text-center">
                    Have your question
                  </h1>
                  <form>
                    <div className="relative flex items-center justify-between overflow-hidden">
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-4 rounded-lg"
                        required
                      />
                      <span
                        className="absolute top-1/2 right-0 bg-white px-4 py-4 rounded-r-lg text-[#F94D1C]	"
                        style={{ transform: "translateY(-50%)" }}
                      >
                        <FaRegUser />
                      </span>
                    </div>

                    {/* {/ text area /} */}
                    <div className="relative flex items-center justify-between overflow-hidden">
                      <textarea
                        name=""
                        id=""
                        placeholder="Your message"
                        className="w-full mt-2 p-4  rounded-lg h-36"
                        required
                      ></textarea>
                      <span className="absolute top-0 right-0 px-4 py-4 text-[#F94D1C]	">
                        <FaRegEnvelopeOpen />
                      </span>
                    </div>
                    <button
                      type="submit"
                      className="py-3 px-7 bg-[#F94D1C] rounded-lg mt-3 flex items-center justify-start text-white"
                    >
                      <span>Submit now</span>{" "}
                      <FaAngleDoubleRight className="ml-4" />
                    </button>
                  </form>
                </div>

                {/* {/ download /} */}
                <div className="bg-gray-100 p-7 mt-8">
                  <div className="flex items-center justify-between bg-gray-50 p-4 hover:bg-[#F94D1C] transition-all duration-500 hover:text-white cursor-pointer  hover:ml-4">
                    <span className="font-bold">Download Doc</span>
                    <span>
                      <FaCloudDownloadAlt />
                    </span>
                  </div>

                  <div className="flex items-center justify-between bg-gray-50 p-4 hover:bg-[#F94D1C] transition-all duration-500 hover:text-white cursor-pointer mt-2  hover:ml-4">
                    <span className="font-bold">Download Pdf</span>
                    <span>
                      <FaRegFilePdf />
                    </span>
                  </div>
                </div>

                {/* Add Banner */}

                <div className="bg-[url()] relative mt-7" style={{ backgroundSize: "100% 100%" }}>
                  <img className='w-full h-full' src="https://i.ibb.co/jfW31xz/BG.png" alt="" />
                  <div className="bg-white p-8 text-center absolute top-[32%] left-[20%]">
                    <h3 className='text-[20px]'>Ads Banner</h3>
                    <p className='text-[16px] font-semibold text-[#878c8f]'>340 x 460</p>
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

export default ServicesDetailsTwo;