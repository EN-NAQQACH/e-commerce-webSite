"use client"
import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { VscSettings } from "react-icons/vsc";

const Filter = () => {
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
        <div>
            <div className='flex items-center gap-3'>
                <button className='px-7 py-1 border border-black rounded-2xl hover:bg-black hover:text-white'>T-shirt</button>
                <button className='px-7 py-1 border border-black rounded-2xl hover:bg-black hover:text-white'>Jacket</button>
                <button className='px-7 py-1 border border-black rounded-2xl hover:bg-black hover:text-white'>Pants</button>
                <button className='px-7 py-1 border border-black rounded-2xl hover:bg-black hover:text-white'>Hoodie</button>
                <button className='px-[10px] py-[10px] border border-black rounded-[100%] hover:bg-black hover:text-white' onClick={showModal}>
                    <VscSettings className='' />
                </button>
                <Modal style={{
                    top: 50,
                    borderRadius: 0,
                }} className='rounded-none ' title="FILTER" open={isModalOpen} footer={false} onCancel={handleCancel}>
                    <div className='footer-content flex flex-col gap-3'>
                        <div>
                            <input type="text" className='p-2 outline-none w-full rounded-md border' placeholder='search product' />
                        </div>
                        <div>
                            <label htmlFor="" className='font-semibold '>By Categorie</label>
                            <select name="" id="" className='w-full p-2 outline-none rounded-2xl border border-black mt-2'>
                                <option value="">T-shirt</option>
                                <option value="">Jacket</option>
                                <option value="">Pants</option>
                                <option value="">Hoodie</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className='font-semibold'>Sort By</label>
                            <select name="" id="" className='w-full p-2 outline-none rounded-2xl border border-black mt-2'>
                                <option value="">Price</option>
                                <option value="">Rating</option>
                                <option value="">Latest</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className='font-semibold'>Color</label>
                            <select name="" id="" className='w-full p-2 outline-none rounded-2xl border border-black mt-2'>
                                <option value="">Red</option>
                                <option value="">Blue</option>
                                <option value="">Green</option>
                                <option value="">Yellow</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className='font-semibold'>Price</label>
                            <div className='flex items-center justify-center gap-5'>
                                <input type="number" name="" id="" className='w-full rounded-2xl border  border-black p-2' min={1} placeholder='min price' />
                                <input type="number" name="" id="" className='w-full rounded-2xl border  border-black p-2' min={1} placeholder='max price' />
                            </div>
                        </div>
                        <div className='mt-2'>
                            <button className='bg-white text-black p-2 w-full rounded-full hover:text-white hover:bg-black border-black border font-bold'>Filter</button>
                        </div>

                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Filter