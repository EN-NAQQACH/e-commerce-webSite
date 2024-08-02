import React from 'react'
import Link from 'next/link'

function Dropdownmenu() {
  return (
    <div className='flex flex-col p-2'>
        <p className='p-2 border-b-[1px] font-bold' >Hi mohssine</p>
        <Link href={"/"} className='p-2 hover:font-semibold'>Profile</Link>
        <Link href={"/"} className='p-2 hover:font-semibold'>Settings</Link>
        <Link href={"/"} className='p-2 border-b-[1px] hover:font-semibold'  >Favorities</Link>
        <p className='p-2'>Sign out</p>
    </div>
  )
}

export default Dropdownmenu