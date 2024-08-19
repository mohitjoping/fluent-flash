"use client"; // Ensure this line is at the top

import React, { useState } from 'react';


type Props = {}

export default function Navbar({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className='w-full h-[8vh] mt-3 flex flex-1 gap-4 bg-white text-black justify-between items-center px-10 '>
      <div className="Fluentflash text-blue-900 text-5xl font-extrabold font-['Inter']">FluentFlash</div>
        
        <div className='hidden md:flex flex-row gap-4'>
          <ul className='flex flex-row items-center gap-4 text-black mr-2'>
            <li className='font-normal hover:text-[#1F3A8A]'>Home</li>
            <li className='font-normal hover:text-[#1F3A8A]'>Pricing</li>
            <li className='font-normal hover:text-[#1F3A8A]'>FAQ</li>
          </ul>
        </div>
        
        <div className='flex items-center gap-4 '>
        <button className="mx-auto w-30 h-10 py-1 px-2.5 rounded-md border-2 border-[#323232] bg-[#fff] shadow-[4px_4px_0_#000000] text-lg font-semibold text-[#323232] cursor-pointer active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
          login
        </button>{" "}
          <button className="mx-auto w-30 h-10 py-1 px-2.5 rounded-md border-2 border-[#323232] bg-[#fff] shadow-[4px_4px_0_#000000] text-lg font-semibold text-[#323232] cursor-pointer active:shadow-none active:translate-x-[3px] active:translate-y-[3px]">
            sign up
          </button>

          {/* Hamburger Icon */}
          <div className='md:hidden'>
            <input id="checkbox" type="checkbox" className="hidden" onClick={() => setIsOpen(!isOpen)} />
            <label className="toggle relative w-10 h-10 cursor-pointer flex flex-col items-center justify-center gap-2.5 transition duration-300" htmlFor="checkbox">
              <div id="bar1" className="bars w-full h-1 bg-black rounded transition duration-300 origin-left" style={isOpen ? { transform: 'translateY(28px) rotate(-60deg)' } : {}}></div>
              <div id="bar2" className="bars w-full h-1 bg-black rounded transition duration-300 origin-right" style={isOpen ? { transform: 'translateY(14px) rotate(60deg)' } : {}}></div>
              <div id="bar3" className="bars w-full h-1 bg-black rounded transition duration-300"></div>
            </label>
          </div>
        </div>
      </section>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-transparent text-black px-10 py-4'>
          <ul className='flex flex-col gap-4'>
            <li className='font-normal hover:font-light'>Home</li>
            <li className='font-normal hover:font-light'>Pricing</li>
            <li className='font-normal hover:font-light'>Generate</li>
          </ul>
        </div>
      )}
    </>
  )
}
