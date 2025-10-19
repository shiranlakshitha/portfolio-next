import React from 'react'
import RippleGrid from './RippleGrid';

const CallToAction = () => {
  return (
    <div className='w-full'>
        <div>
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
    </div>
  )
}

export default CallToAction