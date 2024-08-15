import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import { wixClientServer } from "@/lib/wixClientServer";
import Link from 'next/link';
const CategoriesList = async () => {
  const wixClient = await wixClientServer();
  const categories = await wixClient.collections.queryCollections().find();
  return (
    <div className=''>
      <p className='text-[20px] p-10'>Categories</p>
      <div className='categories-container  overflow-x-scroll no-scrollbar '>
        <div className='categories flex gap-4 '>

          {categories.items.map((item) => (
            <div className='category-content relative lg:w-1/5 sm:w-1/3   h-fit w-[50%] flex-shrink-0' key={item._id}>
              <div className='h-[300px]'>
                <img src={item.media?.mainMedia?.image?.url} alt="" className='h-full w-full object-cover' />
              </div>
              <div className='h-[300px] absolute w-full  top-0 opacity-0 hover:opacity-100 hover:backdrop-blur-sm border transition-all duration-700 ease-in-out flex justify-center items-center'>
                <div className='flex justify-between items-center flex-col gap-2'>
                  <p className='text-[35px] font-bold'>{item.name}</p>
                  <Link href={`/list?categorie=${item.slug}`} className='border-2 rounded-full p-2 border-black hover:bg-black hover:text-white'>
                    <IoArrowForward size={20} />
                  </Link>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  )
}

export default CategoriesList