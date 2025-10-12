import Image from "next/image";
import React from "react";
import IntroImg from "../assets/image.png";
import WorldMap from "../assets/section input.png";
import TechScroll from "../components/TechScroll";
import Pointer1 from "../assets/Group.png";
import Pointer2 from "../assets/Button.png";
import DbScroll from "./DbScroll";
import Codes from "../assets/codes.png";
import SpotlightCard from "./SpotlightCard";
import Jscode from "../assets/jscode.png";

const Intro = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 2xl:px-[75px] flex flex-col gap-[550px] sm:gap-[600px] md:gap-[700px] lg:gap-[50px] xl:gap-[0px] h-auto my-[50px]">
      <div className="flex flex-col lg:flex-row h-[400px] md:h-[500px] lg:h-[540px] xl:h-[600px] 2xl:h-[700px] gap-[25px] font-inter">
        <div className="flex-1 h-full relative w-full rounded-3xl">
          <Image
            src={IntroImg}
            className="object-cover rounded-3xl h-full w-full"
            alt="intro-img"
          />
          <Image
            className="absolute right-4 lg:right-10 bottom-[50px] lg:bottom-[75px] w-8 lg:w-auto"
            src={Pointer1}
            alt="pointer-1"
          />
          <Image
            src={Pointer2}
            className="absolute left-4 lg:left-10 top-[50px] lg:top-[75px] w-8 lg:w-auto"
            alt="pointer-2"
          />
          <h4 className="absolute bottom-5 left-5 font-bold text-white w-[250px] lg:w-[400px] text-[20px] lg:text-[35px]">
            I prioritize client collaboration, fostering open communication
          </h4>
        </div>
        <div className="flex flex-1 gap-[25px] flex-col">
          <div className="relative bg-gradient-to-tl from-white/10 to-transparent flex-1 w-full rounded-3xl border-1 border-[#363749]">
            <Image
              className="object-cover rounded-3xl w-full h-full"
              src={WorldMap}
              alt="world-img"
            />
            <div className="absolute top-[60px] lg:top-[100px] right-[20px] lg:right-[40px] border-1 text-white border-[#6971A2] rounded-2xl lg:rounded-3xl px-2 lg:px-4 py-1 lg:py-2 bg-[#161A31]/10 text-xs lg:text-base">
              Singapore
            </div>
            <div className="absolute top-[80px] lg:top-[120px] left-[20px] lg:left-[40px] border-1 text-white border-[#6971A2] rounded-2xl lg:rounded-3xl px-2 lg:px-4 py-1 lg:py-2 bg-[#161A31]/10 text-xs lg:text-base">
              USA
            </div>
            <div className="absolute bottom-[25px] left-[150px] lg:left-[250px] border-1 text-white border-[#6971A2] rounded-2xl lg:rounded-3xl px-2 lg:px-4 py-1 lg:py-2 bg-[#161A31]/10 text-xs lg:text-base">
              Germany
            </div>
            <h4 className="absolute top-4 lg:top-10 left-4 lg:left-10 text-white text-[20px] lg:text-[30px] font-bold">
              Remote-Ready Developer
            </h4>
          </div>
          <div className="flex h-[250px] lg:h-[300px] xl:flex-1 flex-col relative px-[15px] bg-gradient-to-b from-[#04071D] to-[#0C0E23] rounded-3xl border-1 border-[#363749]">
            <div className="absolute top-[60px] lg:top-[100px] left-5 text-white">
              <p className="text-sm lg:text-base">I constantly try to improve</p>
              <h4 className="text-[24px] lg:text-[32px] font-bold">My Tech Stack</h4>
            </div>

            {/*this one is absolute and contain the tech stack*/}
            <div className="overflow-hidden">
              {/*contains 2 divs from 2 containers of technologies*/}
              <div className="absolute top-0 right-4 lg:right-8 h-full w-[120px] lg:w-auto overflow-hidden">
                <TechScroll />
              </div>
              <div className="absolute top-0 right-[140px] lg:right-[200px] h-full w-[100px] lg:w-auto overflow-hidden">
                <DbScroll />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:mt-[25px] flex flex-col lg:flex-row gap-[25px] min-h-[390px] font-inter">
        <div className="w-full lg:w-1/3 flex flex-col gap-[25px]">
          <div className="relative lg:flex-1 h-[300px] flex justify-center px-3 rounded-3xl border-1 border-[#363749] bg-gradient-to-b from-[#04071D] to-[#0C0E23]">
            <h4 className="text-[24px] font-bold text-white">
              Tech enthusiast with a passion for development.
            </h4>
            <Image src={Codes} className="absolute bottom-0 right-5" alt="codes-img" />
          </div>
          <div className="lg:flex-1 h-[300px]">
            <SpotlightCard
              className="custom-spotlight-card flex flex-col items-center h-full gap-[15px]"
              spotlightColor="rgba(147, 51, 234, 0.2)"
            >
              <p className="text-white text-[24px] text-center font-bold">
                Do u want to start a project together
              </p>
              <div className="text-white px-3 py-2 bg-[#161A31] rounded-2xl w-[250px] text-center border-1 border-[#6971A2]">
                Copy my email address
              </div>
            </SpotlightCard>
          </div>
        </div>
        <div className="flex-2/3 min-h-[390px] flex flex-row rounded-3xl border-1 border-[#363749] bg-gradient-to-b from-[#04071D] to-[#0C0E23]">
          <div className="flex-1/3 flex flex-col justify-center gap-4 text-white pl-[15px]">
            <p className="text-[16px]">The Inside Scoop</p>
            <h3 className="text-[32px] font-bold">
              Behind every pixel, there’s a story.
            </h3>
          </div>
          <div className="flex-2/3 w-full">
            <Image
              src={Jscode}
              className="w-full h-full object-cover"
              alt="jscode-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
