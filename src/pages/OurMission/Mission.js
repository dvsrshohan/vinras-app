import React from "react";
import { GrCheckmark } from "react-icons/gr";
import StaticHero from "../../components/AboutUS/StaticHero";
import "./Mission.css";

const Mission = () => {
  return (
    <div>
      <div>
        <StaticHero title="Our Mission" />
      </div>

      {/* {/ content /} */}
      <div className="container py-12 h-full">
        <div className="flex items-center h-full max-h-full">
          <div className="w-full xl:max-w-[50%] md:w-[70%] xl:mx-auto">
            <div className="top-row grid md:grid-cols-2 grid-cols-1 gap-7">
              <div>
                <img
                  src="https://i.ibb.co/C6VD4Xm/Layer-93-1.png"
                  alt="mission"
                  className="max-w-full w-full"
                />
              </div>
              <article>
                <p>
                  Ut enim ad minim veniam, in a anostrud exercitation ullamco
                  laboris nisi aliquip ex ea commconsequat. Duis aute irure
                  dolor in reprehenderit in a voluptate iinvelit esse cillum
                  dolore eu fugiat ulla pariatur. Except eur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Sed ut perspiciatis unde omnis
                  iste natus error sit voluptatem accusantium doloremque
                  laudantium,
                </p>
                <button className="px-5 py-3 font-semibold text-md bg-[#F94D1C] text-white mt-4">
                  Dicover more +
                </button>
              </article>
            </div>
          </div>

          <div className="mission-top-images"></div>
        </div>

        {/* {/ content bottom /} */}
        <div className="w-full xl:max-w-[50%] md:w-[40%] lg:mx-auto flex items-center justify-between my-36">
          <div className="mission-contained-1"></div>
          <div className="flex justify-end">
            <div className="mission-contained">
              <h1 className="text-[40px] font-bold py-7">
                Vinras Is A Very Strong
                Impact
              </h1>
              <p className="py-4 text-sm font-normal">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit
              </p>
              <ul>
                <li className="flex items-center mt-3 text-[16px] justify-start">
                  <div className="mr-4 bg-white w-10 h-10 flex items-center justify-center shadow rounded-full" >
                    <GrCheckmark />
                  </div>
                  Nostrud exercitation ullamco
                  laboris
                </li>
                <li className="flex items-center mt-3 text-[16px] justify-start">
                  <div className="mr-4 bg-white w-10 h-10 flex items-center justify-center shadow rounded-full" >
                    <GrCheckmark />
                  </div>
                  velit esse cillum dolore eu fugiat nulla pariatur. Excep
                </li>
                <li className="flex items-center mt-3 text-[16px] justify-start">
                  <div className="mr-4 bg-white w-10 h-10 flex items-center justify-center shadow rounded-full" >
                    <GrCheckmark />
                  </div>
                  non proident, sunt in culpa qui officia deserunt mollit anim
                </li>
                <li className="flex items-center mt-3 text-[16px] justify-start">
                  <div className="mr-4 bg-white w-10 h-10 flex items-center justify-center shadow rounded-full" >
                    <GrCheckmark />
                  </div>
                  Sed ut perspiciatis unde omnis iste natus error sit vo
                </li>
              </ul>
            </div>
          </div>
          <div className="mission-contained-2"></div>
        </div>

        {/* {/ planning /} */}
        <h2 className="text-[45px] font-bold text-center mb-6">Planning And Strategy</h2>

        <div className=" grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7 ">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/q9XqJ6v/Layer-6.png"
              alt="mission blog"
              className="w-full max-w-full"
            />

            <article className="px-7 my-4">
              <h3 className="text-xl font-semibold py-2">
                Unique Mission Vissions
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, qui officia
                deserunt mollit anim id est laborum.{" "}
              </p>
            </article>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/qMmx67S/Layer-7.png"
              alt="mission blog"
              className="w-full max-w-full"
            />

            <article className="px-7 my-4">
              <h3 className="text-xl font-semibold py-2">
                Unique Mission Vissions
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, qui officia
                deserunt mollit anim id est laborum.{" "}
              </p>
            </article>
          </div>

          <div className="bg-white shadow rounded-lg overflow-hidden">
            <img
              src="https://i.ibb.co/XkZqKwX/Layer-8.png"
              alt="mission blog"
              className="w-full max-w-full"
            />

            <article className="px-7 my-4">
              <h3 className="text-xl font-semibold py-2">
                Unique Mission Vissions
              </h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, qui officia
                deserunt mollit anim id est laborum.{" "}
              </p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;