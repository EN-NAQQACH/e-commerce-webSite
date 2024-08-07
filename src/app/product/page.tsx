import React from 'react'
import { GoStarFill } from "react-icons/go";
import ListPage from '@/components/ListPage';


function page() {
    return (
        <div className='min-h-screen w-full md:px-24 px-10 py-5'>
            <div className='product-container '>
                <div className='product-content min-h-screen  flex flex-col gap-7 '>
                    <div className=' flex lg:flex-row flex-col gap-6'>
                        <div className="LEFT-CONTENT   relative lg:w-[55%] w-[100%] lg:h-[500px] h-[400px] ">
                            <div className='PRODUCT-IMAGES w-full h-full '>
                                <img src="/product.jpg" alt="" className='w-full h-full object-cover rounded-lg' />
                            </div>
                            <div className='grid grid-cols-5 gap-3 mt-2 bg-transparent'>
                                <div className='PRODUCT-IMAGES  h-full  rounded-lg '>
                                    <img src="/product.jpg" alt="" className='w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-2 hover:border-gray-100' />
                                </div>
                                <div className='PRODUCT-IMAGES  h-full '>
                                    <img src="/product.jpg" alt="" className='w-full h-full object-cover rounded-md border-2 border-transparent hover:border-2 hover:border-gray-100' />                            </div>
                                <div className='PRODUCT-IMAGES  h-full '>
                                    <img src="/product.jpg" alt="" className='w-full h-full object-cover rounded-md border-2 border-transparent hover:border-2 hover:border-gray-100' />                            </div>
                                <div className='PRODUCT-IMAGES  h-full '>
                                    <img src="/product.jpg" alt="" className='w-full h-full object-cover rounded-md border-2 border-transparent hover:border-2 hover:border-gray-100' />
                                </div>
                                <div className='PRODUCT-IMAGES relative h-full rounded-md border '>
                                    <img src="/product.jpg" alt="" className='w-full h-full object-cover opacity-0  ' />
                                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[13px]'> 4 more</p>
                                </div>

                            </div>

                        </div>
                        <div className='RIGHT-CONTENT lg:m-0 mt-24 lg:w-[45%] w-[100%] h-fit py-3 flex flex-col gap-3'>
                            <div>
                                <div className='CATEGORIE'>
                                    <p className='border font-bold border-gray-700 text-gray-700 w-fit px-6 py-1 rounded-full'>Categorie Sofa</p>
                                </div>
                                <div className=''>
                                    <p className='TITLE text-[35px] font-[500]'>Axis 2-Seat Sofa</p>
                                </div>
                                <div className='flex items-center gap-2 font-semibold text-[13px] text-gray-400'>
                                    <GoStarFill />
                                    <p>(4,9) 9.2K Reviews</p>
                                </div>
                            </div>
                            <div className=' flex items-center gap-3'>
                                <p className='font-[400] text-gray-500 text-[25px] line-through'>$645</p>
                                <p className='font-[400] text-[32px]'>$645</p>
                            </div>
                            <div className='DESCRIPTION flex flex-col gap-2'>
                                <p className='text-[17px] font-[520]'>Description</p>
                                <p className='text-justify text-[13px] leading-5 font-[550] text-gray-500'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia eos pariatur iste architecto, odio beatae libero animi a corrupti dolores earum ad aspernatur atque et illo commodi aut explicabo! Voluptatem!
                                </p>
                            </div>
                            <div className='COLORS flex flex-col gap-2'>
                                <p>3 Color Available</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='p-3 rounded-full border bg-gray-500'></button>
                                    <button className='p-3 rounded-full border bg-green-500'></button>
                                    <button className='p-3 rounded-full border bg-black'></button>
                                </div>
                            </div>
                            <div className='SIZE flex flex-col gap-2'>
                                <p>Size</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='px-5 py-1 rounded-md border'>S</button>
                                    <button className='px-5 py-1 rounded-md border'>M</button>
                                    <button className='px-5 py-1 rounded-md border'>L</button>
                                    <button className='px-5 py-1 rounded-md border'>XL</button>
                                </div>
                            </div>
                            <div className='QUANTITY flex flex-col gap-2'>
                                <p>Quantity</p>
                                <div className='flex gap-2 items-center'>
                                    <button className='px-3 py-1 rounded-full border'>-</button>
                                    <button className='px-5 py-1 rounded-full border'>1</button>
                                    <button className='px-3 py-1 rounded-full border'>+</button>
                                </div>
                            </div>
                            <div className='ADD-TO-CART flex items-center gap-3 mt-2'>
                                <button className='px-5 py-[5px] w-full rounded-full border bg-black text-white'>Buy now</button>
                                <button className='px-5 py-[5px] w-full rounded-full border'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex items-center gap-5 p-2 rounded-3xl  bg-[#f8f8f8]'>
                            <button className='  px-5 py-1 rounded-3xl bg-white'>Details</button>
                            <button className='  px-5 py-1'>Reviews</button>
                        </div>
                        <div className='p-5  rounded-md mt-3 bg-[#f8f8f85d]'>
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
                        </div>

                    </div>
                    <div className='RELATED-PRODUCTS'>
                        <div className='flex items-center gap-3 w-[100%]'>
                            <p className='text-[19px]  text-gray-500 min-w-fit'>Related Products</p>
                            <div className='border-[1px]  w-[100%]'></div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default page