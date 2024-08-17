import React from 'react'
import Link from 'next/link'
function page() {
  return (
    <div className='px-32  min-h-lvh'>
      <div className=' h-fit'>
        <div className='LOGIN flex  justify-center overflow-hidden  rounded-lg'>
          {/* <div className='LEFT  w-1/2 '>
            <img src="/NEW-HenryTile2.jpg" alt="" className='w-full h-full object-cover  ' />
          </div> */}
          <div className='RIGHT   w-[70%] shadow-md px-12 py-10 flex flex-col gap-14 '>
            <div>
              <p className='text-[35px]'>Hello, Welcome Back</p>
              <p className='text-[12px] text-gray-500'>Complete  the data below to enjoy our services</p>
            </div>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-4'>
                <div>
                  <label htmlFor="" className='text-[15px] font-[500] '>Email or Username</label>
                  <input type="text" className='w-full border p-2 rounded-3xl mt-1 text-[12px] pl-5' placeholder='Enter your username' />
                </div>
                <div>
                  <label htmlFor="" className='text-[15px] font-[500] '>Password</label>
                  <input type="password" className='w-full border p-2 rounded-3xl mt-1 text-[12px] pl-5' placeholder='Enter your password' />
                </div>
                <div>
                  <label htmlFor="" className='text-[15px] font-[500] '>Password</label>
                  <input type="password" className='w-full border p-2 rounded-3xl mt-1 text-[12px] pl-5' placeholder='Enter your password' />
                </div>
                <div className='flex gap-3'>
                  <button className='w-full border rounded-3xl bg-black text-white py-[6px]'>Sign up</button>
                  {/* <button className='flex items-center gap-2 w-1/2 border rounded-3xl py-[6px] justify-center'>
                    <img src="/Google.png" alt="" className='w-[20px] h-[20px]' />
                    <p className='text-[14px]'>Sign in with Google</p>
                  </button> */}
                </div>
              </div>
              <div className=''>
                <p className='text-[13px] font-[500] text-gray-500'>Already have an account? <Link href={"/login"} className='text-black font-bold'>Sign in</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page