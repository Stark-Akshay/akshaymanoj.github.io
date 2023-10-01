import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <section>
        <div className='p-10'>
            <p className='text-text min-[320px]:text-3xl md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]'>PROJECTS</p>
        </div>
        <div className='flex flex-row flex-wrap  p-10 justify-around'>
          <Card url="walking.jpg" title="Walking route finder" 
          desc1="Developed a user-centric web app, integrating Strava API and employing Google Maps and 
          Google's Distance Matrix API for enhanced route visualization and user experience."
           desc2="Adhered to Agile methodology, utilizing Scrum practices for flexible and collaborative project 
           management."/>
<Card url="barber.jpg" title="Customer reward PWA" 
desc1="Engineered a comprehensive PWA, focusing on collaboration and Cloud-based services to 
provide a seamless interaction between customers and administrators."
desc2="Embraced Agile methodologies and leveraged Scrum practices to facilitate flexibility and foster collaborative project management."/>
          
          </div>
    </section>
  )
}

export default Projects