import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <section id='projects' className='w-full px-[15px] md:px-[95px]'>
        <div>
            <h1 className='text-[48px] text-white font-inter text-center'>A small selection of <span className='text-[#CBACF9]'>recent projects</span></h1>
        </div>
        <div className='py-[50px]  grid grid-cols-1 md:grid-cols-2 justify-items-center gap-[15px] md:gap-y-[55px] md:gap-x-0'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
    </div>
    </section>
  )
}

export default Projects