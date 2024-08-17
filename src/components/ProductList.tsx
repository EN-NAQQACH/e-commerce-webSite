import React from 'react'
import { TbShoppingBagPlus } from "react-icons/tb";
import { wixClientServer } from "@/lib/wixClientServer";
import { products } from '@wix/stores';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';

const ProductList = async ({ limit }: { limit?: number }) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products.queryProducts().limit(limit || 9).find();
  return (
    <div className='lg:px-20 md:px-3 mt-32'>
      <div className='text-center'>
        <p className='text-[35px] font-semibold '>NEW COLLECTION</p>
        <p className='text-[12px] font-[400] text-gray-500'>Our latest collection where classic and contemporary styles converge in perfect hermany </p>
      </div>


      <div className=' w-full min-h-screen py-2 lg:px-2 md:px-5 sm:px-10 px-20  mt-3'>
        <div className='container grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 min-w-[100%]  '>
          {res.items.map((product: products.Product) =>

          (
            <Link href={`/product?slug=${product.slug}&id=${product._id}`} className='product-content' key={product._id}>
              <div className='relative'>
                <div className='h-[400px]'>
                  <img src={product.media?.mainMedia?.image?.url} alt="" className='rounded-sm h-full object-cover w-full' />
                </div>
                <div className='absolute bg-[#ffffff4d] flex justify-center items-center transition-all duration-300 w-full h-full bottom-0 opacity-0 hover:opacity-100 text-white px-2 py-1 rounded-lg'>

                  <button className='px-5 py-1 border border-black bg-white text-black'>Add to Cart</button>

                </div>
              </div>

              <div className='mt-2 flex flex-col gap-1'>
                <p className='font-bold overflow-hidden text-ellipsis whitespace-nowrap'>
                  {product.name}
                </p>              
                <div className='text-[12px] text-gray-400 h-[25px] overflow-hidden text-ellipsis whitespace-nowrap'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(product.additionalInfoSections?.find((section:any) => section.title ="shortDescription")?.description || ""),
                  }}
                >
                </div>
                <p className='font-bold'>${product.price?.price}</p>
              </div>
            </Link>
          )

          )}
  
        </div>
      </div>
      <div className='w-full flex justify-center mt-6'>
        <Link href={'/list'} className='px-5 py-1 bg-black text-white rounded-3xl '>See more</Link>
      </div>
    </div>
  )
}

export default ProductList