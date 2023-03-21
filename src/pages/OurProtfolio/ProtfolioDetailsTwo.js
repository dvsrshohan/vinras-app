import React from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitterSquare
} from "react-icons/fa";
import { Link } from 'react-router-dom';
import StaticHero from '../../components/AboutUS/StaticHero';
import Case from '../../components/HomeTwo/Case/Case';
import './portfolio.css';

const ProtfolioDetailsTwo = () => {
  return (
    <div>
      <StaticHero title={"Our Portfolio Details"} />
      
      {/* {/ content /} */}
      <div className="py-12">
        <div className="container">
          <div className="relative">
            <img
              src="https://i.ibb.co/ZWqVVQQ/Layer-94-2.png"
              alt="portfolio-details"
              className="w-full max-w-full"
            />

            {/* {/ time line /} */}
            <div
              className="time-line p-7 max-w-[90%] mx-auto flex items-center justify-between rounded-lg absolute bottom-0 bg-white right-0 left-0 border"
              style={{ transform: "translateY(50%)" }}
            >
              <div className="time-line-items">
                <h4>
                  <strong>Client:</strong>
                </h4>
                <h6 className="text-[#F94D1C] font-semibold mt-1">
                  Jhon Smith
                </h6>
              </div>

              <div className="time-line-items">
                <h4>
                  <strong>Catagories:</strong>
                </h4>
                <h6 className="text-[#F94D1C] font-semibold mt-1">
                  Graphic, illustrator
                </h6>
              </div>

              <div className="time-line-items">
                <h4>
                  <strong>Date:</strong>
                </h4>
                <h6 className="text-[#F94D1C] font-semibold mt-1">
                  16 May 2021
                </h6>
              </div>

              <div>
                <ul className={`flex items-center justify-between`}>
                  <li className="nva-social-items">
                    <Link className="nav-social-links" href="/">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li className="nva-social-items">
                    <Link className="nav-social-links" href="/">
                      <FaTwitterSquare />
                    </Link>
                  </li>
                  <li className="nva-social-items">
                    <Link className="nav-social-links" href="/">
                      <FaLinkedinIn />
                    </Link>
                  </li>
                  <li className="nva-social-items">
                    <Link className="nav-social-links" href="/">
                      <FaPinterestP />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* {/ article /} */}
          <article className="mt-24">
            <h2 className="font-bold text-2xl py-4">
              Hilix Marko Polo Buisness
            </h2>
            <p className="text-md">
              Sit ipsum velit massa fringilla leo orci dolors sit amet elit
              amet. Tincidunt elit magnis nulla facilisis sagittis sapien nunc
              amet ultrices dolores sit ipsum velit purus aliquet massa
              fringilla leo orci. Sapien nunc amet ultrices, dolores{" "}
            </p>

            <p className="text-md  py-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, humour and the
              like.
            </p>
          </article>

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
      </div>

      <Case/>
    </div>
  );
};

export default ProtfolioDetailsTwo;