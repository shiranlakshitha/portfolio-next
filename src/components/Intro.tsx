import Image from 'next/image'
import React from 'react'
import IntroImg from '../assets/image.png'
import WorldMap from '../assets/section input.png'
import TechScroll from '../components/TechScroll'
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
                <div>
                    <div>the text</div>
                    {/*this one is absolute and contain the tech stack*/}
                    <div>
                        {/*contains 2 divs from 2 containers of technologies*/}
                        <div>
                            <TechScroll />
                        </div>
                        <div></div>
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