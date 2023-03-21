import React from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const StaticHero = ({title}) => {
  return (
    <div>
      <div className="h-[100vh] flex items-end" style={{
        backgroundImage: `linear-gradient(rgb(3 3 3 / 51%),rgb(3 3 3 / 51%)),url(${"https://i.ibb.co/zXDLDf2/bgbg.png"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}>
        <div className="container my-auto">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            <div className="">
              <h2 className='2xl:text-[90px] text-[60px] font-bold text-white '>{title}</h2>
              <h3 className='text-[22px] font-bold text-white inline-flex items-center gap-2'><Link to="/">Home</Link> <FaAngleDoubleRight /> {title}</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StaticHero;