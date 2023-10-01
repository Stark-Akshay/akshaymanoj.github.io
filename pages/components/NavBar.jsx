import Link from 'next/link';
import {MdClear, MdMenu} from "react-icons/md"
import React, { useState } from 'react'

const NavBar = () => {
  const [Clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(!Clicked);
  }
  return (
    <>
  
    <div className=' flex flex-row justify-between w-full h-full px-10 p-5 text-text items-center min-[320px]:hidden lg:flex' id='nav-parent'>
      <div id='nav-child brand' className='items-center h-full w-full'>
        <p className=' font-sans text-2xl'>Akshay Manoj</p>
      </div>
      <div className='nav-child flex-row flex justify-between items-center w-full text-xl'>
        <Link  href="/">Home</Link>
        <Link href="#Projects">Projects</Link>
        <Link  href="#Qualification">Qualification</Link>
        <Link  href="#Experience">Experience</Link>
        <Link href="#ContactMe">Contact Me</Link>
        <a href="resume.pdf" passhref download='resume.pdf'><button className='bg-ascent p-3 rounded-lg flex items-center justify-center '>Resume</button></a>
        
      </div>        
    </div>

    <div className='flex flex-row justify-between w-full h-full  p-5 text-text items-center min-[320px]:flex lg:hidden' id='nav-parent'>
      <div id='nav-child brand' className='items-center h-full'>
        <p className=' font-sans text-2xl'>Akshay Manoj</p>
      </div>    
      <div className='nav-child flex-row flex justify-end items-center w-1/3 text-xl relative'>
        
       {Clicked ? <MdClear className='text-4xl' onClick={handleClicked}/> : <MdMenu className='text-4xl' onClick={handleClicked}/>}
       
       {Clicked && 
        <div className='absolute top-10 rounded-lg w-80 align-middle justify-between h-60 bg-ascent flex'>
          <div className='nav-child flex-col flex w-full text-xl justify-around items-center py-1 '>
        <Link  href="/">Home</Link>
        <Link href="#Projects">Projects</Link>
        <Link  href="#Qualification">Qualification</Link>
        <Link  href="#Experience">Experience</Link>
        <Link href="#ContactMe">Contact Me</Link>
        <a href="resume.pdf" passhref download='resume.pdf'><button className='bg-second p-2 rounded-lg flex items-center justify-center '>Resume</button></a>
        
      </div>  
        </div>
       }
      </div> 
    </div>
    </>  
  )
}

export default NavBar