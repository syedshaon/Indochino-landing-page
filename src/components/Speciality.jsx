import React from "react";

import { FaStopwatch20 } from "react-icons/fa";
import { TiHeartHalfOutline } from "react-icons/ti";

import { FaChessKing } from "react-icons/fa";

const Speciality = () => {
  return (
    <div className="blueBGInv   w-screen px-10 py-20     ">
      <div className="container  flex flex-wrap justify-center     text-center gap-8">
        <div className="item w-1/4 min-w-[300px] max-w-[400px] flex   items-center flex-col">
          <span className="  w-20 h-20   rounded-full flex justify-center items-center border-2 border-white">
            <FaStopwatch20 className="w-12 h-12  " />
          </span>
          <h4 className="uppercase text-white  my-5 text-2xl font-bold">Come See Us</h4>
          <p>Schedule an appointment with style guide. we will take your measurements and walk you through all your suiting options.</p>
        </div>
        <div className="item w-1/4 min-w-[300px] max-w-[400px] flex   items-center flex-col">
          <span className="  w-20 h-20   rounded-full flex justify-center items-center border-2 border-white">
            <FaChessKing className="w-12 h-12  " />
          </span>
          <h4 className="uppercase text-white my-5 text-2xl font-bold">MAKE IT YOUR OWN</h4>
          <p>Choose the fabrics you love and the customizations you cant live without- everything from lapels and linings to monograms and contrast buttonhole stitching.</p>
        </div>
        <div className="item w-1/4 min-w-[300px] max-w-[400px] flex   items-center flex-col">
          <span className="  w-20 h-20   rounded-full flex justify-center items-center border-2 border-white">
            <TiHeartHalfOutline className="w-12 h-12  " />
          </span>
          <h4 className="uppercase text-white my-5 text-2xl font-bold">PERFECT THE FIT</h4>
          <p>When your suit arrives in around four weeks, come back to our showroom for any final alterations-our expert tailors will ensure your garment fits just right.</p>
        </div>
      </div>
    </div>
  );
};

export default Speciality;
