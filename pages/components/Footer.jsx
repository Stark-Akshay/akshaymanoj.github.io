import React from 'react';
import {MdEmail} from 'react-icons/md';
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer class="footer p-10 bg-second text-base-content flex w-full min-[320px]:flex-col md:flex-row justify-around">
  <nav>
    <header class="footer-title">Services</header> 
    <a class="link link-hover">Web Development</a> 
    <a class="link link-hover">Project Management</a> 
    <a class="link link-hover">API Integeration</a> 
  </nav> 

  <nav>
    <header class="footer-title">Contact Me</header> 
    <div className='flex min-[320px]:flex-col md:flex-row justify-around w-full'>
    <a className='link link-hover' href="mailto:akshaymanoj.dms@gmail.com?subject=Would%20Love%20to%20hire%20you" >  
            <MdEmail className='text-text text-4xl'></MdEmail> </a> 
            <a href="https://www.instagram.com/oneshortfocus" target="_blank">  
            <AiFillInstagram className='text-text text-4xl'></AiFillInstagram> </a>
            <a href="https://www.linkedin.com/in/akshay-manoj-b97144179/" target="_blank">  
            <AiFillLinkedin className='text-text text-4xl'></AiFillLinkedin> </a>
          
    </div>
      
  </nav> 
</footer>
  )
}

export default Footer