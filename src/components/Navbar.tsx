import React from 'react'
import GooeyNav from './NavbarMenu';
import { CiMenuBurger } from "react-icons/ci";
import Image from 'next/image';
import profilepic from '../assets/44.jpg'

const items = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Testimonial", href: "#" },
    { label: "Contact", href: "#" },
];


const Navbar = () => {
  return (
    <div className='relative px-[15px] sm:px-[25px] md:px-[50px] lg:px-[100px] py-[10px]'>

         {/* Content layer without blur */}
      <div className="relative z-20 flex flex-row justify-around max-md:items-center gap-[120px] md:gap-3">
        <div className='w-10 h-10 rounded-full border-white border-1'>
          <Image src={profilepic} className='object-cover w-full h-full rounded-full' alt='profile-img'/>
        </div>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
        <CiMenuBurger />
      </div>
      {/* Separate blur background layer */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl"></div>
      </div>

    </div>
  )
}

export default Navbar