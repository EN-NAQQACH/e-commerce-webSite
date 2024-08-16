"use client"
import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { VscSettings } from "react-icons/vsc";
import { useParams, usePathname, useSearchParams, useRouter } from 'next/navigation';
import { collections } from '@wix/stores';

const Filter = ({ gategories }: { gategories: collections.Collection[] }) => {
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
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);
    const { replace } = useRouter();
    const handleFilter = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement >) => {
        const { name, value } = e.target;
        console.log(name, value);
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        replace(`${pathname}?${params.toString()}`);
    }
    const handleButtonsFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
        const { value } = e.currentTarget;
        const params = new URLSearchParams(searchParams);
        params.set('categorie', value);
        replace(`${pathname}?${params.toString()}`);
    }
    return (
        <div>
            <div className='flex items-center gap-3'>
                {gategories.map((cat)=>{
                    return <button value={cat.slug!} key={cat._id} className='px-7 py-1 border border-black rounded-2xl hover:bg-black hover:text-white' onClick={handleButtonsFilter}>{cat.name}</button>
                })}
                <button className='px-[10px] py-[10px] border border-black rounded-[100%] hover:bg-black hover:text-white' onClick={showModal}>
                    <VscSettings className='' />
                </button>
                <Modal style={{
                    top: 50,
                    borderRadius: 0,
                }} className='rounded-none ' title="FILTER" open={isModalOpen} footer={false} onCancel={handleCancel}>
                    <div className='footer-content flex flex-col gap-3'>
                        <div>
                            <input type="text" name='search' className='p-2 outline-none w-full rounded-md border' placeholder='search product' onChange={handleFilter} />
                        </div>
                        <div>
                            <label htmlFor="" className='font-semibold '>By Categorie</label>
                            <select name="categorie" id="" onChange={handleFilter} className='w-full p-2 outline-none rounded-2xl border border-black mt-2' >
                                <option value="t-shirt">T-shirt</option>
                                <option value="jacket">Jacket</option>
                                <option value="pants">Pants</option>
                                <option value="hoodie">Hoodie</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="" className='font-semibold'>Sort By</label>
                            <select name="sortby" id="" onChange={handleFilter} className='w-full p-2 outline-none rounded-2xl border border-black mt-2'>
                                <option value="desc price">Price (high to low)</option>
                                <option value="asc price">Price (low to high)</option>
                                <option value="asc lastUpdated">Newest</option>
                                <option value="desc lastUpdated">Oldest</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="" className='font-semibold'>Price</label>
                            <div className='flex items-center justify-center gap-5'>
                                <input type="number" name="minprice" id="" className='w-full rounded-2xl border  border-black p-2' min={1} placeholder='min price' onChange={handleFilter} />
                                <input type="number" name="maxprice" id="" className='w-full rounded-2xl border  border-black p-2' min={1} placeholder='max price' onChange={handleFilter} />
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