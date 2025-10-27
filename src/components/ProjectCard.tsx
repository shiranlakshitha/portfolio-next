import Image from 'next/image'
import React from 'react'


const ProjectCard = ({title, description, languages, imgurl, live}: {title: string, description: string, languages: [], imgurl: string}) => {
  return (
    <div className='max-w-[600px] p-[25px] bg-[#04071D] flex flex-col gap-[25px] text-white font-inter rounded-3xl border-1 border-[#363749] group'>
        <div className='rounded-2xl'>
            <Image src={imgurl} width={550} height={300} className='rounded-2xl object-cover group-hover:scale-105 duration-200' alt='this is an image'/>
        </div>
        <div className='flex flex-col gap-2'>
            <div>
                <h3 className='text-[32px]'>{title}</h3>
                <p className='text-[20px] text-[#BEC1DD]'>{description}</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <div>{languages}</div>
                <div className='flex flex-row items-center gap-2'>
                    <p className='underline'>live site</p>
                    <p>icon</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard