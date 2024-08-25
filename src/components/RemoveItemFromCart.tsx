"use client"
import React, { useContext, } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { wixClientContext } from '@/context/wixContext'
import {removeFromCart} from '@/utils/AddToCart'
import { removeItemFromCart } from '@/redux/cartSlice'

function RemoveItemFromCart({itemID}:{itemID:string}) {
    
    const dispatch = useDispatch();
    const RemoveItemFromCart = async() => {
        try{
            const response = await removeFromCart(itemID)
            if(response && response.cart!){
                dispatch(removeItemFromCart(response.cart!))
            }
        }catch(e){
            console.log(e)
        }
    }

  return (
    <button className='text-[#e97979] hover:text-[#ff2e2e]' onClick={()=>RemoveItemFromCart()} >Remove</button>
  )
}

export default RemoveItemFromCart