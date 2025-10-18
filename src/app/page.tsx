import Navbar from "@/components/Navbar";
import LiquidEther from "../components/Hero";
import Intro from "@/components/Intro";
import Timeline from "@/components/Timeline";
export default function Home() {
  return (
    <>
      <div className="relative">
      <div className="absolute left-0 top-[50px] z-50 hidden md:flex items-center mx-auto w-full justify-center">
        <Navbar />
      </div>
      <div className="bg-[#000319]" style={{ width: "100%", height: "100vh", position: "relative" }}>
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={40}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>
    </div>
    {/*intro section*/}
    <div>
      <Intro />
    </div>
    {/*timeline section*/}
    <div>
      <Timeline />
    </div>
    
    
    </>
  );
}
