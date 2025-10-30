import React from 'react'
import { VscGithub } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <div className= 'text-white w-full font-inter flex flex-row items-center justify-between'>
        <div>Copyright ©{new Date().getFullYear()} Shiran Lakshitha. Built with Next.js & Typescript ❤️</div>
        <div className='flex flex-row items-center gap-5 text-white'>
            <Link href='https://github.com/shiranlakshitha' target="_blank"
    rel="noopener noreferrer"><VscGithub size={25} className='cursor-pointer transition-colors duration-300 hover:text-gray-400'/></Link>
            <Link href="https://wa.me/94785942488" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={25} className='cursor-pointer transition-colors duration-300 hover:text-green-400'/></Link>
            <Link href='https://www.linkedin.com/in/shiran-lakshitha-b95324314/' target="_blank"
    rel="noopener noreferrer"><FaLinkedin size={25} className='cursor-pointer transition-colors duration-300 hover:text-blue-400'/></Link>
        </div>
    </div>
  )
}

export default Footer