import React from 'react'
import {FaInstagram, FaGithub, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='py-10 px-4'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left'>
        <div className='mb-6 md:mb-0'>
          <h2 className='text-xl font-semibold'>
            Chirag Vaibhav Rane
          </h2>
          <p className='text-slate-500 text-md'>
            Full Stack Developer | Data Scientist
          </p>
        </div>


        <div className='flex gap-6 text-2xl'>
          <a href="https://www.instagram.com/chiragrane04/" className='hover:text-rose-400 duration-300 transition-colors'>
            <FaInstagram/>
          </a>

          <a href="https://www.linkedin.com/in/me/" className='hover:text-sky-500 duration-300 transition-colors'>
            <FaLinkedin/>
          </a>

          <a href="https://github.com/chiragRane-Projects/Traventure.git" className='hover:text-slate-700 duration-300 transition-colors'>
            <FaGithub/>
          </a>
        </div>
      </div>

      <p className='text-center text-gray-600 mt-6 text-sm'>&copy; {new Date().getFullYear()} Chirag Vaibhav Rane. All rights reserved.</p>
    </footer>
  )
}

export default Footer