"use client"
import React, { useEffect, useState } from 'react'
import { products } from '@wix/stores'
import AddToCart from './AddToCart'
const CustomizeProduct = ({ variants, productId, productOptions }: { variants: products.Variant[], productId: string, productOptions: products.ProductOption[] }) => {
    const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: string }>({});
    const [selectedVariant, setSlecetedVariant] = useState<products.Variant>();
    const [stock, setStock] = useState(0);


    const handleOptionChange = (option: string, value: string) => {
        // {
        //     color: value,
        //     size: value
        // }
        setSelectedOptions((prev) => ({
            ...prev,
            [option]: value
        }))
    }

    useEffect(() => {
        const variant = variants.find((v) => {
            const variantchoices = v.choices;
            if (!variantchoices) return false;
            return Object.entries(selectedOptions).every(([key, value]) => variantchoices[key] === value)
        })
        setSlecetedVariant(variant);
        setStock(0)
    }, [selectedOptions, variants])
    const plusQuantity = () => {
        if (stock >= selectedVariant?.stock?.quantity!) {
            return
        }else{
            setStock((prev) => prev + 1)
        }
    }
    const minusQuantity = () => {
        if (stock <= 0 ) {
            return
        }else{
            setStock((prev) => prev - 1)
        }
    }
    const isVariantInStock = (choices: { [key: string]: string }) => {
        console.log(choices)
        return variants.some((variant) => {  // loop through all available variants and checking if at least one matches the user’s selections.
            const variantChoices = variant.choices; // For each variant It retrieves the variant’s choices (e.g., the size and color for that variant).
            if (!variantChoices) return false; // if there is not variant will skipp it and return false

            return Object.entries(choices).every(  // we using entries to convert choices'user to array
                /*{
                
                {color: 'Red',size: 'M'}
                ------------------- convert to array
                [['color','Red'],['size','M']]
                
                }*/
                // every method  checks if every key-value pair in choices matches the options in the current variant.
                ([key, value]) => variantChoices[key] === value
            ) && variant.stock?.inStock && variant.stock.quantity! > 0
        })
    }
    /*{
    const choices = { size: "M", color: "red" };
    Object.entries(choices);
    // Output: [['size', 'M'], ['color', 'red']]
    }*/
    return (
        <>
      
          {productOptions.map((option, index) => (
                <div key={index} className='flex flex-col gap-2'>
                    <p>{option.name}</p>
                    <div className='flex gap-2 items-center'>
                        {option.choices?.map((choice, index) => {
                            const OUTOFSTOCK = !isVariantInStock({ ...selectedOptions, [option.name!]: choice.description! });
                            const SELECTED = selectedOptions[option.name!] === choice.description;
                            return option.name === "Color" ?
                                <>
                                    <button key={index} className='p-2 rounded-full relative w-5 h-5 border  ' style={{ backgroundColor: choice.description, cursor: OUTOFSTOCK ? 'not-allowed' : 'pointer' }} onClick={() => OUTOFSTOCK ? undefined : handleOptionChange(option.name!, choice.description!)} >
                                        {SELECTED && <div className='absolute w-6 h-6 ring-2 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />}
                                        {OUTOFSTOCK && <div className='absolute w-6 h-[2px] rotate-45 top-1/2 left-1/2 bg-red-400 transform -translate-x-1/2 -translate-y-1/2 ' />}
                                    </button>

                                </> :
                                <>
                                    <button key={index} className={SELECTED ? 'px-5 py-1  border font-bold border-black ' : 'px-5 py-1 border '} style={{ cursor: OUTOFSTOCK ? 'not-allowed' : 'pointer', backgroundColor: OUTOFSTOCK ? '#D1D8C5' : '' }} onClick={() => OUTOFSTOCK ? undefined : handleOptionChange(option.name!, choice.description!)} >{choice.description}</button>
                                </>
                        })}
                    </div>
                </div>
            ))}

            <div className='QUANTITY flex flex-col gap-2'>
                <p>Quantity</p>
                <div className='flex gap-2 items-center font-semibold'>
                    <button className='px-3 py-1 rounded-full border' onClick={() => minusQuantity()}>-</button>
                    <button className='px-5 py-1 rounded-full border'>{stock}</button>
                    <button className='px-3 py-1 rounded-full border' onClick={() => plusQuantity()}>+</button>
                </div>
                <p className='mt-2'>inStock <span className='text-red-500 font-semibold '>{selectedVariant?.stock?.quantity! - stock} items</span> </p>
            </div>
            <div className='ADD-TO-CART '>
               <AddToCart varaintId={selectedVariant?._id!} productId={productId}  stock={selectedVariant?.stock?.quantity!}/>
            </div>
        </>
    )
}

export default CustomizeProduct