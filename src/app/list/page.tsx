import React from 'react'
import ProductList from '@/components/ProductList'
import ListPage from '@/components/ListPage';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Filter from '@/components/Filter';
import { wixClientServer } from "@/lib/wixClientServer";



const page = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();
  const response = await wixClient.collections.getCollectionBySlug(searchParams.categorie || "all-products");
  const getallCategories = await wixClient.collections.queryCollections().find();
  return (
    <div className='xl:px-24 lg:px-10'>
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
            <Filter gategories={getallCategories?.items} />
          </div>
          <div className='mt-7 mb-[200px]'>
              <ListPage categorieId={response.collection?._id} searchParams={searchParams} />

            {/* <div className='px-10 flex md:justify-between justify-center sm:mt-5 gap-5 m-auto'>
              <button className='px-2 py-2 border border-black bg-black text-white rounded-full hover:text-black hover:bg-white'><FaArrowLeft size={15} /></button>
              <button className='px-2 py-2 border border-black bg-black text-white rounded-full hover:text-black hover:bg-white'><FaArrowRight size={15} /></button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default page