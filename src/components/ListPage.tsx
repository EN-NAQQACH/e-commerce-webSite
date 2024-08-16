import React from 'react'
import { wixClientServer } from "@/lib/wixClientServer";
import DOMPurify from 'isomorphic-dompurify';

const ListPage = async ({ searchParams, categorieId }: { searchParams: any, categorieId: any }) => {
  const wixClient = await wixClientServer();
  const Query = wixClient.products.queryProducts().eq(
    "collectionIds", categorieId
  )
    .startsWith("name", searchParams?.search || "")
    .ge("priceData.price", searchParams.minprice || 0)
    .le("priceData.price", searchParams.maxprice || 99999)
    .limit(9)

  if(searchParams?.sortby){
    const [sortType, sort] = searchParams.sortby.split(" ");
    if(sortType === "asc"){
      Query.ascending(sort)
    }
    if(sortType === "desc"){
      Query.descending(sort)
    }
  }
  const res = await Query.find();
  return (
    <div className=' w-full min-h-screen py-2 lg:px-2 md:px-5 sm:px-10 px-20  mt-3'>
      <div className='container grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 min-w-[100%]  '>

        {res.items.map((item) => (
          <div className='product-content   ' key={item._id}>
            <div className='relative'>
              <div className='h-[400px]'>
                <img src={item.media?.mainMedia?.image?.url} alt="" className='rounded-sm h-full object-cover w-full' />
              </div>
              <div className='absolute bg-[#ffffff4d] flex justify-center items-center transition-all duration-300 w-full h-full bottom-0 opacity-0 hover:opacity-100 text-white px-2 py-1 rounded-lg'>

                <button className='px-5 py-1 border border-black bg-white text-black'>Add to Cart</button>

              </div>
            </div>
            <div className='mt-2 flex flex-col gap-1'>
                <p className='font-bold overflow-hidden text-ellipsis whitespace-nowrap'>
                  {item.name}
                </p>              
                <div className='text-[12px] text-gray-400 h-[25px] overflow-hidden text-ellipsis whitespace-nowrap'
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(item.additionalInfoSections?.find((section:any) => section.title ="shortDescription")?.description || ""),
                  }}
                >
                </div>
                <p className='font-bold'>${item.price?.price}</p>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListPage