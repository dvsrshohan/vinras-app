import React from 'react';
import {
  FaAngleDoubleRight,
  FaCloudDownloadAlt,
  FaRegEnvelopeOpen,
  FaRegFilePdf,
  FaRegUser
} from "react-icons/fa";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineCheck,
  HiUserGroup
} from "react-icons/hi";
import { MdForum } from "react-icons/md";
import StaticHero from '../../components/AboutUS/StaticHero';

const ServicesDetails = () => {
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
                  src="https://i.ibb.co/nrbYqv1/Layer-92.png"
                  alt="cata"
                  className="max-w-full w-full"
                />
                <article className="m-7">
                  <h2 className="my-4 text-3xl font-bold">Software & Research</h2>

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

                <img
                  src="https://i.ibb.co/19Jwtty/Layer-93.png"
                  alt="cata"
                  className="max-w-full w-full"
                />
                <article className="m-7">
                  <p className="text-[16px]">
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollanim id est laborum. Sed ut
                    perspiciatis unde omnis iste natus error voluptatem
                    accusantium doloremque laudantium, totam rem aperiam.
                  </p>

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

                  <ul>
                    <li className="list-disc">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt
                    </li>
                    <li className="list-disc	">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium
                    </li>
                  </ul>

                  <hr className="my-7" />
                  <div className="md:flex items-start justify-start">
                    <div className="flex items-center justify-start">
                      <div className="w-12 h-12 p-4 border flex items-center bg-gray-300 text-[#F94D1C] my-4 justify-center">
                        <HiUserGroup />
                      </div>
                      <div className="ml-7">
                        <p>
                          Ut enim ad mini veniam, quis nostrud exercitation
                          ullamco laboris nisi aliquip ex ea commodo consequat.
                          Duis aute irure dolor in{" "}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-start">
                      <div className="w-12 h-12 p-4 border flex items-center bg-gray-300 text-[#F94D1C] my-4 justify-center">
                        <MdForum />
                      </div>
                      <div className="ml-7">
                        <p>
                          Ut enim ad mini veniam, quis nostrud exercitation
                          ullamco laboris nisi aliquip ex ea commodo consequat.
                          Duis aute irure dolor in{" "}
                        </p>
                      </div>
                    </div>
                  </div>

                  <hr className="my-7" />
                </article>
              </div>

              {/* {/ sidebar /} */}
              <div className="max-w-full lg:w-[30%] mt-4 lg:mt-0">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesDetails;