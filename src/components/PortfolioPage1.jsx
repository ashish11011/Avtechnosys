import React from "react";
import finz from "../Assets/finz.jpg";
import fixpapa from "../Assets/fixpapa.jpg";
import saaskart from "../Assets/saaskart.jpg";
import reno from "../Assets/Reno.jpg";
import rajhut from "../Assets/rajhut.jpg";
import saaskart1 from "../Assets/saaskart1.png";
import saaskart2 from "../Assets/saaskart2.svg";
import figma from "../Assets/figma (1).svg";
import ai from "../Assets/Adode ai.svg";
import ps from "../Assets/photo.svg";
import tech1 from "../Assets/saastech1.svg";
import tech2 from "../Assets/saastech2.svg";
import tech3 from "../Assets/saastech3.svg";
import tech4 from "../Assets/saastech4.svg";
import tech5 from "../Assets/saastech5.svg";
import tech6 from "../Assets/saastech6.svg";
import tech7 from "../Assets/saastech7.svg";
import tech8 from "../Assets/saastech8.svg";
import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";

const PortfolioPage1 = () => {
  return (
    <>
      <hr className="bg-white text-white" />
      <div className=" bg-[#1c1c1e] lg:overflow-hidden overflow-y-hidden lg:h-[250vh] h-[290vh] ">
        {/* saaskart img */}
        <div className=" flex w-full lg:pt-10">
          <img
            src={saaskart2}
            alt=""
            className=" lg:ml-10 ml-4 lg:w-64 w-32 lg:h-40 h-32"
          />
          <img src={saaskart1} alt="" className="lg:ml-96 -ml-40 " />
        </div>
        <div className="text-white h-24 lg:ml-14 ml-4 lg:w-[45%] lg:-mt-72 -mt-20  ">
          <h1 className=" lg:text-4xl text-3xl font-semibold">
            Project Brief{" "}
          </h1>
          <p className="lg:text-xl  lg:font-semibold mt-7 ">
            Saaskart India's leading SaaS discovery platform providing
            data-driven insights and exclusive deals for buyers. With a focus on
            learningK excellenceK adaptabilityK and diversity Saaskart
            streamlines the software buying process while fostering innovation
            and inclusivity within the industry.
          </p>
          <button className="mt-7 relative border-2 py-1.5 pl-2 text-xl font-medium pr-8 border-white rounded-lg">
            Visit Site{" "}
            <ArrowOutwardRoundedIcon className="absolute right-0 top-2  " />{" "}
          </button>
        </div>

        <div className="flex lg:mt-60 mt-48 text-white   lg:ml-14 ml-4">
          <div className=" lg:text-3xl font-semibold h-fit lg:w-[90vw] w-[20vw]  ">
            
            Design Tools Used
            <div className="lg:flex gap-5 grid  mt-5">
              <img src={figma} alt="" />
              <img src={ai} alt="" />
              <img src={ps} alt="" />
            </div>
          </div>

          <div className="lg:text-3xl text-xl font-semibold  lg:ml-56 ml-10">
            {" "}
            Solutions
            <h1 className="lg:mt-6 mt-2 font-normal"> End User Features</h1>
            <ul className="list-disc lg:text-2xl text-xl font-normal ml-5 mt-5">
              <li className="">
                {" "}
                This creative website showcases Saaskarts best features provide
                solutions to buyers & seller investment solutions collaboration
                to partners.
              </li>
              <li> Marketplace to see and buy product</li>
              <li> Informative blogs </li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-14 ml-4 text-white lg:-mt-32 mt-5 ">
          <h1 className="lg:text-3xl text-2xl font-semibold">Technology Stack Used</h1>
          <div className=" flex mt-5 lg:size-32 size-20 ">
            <img src={tech1} alt="" />
            <img src={tech2} alt="" />
            <img src={tech3} alt="" />
            <img src={tech4} alt="" />
          </div>
          <div className=" flex lg:-mt-6 -mt-5 lg:size-32 size-20  ">
            <img src={tech5} alt="" />
            <img src={tech6} alt="" />
            <img src={tech7} alt="" />
            <img src={tech8} alt="" />
          </div>
        </div>

        <div className="text-white lg:ml-14 ml-4">
          <h1 className="lg:text-3xl text-2xl font-semibold">Project Breakdown</h1>
          <div className="flex ">
            <ul className="mt-5 lg:text-2xl text-lg lg:w-[36vw] w-[60vw] ">
              <li className="w-56 ">
                {" "}
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3 " />
                Logo Design
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                UI/UX & Prototyping
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                Database - MySQL
              </li>
              <li>
                <CheckCircleRoundedIcon className="lg:mr-5 mr-2 lg:my-3" />
                JS Libraries - jQuery,{" "}
                <span className="ml-10"> Underscore.js, etc.,</span>
              </li>
            </ul>
           <div>
           <ul className="lg:ml-72  mt-5 lg:text-2xl text-lg">
              <li className="lg:mr-5 lg:my-3">
                <CheckCircleRoundedIcon className="lg:mr-5 lg:my-3" /> UI Framework -
                Bootstrap
              </li>
              <li className=" lg:mr-5 lg:my-3">
                <CheckCircleRoundedIcon className="lg:mr-5 lg:my-3" /> Elementor (page
                builder) WordPress,{" "}
                <span className="lg:ml-10">WooCommerce Elementor</span>{" "}
              </li>
            </ul>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage1;
