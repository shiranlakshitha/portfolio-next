import Image from 'next/image'
import React from 'react'
import IntroImg from '../assets/image.png'
import WorldMap from '../assets/section input.png'
const Intro = () => {
  return (
    <div>
        <div>
            <div>
                <Image src={IntroImg} width={500} height={500} alt='intro-img' />
            </div>
            <div>
                <div>
                    <Image src={WorldMap} width={500} height={500} alt='world-img' />
                </div>
                <div></div>
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