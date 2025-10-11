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
    <div className="px-[75px] flex flex-col gap-[250px]  lg:gap-[0px] my-[50px]">
      <div className="flex flex-col lg:flex-row h-[540px] gap-[25px] font-inter">
        <div className="flex-1 h-[540px] relative w-full rounded-3xl">
          <Image
            src={IntroImg}
            className="object-cover rounded-3xl h-full w-full"
            alt="intro-img"
          />
          <Image
            className="absolute right-10 bottom-[75px]"
            src={Pointer1}
            alt="pointer-1"
          />
          <Image
            src={Pointer2}
            className="absolute left-10 top-[75px]"
            alt="pointer-2"
          />
          <h4 className="absolute bottom-5 left-5 font-bold text-white w-[400px] text-[35px]">
            I prioritize client collaboration, fostering open communication
          </h4>
        </div>
        <div className="flex flex-1 gap-[25px] flex-col">
          <div className="relative bg-gradient-to-tl from-white/10 to-transparent  lg:flex-1 w-full  rounded-3xl border-1 border-[#363749]">
            <Image
              className="object-cover rounded-3xl w-full h-auto"
              src={WorldMap}
              alt="world-img"
            />
            <div className="absolute top-[100px] right-[40px] border-1 text-white border-[#6971A2] rounded-3xl px-4 py-2 bg-[#161A31]/10">
              Sigapore
            </div>
            <div className="absolute top-[120px] left-[40px] border-1 text-white border-[#6971A2] rounded-3xl px-4 py-2 bg-[#161A31]/10">
              USA
            </div>
            <div className="absolute bottom-[25px] left-[250px] border-1 text-white border-[#6971A2] rounded-3xl px-4 py-2 bg-[#161A31]/10">
              Germany
            </div>
            <h4 className="absolute top-10 left-10 text-white text-[30px] font-bold">
              Remote-Ready Developer
            </h4>
          </div>
          <div className="flex h-[300px] lg:flex-1 flex-col relative px-[15px] bg-gradient-to-b from-[#04071D] to-[#0C0E23] rounded-3xl border-1 border-[#363749]">
            <div className="absolute top-[100px] left-5 text-white">
              <p>I constantly try to improve</p>
              <h4 className="text-[32px] font-bold">My Tech Stack</h4>
            </div>

            {/*this one is absolute and contain the tech stack*/}
            <div className="overflow-hidden">
              {/*contains 2 divs from 2 containers of technologies*/}
              <div className="absolute top-0 right-8 h-full overflow-hidden">
                <TechScroll />
              </div>
              <div className="absolute top-0 right-[200px] h-full overflow-hidden">
                <DbScroll />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[400px] lg:mt-[25px] flex flex-col  lg:flex-row gap-[25px] h-[390px] font-inter">
        <div className="flex-1/3 flex flex-col gap-[25px]">
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
        <div className="flex-2/3 h-[390px] flex flex-row rounded-3xl border-1 border-[#363749] bg-gradient-to-b from-[#04071D] to-[#0C0E23]">
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
