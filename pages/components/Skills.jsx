import React from 'react';
import {SiNextdotjs, SiCreatereactapp,SiTailwindcss, SiFirebase} from "react-icons/si";

const Skills = () => {
  return (
    <section>
        <div className='p-10'>
            <p className='text-text min-[320px]:text-3xl md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]'>SKILLS</p>
        </div>
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex flex-row justify-around items-center w-80 py-5'>
            <SiNextdotjs className='text-5xl text-text'/>
            <progress className="progress w-56" value="80" max="100"></progress>
            </div>

            <div className='flex flex-row justify-around items-center w-80 py-5'>
            <SiCreatereactapp className='text-5xl text-text'/>
            <progress className="progress w-56" value="100" max="100"></progress>
            </div>

            <div className='flex flex-row justify-around items-center w-80 py-5'>
            <SiTailwindcss className='text-5xl text-text'/>
            <progress className="progress w-56" value="90" max="100"></progress>
            </div>

            <div className='flex flex-row justify-around items-center w-80 py-5'>
            <SiFirebase className='text-5xl text-text'/>
            <progress className="progress w-56" value="60" max="100"></progress>
            </div>
        
        </div>
    </section>
  )
}

export default Skills