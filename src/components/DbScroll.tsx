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

const DbScroll = () => {
  return (
    <div className="hide-scrollbar w-full h-full overflow-hidden rounded-2xl p-4 relative">
      <div className="animate-scroll-down flex flex-col space-y-4">
        {/* Duplicate the list for seamless infinite scroll */}
        {[...techStack, ...techStack].map((tech, index) => (
          <div
            key={index}
            className="bg-[#0d0f1a] text-white px-6 py-3 rounded-xl border border-gray-700 hover:border-indigo-500 hover:bg-[#1a1d2f] transition-all duration-300 flex-shrink-0"
          >
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DbScroll;
