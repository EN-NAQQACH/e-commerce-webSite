"use client"
import React, { useState } from 'react'
import ListPage from '@/components/ListPage';
import ProductList from '@/components/ProductList';
import { IoIosStar } from "react-icons/io";

function Details_Reviews() {
  const buttons = ["details", "reviews"]
  const [display, setdisplay] = useState(buttons[0]);
  return (
    <div>
      <div className='mt-5'>
        <div className='flex items-center gap-5 p-2 rounded-3xl  bg-[#f8f8f8]'>
          {buttons.map((button, index) => {
            return <button className={`px-5 py-1 rounded-3xl transition-all duration-300 ease-in-out ${display === button ? 'bg-white text-black' : 'bg-transparent text-gray-500'}`} key={index} onClick={() => setdisplay(button)}  >{button}</button>
          })}
        </div>
        <div className='p-5  rounded-md '>
          {display == "reviews" ? (
            <div className='REVIEWS flex flex-col gap-5'>
              <div className='flex flex-col gap-2    '>
                <div className='flex items-center gap-2'>
                  <div className='w-[45px] h-[45px] rounded-full overflow-hidden'>
                    <img src="/product.jpg" alt="" className='w-full h-full' />
                  </div>
                  <div>
                    <p className='text-[15px] font-semibold'>Mohssine</p>
                  </div>
                </div>
                <div className='flex items-center gap-1 text-yellow-500'>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <div>
                  <p className='font-semibold'>Very durable</p>
                </div>
                <div className='w-[70%] text-[14px]'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aut nemo consectetur omnis voluptas earum deserunt nulla ad ullam quis laudantium iusto nostrum deleniti nesciunt nisi est, labore odit sit.</p>
                </div>
              </div>
              <hr />
              <div className='flex flex-col gap-2   '>
                <div className='flex items-center gap-2'>
                  <div className='w-[45px] h-[45px] rounded-full overflow-hidden'>
                    <img src="/product.jpg" alt="" className='w-full h-full' />
                  </div>
                  <div>
                    <p className='text-[15px] font-semibold'>Mohssine</p>
                  </div>
                </div>
                <div className='flex items-center gap-1 text-yellow-500'>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <div>
                  <p className='font-semibold'>Very durable</p>
                </div>
                <div className='w-[70%] text-[14px]'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aut nemo consectetur omnis voluptas earum deserunt nulla ad ullam quis laudantium iusto nostrum deleniti nesciunt nisi est, labore odit sit.</p>
                </div>
              </div>
              <hr />
              <div className='flex flex-col gap-2   '>
                <div className='flex items-center gap-2'>
                  <div className='w-[45px] h-[45px] rounded-full overflow-hidden'>
                    <img src="/product.jpg" alt="" className='w-full h-full' />
                  </div>
                  <div>
                    <p className='text-[15px] font-semibold'>Mohssine</p>
                  </div>
                </div>
                <div className='flex items-center gap-1 text-yellow-500'>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <div>
                  <p className='font-semibold'>Very durable</p>
                </div>
                <div className='w-[70%] text-[14px]'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aut nemo consectetur omnis voluptas earum deserunt nulla ad ullam quis laudantium iusto nostrum deleniti nesciunt nisi est, labore odit sit.</p>
                </div>
              </div>
            </div>
          ) :
            (
              <div className='PRODUCT-INFO'>
                <div className='mt-5'>
                  <p>Product Info</p>
                  <p className='mt-2 text-[13px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sint nihil iure id obcaecati tenetur officia hic amet! Maiores ipsum quos ullam eius blanditiis voluptates, animi ea doloribus fugit. A? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus iusto quis commodi voluptates accusamus consequuntur fugit id facilis labore. Hic incidunt quas asperiores impedit error. Non amet illum cum vitae! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas eaque maiores dicta mollitia quaerat iusto, debitis molestias autem libero consequatur nam eos ut quasi omnis odit voluptas expedita rerum voluptate? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem fugit quidem necessitatibus ab, in rem dolorum dolore alias qui ut, cupiditate ipsa fuga aperiam odio ducimus vero magni tempora voluptatum.</p>
                </div>
                <div className='mt-5'>
                  <p>refund policy</p>
                  <p className='mt-2  text-justify text-[13px]'>Lorem ipsum dolor sit am, cupiditate ipsa fuga aperiam odio ducimus vero magni tempora voluptatum.</p>
                </div>
                <div className='mt-5'>
                  <p>Shipping Info</p>
                  <p className='mt-2  text-justify text-[13px]'>Lorem ipsum dolor sit amet , in rem dolorum dolore alias qui ut, cupiditate ipsa fuga aperiam odio ducimus vero magni tempora voluptatum.</p>
                </div>
              </div>)}

        </div>
      </div>
    </div>
  )
}

export default Details_Reviews