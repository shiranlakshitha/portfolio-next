import React from 'react'
import RippleGrid from './RippleGrid';
import BorderBeamDemo from './Borderbeambtn';
import Footer from './Footer';
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section id='contact' className='w-full relative min-h-[100vh]'>
        <div className='absolute inset-0 z-10 w-full h-full'>
            <RippleGrid
    enableRainbow={false}
    gridColor="#5227FF"
    rippleIntensity={0.05}
    gridSize={10}
    gridThickness={15}
    mouseInteraction={true}
    mouseInteractionRadius={1.2}
    opacity={0.8}
  />
        </div>
        <div className='absolute z-20 text-white font-inter top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full px-[15px] md:px-[25px]'>
            <h1 className='text-[36px] md:text-[48px] text-center mx-auto font-bold max-w-[900px]'>Ready to take <span className='text-[#CBACF9]'>your </span> digital presence to the next level?</h1>
            <p className='text-[#C1C2D3]'>Reach out to me today and Let&apos;s discuss how I can help you achieve your goals.</p>
            <div className='mt-[25px] w-full mx-auto flex items-center justify-center'>
                <Link href='mailto:shiranlakshithareal@gmail.com' target="_blank" rel="noopener noreferrer"><BorderBeamDemo input={'Contact Me Now'}/></Link>

            </div>
        </div>
        <div className='absolute z-50 bottom-5 w-full px-[15px] md:px-[25px]'>
            <Footer />
        </div>
    </section>
  )
}

export default CallToAction