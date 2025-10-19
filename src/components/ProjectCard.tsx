import Image from 'next/image'
import React from 'react'
import image from '../assets/image.png'

const ProjectCard = () => {
  return (
    <div className='w-[600px] p-[25px] bg-[#04071D] flex flex-col gap-[25px] text-white font-inter rounded-3xl border-1 border-[#363749]'>
        <div className='rounded-2xl'>
            <Image src={image} className='rounded-2xl object-cover' alt='this is an image'/>
        </div>
        <div className='flex flex-col gap-2'>
            <div>
                <h3 className='text-[32px]'>the title</h3>
                <p className='text-[20px] text-[#BEC1DD]'>the description</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div>languages here</div>
                <div className='flex flex-row items-center gap-2'>
                    <p>live site</p>
                    <p>icon</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard