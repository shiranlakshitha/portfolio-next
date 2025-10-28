import React from 'react'
import ProjectCard from './ProjectCard'

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  link: string;
}


const getProjects = async (): Promise<Project[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/project`)
  return res.json()
}

const Projects = async () => {
  const project = await getProjects()
  return (
    <section id='projects' className='w-full px-[15px] md:px-[95px]'>
        <div>
            <h1 className='text-[48px] text-white font-inter text-center'>A small selection of <span className='text-[#CBACF9]'>recent projects</span></h1>
        </div>
        <div className='py-[50px]  grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[25px] md:gap-[15px] md:gap-y-[55px] md:gap-x-0'>
        {
          project?.map((project: Project) => (
            <ProjectCard key={project._id} title={project.title} description={project.description} imgurl={project.image}  languages={project.techStack} live={project.link}/>
          ))
        }
    </div>
    </section>
  )
}

export default Projects