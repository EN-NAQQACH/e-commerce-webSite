import React from 'react'

function ProductList() {
  return (
    <div className='p-10'>
        <p className='text-[20px] '>Products</p>
        <div className='products-container flex md:justify-between justify-center lg:px-24 py-6  gap-7 flex-wrap  '>
            <div className='product-content sm:w-[45%] lg:w-[22%] h-fit flex flex-col gap-2'>
                <div className='h-[250px] relative'>
                    <img src="./product.jpg" alt="" className='w-full h-full absolute z-10 hover:opacity-0 transition-all duration-500 rounded-md object-cover' />
                    <img src="./product1.jpg" alt="" className='w-full h-full absolute  rounded-md object-cover' />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='font-bold text-[14px] te flex justify-between'>
                        <p>Digital Incense</p>
                        <p>45$</p>
                    </div>
                    <div className='descritpion text-[11px] text-gray-500'>
                        <p>Perfect mint green, organic material</p>
                    </div>
                    <div className='text-[12px]'>
                        <button className='pl-5 pt-1 pb-1 pr-5 rounded-full border-black  border hover:bg-black hover:text-white'>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className='product-content sm:w-[45%] lg:w-[22%] h-fit flex flex-col gap-2'>
                <div className='h-[250px]'>
                    <img src="./product.jpg" alt="" className='w-full h-full rounded-md object-cover' />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='font-bold text-[14px] te flex justify-between'>
                        <p>Digital Incense</p>
                        <p>45$</p>
                    </div>
                    <div className='descritpion text-[11px] text-gray-500'>
                        <p>Perfect mint green, organic material</p>
                    </div>
                    <div className='text-[12px]'>
                        <button className='pl-3 pt-1 pb-1 pr-3 rounded-full border-black  border hover:bg-black hover:text-white'>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className='product-content sm:w-[45%] lg:w-[22%] h-fit flex flex-col gap-2'>
                <div className='h-[250px]'>
                    <img src="./product.jpg" alt="" className='w-full h-full rounded-md object-cover' />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='font-bold text-[14px] te flex justify-between'>
                        <p>Digital Incense</p>
                        <p>45$</p>
                    </div>
                    <div className='descritpion text-[11px] text-gray-500'>
                        <p>Perfect mint green, organic material</p>
                    </div>
                    <div className='text-[12px]'>
                        <button className='pl-3 pt-1 pb-1 pr-3 rounded-full border-black  border hover:bg-black hover:text-white'>Add to cart</button>
                    </div>
                </div>
            </div>
            <div className='product-content sm:w-[45%] lg:w-[22%] h-fit flex flex-col gap-2'>
                <div className='h-[250px]'>
                    <img src="./product.jpg" alt="" className='w-full h-full rounded-md object-cover' />
                </div>
                <div className='flex flex-col gap-2'>
                    <div className='font-bold text-[14px] flex justify-between'>
                        <p>Digital Incense</p>
                        <p>45$</p>
                    </div>
                    <div className='descritpion text-[11px] text-gray-500'>
                        <p>Perfect mint green, organic material</p>
                    </div>
                    <div className='text-[12px]'>
                        <button className='pl-3 pt-1 pb-1 pr-3 rounded-full border-black  border hover:bg-black hover:text-white'>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList