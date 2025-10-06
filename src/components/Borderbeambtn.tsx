import { BorderBeam } from "@/components/lightswind/border-beam";
import { MdArrowOutward } from "react-icons/md";

export default function BorderBeamDemo() {
  return (
    <div className="relative p-1 rounded-lg overflow-hidden  bg-gradient-to-r from-[#161A31] to-black/90">
      <BorderBeam 
        colorFrom="#7400ff" 
        colorTo="#9b41ff" 
        size={50}
        duration={6}
        borderThickness={2}
        glowIntensity={3}
      />
      <div className="relative flex flex-row gap-3 bg-card text-white p-2 rounded-md z-10">
        See My Work
        <MdArrowOutward />
      </div>
    </div>
  );
}