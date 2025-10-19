import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='text-white w-full font-inter flex flex-row items-center justify-between'>
        <div>Copyright ©{new Date().getFullYear()} Shiran Lakshitha. Built with Next.js & Typescript ❤️</div>
        <div className='flex flex-row items-center gap-5 text-white'>
            <VscGithub size={25} className='cursor-pointer'/>
            <FaWhatsapp size={25} className='cursor-pointer'/>
            <FaLinkedin size={25} className='cursor-pointer'/>
        </div>
    </div>
  )
}

export default Footer