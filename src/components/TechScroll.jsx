import React from "react";
import "../app/globals.css";

const techStack = [
  "ReactJS",
  "VueJS",
  "NextJS",
  "NuxtJS",
  "Express",
  "NestJS",
  "TypeScript",
  "GraphQL",
  "NodeJS",
  "MongoDB",
  "PostgreSQL",
  "Docker",
];

const TechScroll = () => {
  return (
    <div className="hide-scrollbar w-full h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 rounded-2xl p-4">
      <div className="flex flex-col space-y-4 min-h-max">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="bg-[#0d0f1a] text-white px-6 py-3 rounded-xl border border-gray-700 hover:border-indigo-500 hover:bg-[#1a1d2f] transition-all duration-300"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroll;
