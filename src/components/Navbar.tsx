"use client"
import React, { useState, useRef, useEffect } from 'react'
import { IoMenuOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Mobile from './MenuMobile'
import MenuBig from './MenuBig';
import Dropdownmenu from './Dropdownmenu';
import CartShopping from './CartShopping';
import Link from 'next/link';

function Navbar() {
    const [open, setOpen] = useState<boolean>(false);
    const [openProfile, setopenProfile] = useState(false);
    const [openCart, setopenCart] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const cartRef = useRef<HTMLDivElement>(null);
    const handleOpenProfile = () => {
        setopenProfile(prev => !prev)
    }
    const handleOpenCart = () => {
        setopenCart(prev => !prev)
    }
    const handleClickOutsideCart = (event: MouseEvent) => {
        if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
            setopenCart(false);
        }
    };
    const handleClickOutsideProfile = (event: MouseEvent) => {
        if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
            setopenProfile(false);
        }
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideProfile);
        document.addEventListener('mousedown', handleClickOutsideCart);
        return () => {
            document.removeEventListener('mousedown', handleClickOutsideProfile);
        };
    }, []);
    return (
        <div className='Navbar'>
            <nav className='flex text-[13px] h-[70px] items-center justify-between p-7 bg-gray-50'>
                <div className=''>
                    <b>E-commerce</b>
                </div>
                <Mobile isOpen={open} />
                <MenuBig />
                <div className=' flex items-center gap-5'>
                    <FaRegUser size={17} className='cursor-pointer' onClick={() => handleOpenProfile()} />
                    <div ref={profileRef} className={`absolute z-10 top-[55px] right-[130px] w-[180px] h-fit border rounded-xl shadow-md bg-gray-50 text-black border-white transition-opacity duration-300 ease-in-out ${openProfile ? 'opacity-100 scale-100' : 'opacity-0 scale-100 pointer-events-none'}`}>
                        <Dropdownmenu />
                    </div>
                    <FiShoppingCart size={17} className='cursor-pointer' onClick={() => handleOpenCart()} />
                    <div ref={cartRef} className={`absolute z-10 top-[55px] right-[100px] w-[300px] h-fit  rounded-xl  shadow-md bg-gray-50 text-black border-white transition-opacity duration-300 ease-in-out ${openCart ? 'opacity-100 scale-100' : 'opacity-0 scale-100 pointer-events-none'}`}>
                        <CartShopping />
                    </div>

                    <button className='border-1 p-2 border-gray-900'>login</button>
                    {open ? <FaXmark className='text-2xl md:hidden' onClick={() => setOpen(prev => !prev)} /> : <IoMenuOutline className='text-2xl md:hidden' onClick={() => setOpen(prev => !prev)} />}
                </div>
            </nav>
        </div>
    )
}

export default Navbar