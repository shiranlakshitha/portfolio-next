import Image from 'next/image'
import React from 'react'
import IntroImg from '../assets/image.png'
import WorldMap from '../assets/section input.png'
import TechScroll from '../components/TechScroll'
import Pointer1 from '../assets/Group.png'
import Pointer2 from '../assets/Button.png'
import DbScroll from './DbScroll'

const Intro = () => {
  return (
    <div className='px-[75px] my-[50px]'>
        <div className='flex flex-row h-[540px] gap-[25px] font-inter'>
            <div className='flex-1 h-[540px] relative w-full rounded-3xl'>
                <Image src={IntroImg} className='object-cover rounded-3xl h-full w-full' alt='intro-img' />
                <Image className='absolute right-10 bottom-[75px]' src={Pointer1} alt='pointer-1' />
                <Image src={Pointer2} className='absolute left-10 top-[75px]' alt='pointer-2' />
                <h4 className='absolute bottom-5 left-5 font-bold text-white w-[400px] text-[35px]'>
                    I prioritize client collaboration, fostering open communication 
                </h4>
            </div>
            <div className='flex flex-1 gap-[25px] flex-col'>
                <div className='relative bg-gradient-to-tl from-white/10 to-transparent flex-1 w-full h-[20vh] rounded-3xl border-1 border-[#363749]'>
                    <Image className='object-cover rounded-3xl w-full h-auto' src={WorldMap} alt='world-img' />
                    <h4 className='absolute top-10 left-10 text-white text-[30px] font-bold'>Remote-Ready Developer</h4>
                </div>
                <div className='flex flex-1 flex-col relative px-[15px] bg-gradient-to-b from-[#04071D] to-[#0C0E23] rounded-3xl border-1 border-[#363749]'>
                    <div className='absolute top-[100px] left-5 text-white'>
                        <p>I constantly try to improve</p>
                        <h4 className='text-[32px] font-bold'>My Tech Stack</h4>
                    </div>
                    
                    {/*this one is absolute and contain the tech stack*/}
                    <div className='overflow-hidden'>
                        {/*contains 2 divs from 2 containers of technologies*/}
                        <div className='absolute top-0 right-8 h-full overflow-hidden'>
                            <TechScroll />
                        </div>
                        <div className='absolute top-0 right-[200px] h-full overflow-hidden'>
                            <DbScroll />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <div></div>
                <div></div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default Intro