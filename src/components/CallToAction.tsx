import React from 'react'
import RippleGrid from './RippleGrid';
import BorderBeamDemo from './Borderbeambtn';

const CallToAction = () => {
  return (
    <div className='w-full relative'>
        <div className='z-10'>
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
        <div className='absolute text-white font-inter top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='text-[48px] font-bold'>Ready to take <span className='text-[#CBACF9]'>your </span> digital presence to the next level?</h1>
            <p className='text-[#C1C2D3]'>Reach out to me today and let's discuss how I can help you achieve your goals.</p>
            <div className='mt-[25px] w-[250px] mx-auto flex items-center'>
                <BorderBeamDemo input={'Contact Me Now'}/>

            </div>
        </div>
    </div>
  )
}

export default CallToAction