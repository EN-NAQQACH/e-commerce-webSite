"use client"
import React, { useState } from 'react'
import ProductList from '@/components/ProductList'
import ListPage from '@/components/ListPage';
import { VscSettings } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Button, Modal } from 'antd';


function page() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='lg:px-24'>
      <div className='min-h-screen'>
        {/* TOP */}
        <div className='CONTAINER bg-gray-50 h-[280px] relative flex items-center  rounded-md mt-1 shadow-sm'>
          <div className='sm:pl-20 px-5 sm:w-[60%] w-[100%] text-center sm:text-left flex flex-col gap-3'>
            <div className=''>
              <p className='sm:text-[27px] md:text-[35px] text-[28px] font-semibold '>Grap up to 50% off on your first order </p>
            </div>
            <button className='w-fit border-black px-5 border py-1 m-auto mt-2 sm:m-0 hover:bg-black hover:text-white'>
              Buy Now
            </button>
          </div>
          <div className='absolute hidden sm:w-1/3 md:w-1/4 sm:block bottom-0 right-14'>
            <img src="/woman.png" alt="" className='w-full h-full object-cover' />
          </div>
        </div>
        {/* CENTER */}
        <div className='mt-7'>
          <div className='FILTER flex flex-col justify-center items-center gap-4'>
            <p className='text-[36px]'>NEW CLOTHING COLLECTION</p>
            <span className='text-center w-[70%] sm:w-[40%] text-gray-500 text-[14px]'>Find everything you need to look and feel your best, and shop the latest men's and women's
              fashion and lifestyle products</span>
            <div className='flex items-center gap-3'>
              <button className='px-5 py-1 border border-black rounded-2xl hover:bg-black hover:text-white'>T-shirt</button>
              <button className='px-5 py-1 border border-black rounded-2xl hover:bg-black hover:text-white'>Jacket</button>
              <button className='px-5 py-1 border border-black rounded-2xl hover:bg-black hover:text-white'>Pants</button>
              <button className='px-5 py-1 border border-black rounded-2xl hover:bg-black hover:text-white'>Hoodie</button>
              <button className='px-[10px] py-[10px] border border-black rounded-[100%] hover:bg-black hover:text-white' onClick={showModal}>
                <VscSettings className='' />
              </button>
              <Modal   style={{ top: 50,
                borderRadius:0,
               }} className='rounded-none ' title="FILTER" open={isModalOpen} footer={false} onCancel={handleCancel}>
                    <div className='footer-content flex flex-col gap-3'>
                      <div>
                        <input type="text" className='p-2 outline-none w-full rounded-md border' placeholder='search product' />
                      </div>
                      <div>
                        <label htmlFor="" className='font-semibold'>By Categorie</label>
                        <select name="" id="" className='w-full p-2 outline-none rounded-md border mt-2'>
                          <option value="">T-shirt</option>
                          <option value="">Jacket</option>
                          <option value="">Pants</option>
                          <option value="">Hoodie</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="" className='font-semibold'>Sort By</label>
                        <select name="" id="" className='w-full p-2 outline-none rounded-md border mt-2'>
                          <option value="">Price</option>
                          <option value="">Rating</option>
                          <option value="">Latest</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="" className='font-semibold'>Color</label>
                        <select name="" id="" className='w-full p-2 outline-none rounded-md border mt-2'>
                          <option value="">Red</option>
                          <option value="">Blue</option>
                          <option value="">Green</option>
                          <option value="">Yellow</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="" className='font-semibold'>Price</label>
                        <div className='flex items-center justify-center gap-5'>
                        <input type="number" name="" id="" className='w-full rounded-md border p-2' min={1} placeholder='min price'  />
                        <input type="number" name="" id="" className='w-full rounded-md border p-2' min={1}  placeholder='max price' />
                        </div>
                      </div>
                      <div className='mt-2'>
                        <button className='bg-white text-black p-2 w-full rounded-full hover:text-white hover:bg-black border-black border font-bold'>Filter</button>
                      </div>
                    
                    </div>
              </Modal>
            </div>
          </div>
          <div className='mt-7 mb-[200px]'>
            <ListPage />
            <div className='px-10 flex md:justify-between justify-center sm:mt-5 gap-5 m-auto'>
              <button className='px-2 py-2 border border-black bg-black text-white rounded-full hover:text-black hover:bg-white'><FaArrowLeft size={15} /></button>
              <button className='px-2 py-2 border border-black bg-black text-white rounded-full hover:text-black hover:bg-white'><FaArrowRight size={15} /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page