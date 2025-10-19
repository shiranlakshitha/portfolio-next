import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className='py-[50px] grid grid-cols-2 justify-items-center'>
        <ProjectCard />
        <ProjectCard />
    </div>
  )
}

export default Projects