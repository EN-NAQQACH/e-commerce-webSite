import React from 'react'
import { GoStarFill } from "react-icons/go";
import Details_Reviews from '@/components/Details_Reviews';
import Accordion from '@/components/Accordion';
import ProductImages from '@/components/ProductImages';
import { wixClientServer } from '@/lib/wixClientServer';



const page = async({searchParams} : {searchParams :any}) => {
    const wixClient = await wixClientServer();
    const res = await wixClient.products.queryProducts().eq(
        '_id', searchParams.id
    ).find(); 
    const product = res.items[0];
    console.log(product);

    return (
        <div className='min-h-screen w-full md:px-24 px-10 py-5'>
            <div className='product-container '>
                <div className='product-content min-h-screen  flex flex-col gap-7 '>
                    <div className=' flex lg:flex-row flex-col gap-6 min-h-lvh'>
                        <div className="LEFT-CONTENT  lg:w-[55%] w-[100%]  ">
                            {/* <div className='PRODUCT-IMAGES w-full h-[400px] '>
                                <img src="/2.jpg" alt="" className='w-full h-full object-cover ' />
                            </div> */}
                            {/* <div className='grid grid-cols-5 gap-3 mt-2 bg-transparent'>
                                <div className='PRODUCT-IMAGES  h-[80px]  rounded-lg '>
                                    <img src="/6.jpg" alt="" className='w-full h-full object-cover rounded-lg border-2 border-transparent hover:border-2 hover:border-gray-100' />
                                </div>
                                <div className='PRODUCT-IMAGES   h-[80px] '>
                                    <img src="/8.jpg" alt="" className='w-full h-full object-cover rounded-md border-2 border-transparent hover:border-2 hover:border-gray-100' />                            </div>
                                <div className='PRODUCT-IMAGES   h-[80px] '>
                                    <img src="/12.jpg" alt="" className='w-full h-full object-cover rounded-md border-2 border-transparent hover:border-2 hover:border-gray-100' />                            </div>
                                <div className='PRODUCT-IMAGES   h-[80px] '>
                                    <img src="/2.jpg" alt="" className='w-full h-full object-cover rounded-md border-2 border-transparent hover:border-2 hover:border-gray-100' />
                                </div>
                                <div className='PRODUCT-IMAGES relative  h-[80px] rounded-md border '>
                                    <img src="/6.jpg" alt="" className='w-full h-full object-cover opacity-0  ' />
                                    <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[13px]'> 4 more</p>
                                </div>

                            </div> */}
                            <ProductImages images={product.media?.items} />
                        </div>
                        <div className='RIGHT-CONTENT lg:m-0 mt-24 lg:w-[45%] w-[100%] h-fit py-3 '>
                            <div className=' flex flex-col gap-3'>
                                <div className=''>
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
                                    <div className='flex gap-3 items-center'>
                                        <button className='p-2 rounded-full relative w-5 h-5  bg-amber-800'>
                                            <div className='absolute w-6 h-6 ring-2 ring-amber-800 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                        </button>
                                        <button className='p-2 rounded-full relative w-5 h-5  bg-teal-600'>
                                            <div className='absolute w-6 h-6 ring-2 ring-teal-600 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                        </button>
                                        <button className='p-2 rounded-full relative w-5 h-5  bg-gray-500'>
                                            <div className='absolute w-6 h-6 ring-2 ring-gray-500 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
                                        </button>
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
                                    <button className='px-5 py-[7px] w-full  border bg-black text-white'>Buy now</button>
                                    <button className='px-5 py-[7px] w-full  border'>Add to Cart</button>
                                </div>
                                <div className='PRODUCT-INFORMATIONS'>
                                    <Accordion />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='DETAIL_REVIEWS'>
                        <Details_Reviews />
                    </div>

                    <div className='RELATED-PRODUCTS'>
                        <div className=''>
                            {/* <ProductList /> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page