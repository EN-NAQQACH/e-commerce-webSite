"use client"
import React,{useState} from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Mobile from './MenuMobile'
import MenuBig from './MenuBig';

function Navbar() {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <div className='Navbar'>
            <nav className='flex text-[13px] h-[70px] items-center justify-between p-7 bg-gray-200'>
                <div className=''>
                    <p>E-commerce</p>
                </div>
                
                 <Mobile isOpen={open}/>
                 
                 <MenuBig />
               
                <div className=' flex items-center gap-2'>
                    <FaRegUser size={17} />
                    <FiShoppingCart size={17} />
                    <button className='border-1 p-2 border-gray-900'>login</button>
                    {open ? <FaXmark className='text-2xl md:hidden' onClick={() => setOpen(prev => !prev)} /> : <IoMenuOutline className='text-2xl md:hidden' onClick={() => setOpen(prev => !prev)} />}
                </div>

            </nav>
        </div>
    )
}

export default Navbar