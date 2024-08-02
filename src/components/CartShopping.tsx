import React from 'react'
import Link from 'next/link'

function CartShopping() {
    return (
        <div>
            <div className='p-3 '>
                <b className='text-[15px]'>Shopping Cart</b>
                <div className='mt-3 h-[90px] w-full  flex overflow-hidden  justify-between'>
                    <div className='h-[90px] w-[80px]  mr-2'>
                        <img src="./product.jpg" alt="" className='w-full h-full object-cover rounded-md' />
                    </div>
                    <div className='grow p-1 flex flex-col justify-between'>
                        <div>
                            <p className='font-bold'>Digital licence</p>
                            <p className='text-gray-500 text-[12px] mt-1'>available</p>
                        </div>
                        <div className='text-gray-500'>
                            Qty 1
                        </div>

                    </div>
                    <div className='p-1 flex flex-col justify-between'>
                        <b>40.5 $</b>
                        <Link href={'/'} className='text-[#e97979] hover:text-[#f86060]' >Remove</Link>
                    </div>
                </div>

                <div className='flex flex-col mt-3'>
                    <div className='flex font-bold items-center justify-between '>
                        <p>Subtotal</p>
                        <p>40.5 $</p>
                    </div>
                    <div className='text-gray-400 text-[12px]'>
                        Shipping and taxes calculated at checkout
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <button className='pl-2 pt-1 pb-1 pr-2 bg-white border rounded-lg'>View Cart</button>
                        <button className='pl-2 pt-1 pb-1 pr-2 bg-black border border-black text-white rounded-lg'>Check out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartShopping