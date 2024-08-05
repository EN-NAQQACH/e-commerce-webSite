import React from 'react'
import { GrInstagram } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";


function Footer() {
  return (
    <div className='h-fit text-[14px] w-[100%] bg-gray-50 lg:py-24 lg:px-6 xl:px-24 md:py-10 md:px-20 px-5 py-10'>
      <div className='footer-container h-fit'>
        <div className='footer-content md:flex md:gap-20 lg:gap-5 xl:gap-20 md:justify-center flex flex-col gap-10 sm:flex-row'>
          {/* left */}
          <div className='Left flex flex-col gap-6 lg:w-1/4 md:w-1/2'>
            <div className='font-bold'>
              E-commerce
            </div>
            <div className='text-justify'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Facilis cumque incidunt, modi id
            </div>
            <div className='flex flex-col gap-4'>
              <span>examil@example.com</span>
              <p >+2126150390244</p>
              <div className='SOCAILLINKS flex items-center gap-3 cursor-pointer'>
                <GrInstagram size={18} className='hover:scale-125 transition-all duration-500'/>
                <RiTwitterXLine size={18} className='hover:scale-125 transition-all duration-500'/>
                <FaFacebook size={18} className='hover:scale-125 transition-all duration-500'/>
              </div>
            </div>
          </div>
          <div className='center hidden lg:flex justify-center md:gap-12 w-1/2'>
            <div className='PART1 flex flex-col gap-16 w-[120px]'>
              <div className='font-bold'>COMPANY</div>
              <div className='flex flex-col gap-4'>
                <p  className='hover:font-semibold hover:underline'>About us</p>
                <p className='hover:font-semibold hover:underline cursor-pointer' >Careers</p>
                <p className='hover:font-semibold hover:underline cursor-pointer' >Work with us</p>
                <p className='hover:font-semibold hover:underline cursor-pointer' >Blogs</p>
              </div>
            </div>
            <div className='PART2 flex flex-col gap-16 w-[120px] '>
              <div className='font-bold'>SHOP</div>
              <div className='flex flex-col gap-4 '>
                <p className='hover:font-semibold hover:underline cursor-pointer' >Men</p>
                <p className='hover:font-semibold hover:underline cursor-pointer' >Women</p>
                <p className='hover:font-semibold hover:underline cursor-pointer' >All Products</p>
              </div>
            </div>
            <div className='PART3 flex flex-col gap-16 w-[120px]'>
              <div className='font-bold'>COMPANY</div>
              <div className='flex flex-col gap-4'>
                <p className='hover:font-semibold hover:underline cursor-pointer' >About us</p>
                <p className='hover:font-semibold hover:underline cursor-pointer' >Careers</p>
                <p className='hover:font-semibold hover:underline cursor-pointer' >Work with us</p>
                <p className='hover:font-semibold hover:underline cursor-pointer' >Blogs</p>
              </div>
            </div>
          </div>
          <div className='RIGHT flex flex-col gap-6  lg:w-1/4 md:w-1/2'>
            <div className='font-bold' >
              SUBSCRIBE
            </div>
            <div>
              <p  className='w-[100%] text-justify'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            </div>
            <div className=' flex items-center justify-end'>
              <input type="text" className='w-[100%] p-3 outline-none' />
              <button className=' bg-black text-white p-3'>subcribe</button>
            </div>
            <div>
              <p  className='font-bold'>Secure Payment</p>
              <div className='w-[100%]'>
                <img src="/paypal.png" className="sm:w-[200px] w-1/2" />
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className='BOTTOM text-center mt-20'>
          <span>ALL Right Reserved @2024 </span>
        </div>
    </div>
  )
}

export default Footer