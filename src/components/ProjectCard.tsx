import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { 
  FaReact, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaGitAlt,
  FaDocker 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiPrisma,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiFramer
} from "react-icons/si";

const getTechIcon = (tech: string) => {
  const techLower = tech.toLowerCase();
  
  const iconMap: { [key: string]: JSX.Element } = {
    react: <FaReact className="text-[#61DAFB]" />,
    nextjs: <SiNextdotjs className="text-white" />,
    "next.js": <SiNextdotjs className="text-white" />,
    typescript: <SiTypescript className="text-[#3178C6]" />,
    javascript: <FaJs className="text-[#F7DF1E]" />,
    nodejs: <FaNodeJs className="text-[#339933]" />,
    "node.js": <FaNodeJs className="text-[#339933]" />,
    html: <FaHtml5 className="text-[#E34F26]" />,
    css: <FaCss3Alt className="text-[#1572B6]" />,
    tailwind: <SiTailwindcss className="text-[#06B6D4]" />,
    tailwindcss: <SiTailwindcss className="text-[#06B6D4]" />,
    mongodb: <SiMongodb className="text-[#47A248]" />,
    express: <SiExpress className="text-white" />,
    expressjs: <SiExpress className="text-white" />,
    postgresql: <SiPostgresql className="text-[#336791]" />,
    mysql: <SiMysql className="text-[#4479A1]" />,
    python: <FaPython className="text-[#3776AB]" />,
    git: <FaGitAlt className="text-[#F05032]" />,
    docker: <FaDocker className="text-[#2496ED]" />,
    redis: <SiRedis className="text-[#DC382D]" />,
    graphql: <SiGraphql className="text-[#E10098]" />,
    prisma: <SiPrisma className="text-[#2D3748]" />,
    firebase: <SiFirebase className="text-[#FFCA28]" />,
    vercel: <SiVercel className="text-white" />,
    netlify: <SiNetlify className="text-[#00C7B7]" />,
    framer: <SiFramer className="text-[#0055FF]" />,
    "framer motion": <SiFramer className="text-[#0055FF]" />,
    "framer-motion": <SiFramer className="text-[#0055FF]" />
  };

  return iconMap[techLower] || <span className="text-xs">{tech}</span>;
};


const ProjectCard = ({title, description, languages, imgurl, live}: {title: string, description: string, languages: [], imgurl: string, live: string}) => {
  return (
    <div className='max-w-[600px] p-[25px] bg-[#04071D] flex flex-col gap-[25px] text-white font-inter rounded-3xl border-1 border-[#363749] group'>
        <div className='rounded-2xl flex items-center justify-center'>
            <Image src={imgurl} width={500} height={300} className='rounded-2xl object-cover group-hover:scale-105 duration-200' alt='this is an image'/>
        </div>
        <div className='flex flex-col gap-2'>
            <div>
                <h3 className='text-[32px]'>{title}</h3>
                <p className='text-[20px] text-[#BEC1DD]'>{description}</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div className='flex flex-wrap gap-3 items-center'>
                    {languages?.map((tech: string, index: number) => (
                        <div key={index} className='text-2xl hover:scale-110 transition-transform' title={tech}>
                            {getTechIcon(tech)}
                        </div>
                    ))}
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <a 
                        href={live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className='underline hover:text-[#CBACF9] transition-colors'
                    >
                        live site
                    </a>
                    <FaArrowRightLong size={15} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard