'use client'
import React, { useState } from 'react'
import GooeyNav from './NavbarMenu';
import { HamburgerMenuOverlay } from "@/components/lightswind/hamburger-menu-overlay"
import Image from 'next/image';
import profilepic from '../assets/44.jpg'

const items = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#timeline" },
  { label: "Work", href: "#projects" },
  
    { label: "Contact", href: "#contact" },
];


const Navbar = () => {

  const [activeItem, setActiveItem] = useState("Home")

  const handleNavClick = (label: string, href: string) =>  {
    setActiveItem(label)

    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
      setActiveItem('Home')
    
  }
  return (
    <>
      <div className='hidden md:blockrelative px-[15px] sm:px-[25px] md:px-[50px] lg:px-[100px] py-[10px]'>

         {/* Content layer without blur */}
      <div className="relative z-20 flex flex-row justify-around max-md:items-center gap-[120px] md:gap-3">
        <div className='w-10 h-10 rounded-full border-white border-1'>
          <Image src={profilepic} className='object-cover w-full h-full rounded-full' alt='profile-img'/>
        </div>
        <GooeyNav
          items={items}
          activeItem={activeItem}
          onItemClick={handleNavClick}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
        
      </div>
      {/* Separate blur background layer */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl shadow-lg -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent rounded-xl"></div>
      </div>

      

    </div>

    <div className='z-50 md:hidden'>
        <HamburgerMenuOverlay items={items}/>
    </div>

    
    
    </>
  )
}

export default Navbar