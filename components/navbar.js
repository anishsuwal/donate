

import Image from "next/image"

import logo from "../image/logo.png"
import React from 'react'


import { useState } from 'react'



export default function Navbar() {



  const Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/#aboutus" },
    { name: "CAUSES", link: "/products" },
    { name: "GALLERY", link: "/token" },   
    { name: "CONTACT", link: "/#contactus" }
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className=' w-full mt-5  top-0 left-0  p-1 z-50 bg-[#eeebe0] 
     border-b shadow-2xl border-[#948ba7] text-[#1d0a5b]'>
      <div className='flex items-center justify-between  '>
        <div className='font-bold text-2xl  flex items-center 
      '>
   

          <div className="flex ml-10  pr-2 w-72">
          <a href="#home">

          <Image
            src={logo}
            alt="Donate" 
             />
                         </a>

        </div>

        </div>
        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer lg:hidden'>
          <button name={open ? 'close' : 'menu'}><div className="w-5 h-1 bg-yellow-400 mb-1"></div>
            <div className="w-5 h-1 bg-yellow-400 mb-1"></div>
            <div className="w-5 h-1 bg-yellow-400"></div></button>
        </div>
        <ul className={`lg:flex lg:items-center  lg:pb-0 pb-12 absolute  
       lg:static   lg:z-auto z-[-1] right-0 items-center lg:w-auto lg:pl-0 pl-9
        transition-all duration-500 ease-in ${open ? 'top-20 bg-[#eeebe0]  lg:bg-transparent ' : 'top-[-490px] bg-transparent'}`}>
          {
            Links.map((link) => (
              <li key={link.name} className='ml-10   lg:my-0 my-7 text-center   pr-20 lg:pr-0  '>

                <a href={link.link} onClick={() => setOpen(!open)} className='font-semibold  hover:text-[#483977]  '>{link.name}</a>

              </li>
            )) 
          }
          <div className="lg:flex flex-1 inline-block text-sm  py-4 pl-10  mr-20 leading-none  rounded">
            <a href="#" 
              className=" border-[#483977] bg-[#1d0a5b] text-[#eeebe0] border shadow-2xl   text-base font-medium rounded-full inline-flex lg:w-40 h-10 w-full    
              py-2 px-5 mx-4 text-center justify-center items-center hover:bg-yellow-500"
            >
              <span className="px-1  text-sm">Connect Wallet</span>
            </a>
            
                    </div>
        </ul>
      </div>
    </div>
  ) 
}

