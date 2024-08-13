import React from 'react'

const ProductImages = ({ images }: { images: any }) => {
    return (
        <>

            <div className='grid grid-cols-2 gap-1' >
                {images.map((img: any, i: number) => (
                    <div className='PRODUCT-IMAGES h-[500px]' key={img._id}>
                        <img src={img.image?.url} alt="" className='w-full h-full object-cover  border-2 border-transparent hover:border-2 hover:border-gray-100' />
                    </div>
                ))}
            </div>


        </>

    )
}

export default ProductImages