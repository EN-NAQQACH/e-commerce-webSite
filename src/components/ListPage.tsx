import React from 'react'
import { wixClientServer } from "@/lib/wixClientServer";


const ListPage = async ({ searchParams, categorieId }: { searchParams: any, categorieId: any }) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products.queryProducts().eq(
    "collectionIds", categorieId
  ).limit(9).find();
  return (
    <div className=' w-full min-h-screen py-2 lg:px-2 md:px-5 sm:px-10 px-20  mt-3'>
      <div className='container grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 min-w-[100%]  '>

        {res.items.map((item) => (
          <div className='product-content   ' key={item._id}>
            <div className='relative'>
              <div className='h-[400px]'>
                <img src="https://www.mrporter.com/variants/images/1647597343941045/in/w560_q60.jpg" alt="" className='rounded-sm h-full object-cover w-full' />
              </div>
              <div className='absolute bg-[#ffffff4d] flex justify-center items-center transition-all duration-300 w-full h-full bottom-0 opacity-0 hover:opacity-100 text-white px-2 py-1 rounded-lg'>

                <button className='px-5 py-1 border border-black bg-white text-black'>Add to Cart</button>

              </div>
            </div>
            <div className='mt-2 flex flex-col gap-1'>
              <p className='font-bold'>Loro piano</p>
              <p className='text-[12px] text-gray-400'>Slim short this is nice shirt for you</p>
              <p className='font-bold'>$45</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPage