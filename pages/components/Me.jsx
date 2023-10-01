import Image from 'next/image'
import React from 'react'
import Divider from './Divider'

const Me = () => {
  return (
    <>
    <section className='flex sm:h-[50vh] md:h-[50vh] lg:h-[60vh] justify-between flex-row flex-wrap'>
        <div className='p-10 flex flex-col justify-around'>
          <p className='text-ascent text-opacity-50 min-[320px]:text-2xl sm:text-5xl md:text-5xl lg:text-5xl'>Hi I am a</p>
          <p className='text-text min-[320px]:text-4xl md:text-[6rem] sm:text-[6rem] lg:text-[6rem]'>Front-end</p>
          <p className='text-text min-[320px]:text-4xl md:text-[6rem] sm:text-[6rem] lg:text-[6rem]'>Web Developer</p>

        </div>

      
    </section>

    <section className='flex h-full w-full flex-row min-[320px]:flex-wrap sm:flex-nowrap sm:justify-around items-center min-[320px]:justify-center'>
     

      <img src="me3.png" alt="profile-image" className='rounded-full min-[320px]:w-[10rem] md:w-[25rem] m-5'/>
      


      <div className='border-4 border-ascent flex justify-center items-center h-fit w-[50rem] p-5 m-10 '>
        <p className='text-text min-[320px]:text-md md:text-xl'>I am a Front-end Developer with a passion for creating user-centric and innovative web applications using a diverse tech stack including JavaScript, Python, and PHP, and frameworks like ReactJS and Django. My expertise is marked by a strong foundation in software development, highlighted by experience in leading complex projects and mentoring teams. With a relentless pursuit of learning and implementing modern development practices and technologies, I’m devoted to contributing to cutting-edge UI design and advancing in areas like AI and cybersecurity.</p>
      </div>


      
    </section>
    
    </>
    
  )
}

export default Me