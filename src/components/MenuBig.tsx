import React from 'react'

function MenuBig() {
    return (
        <div className='flex items-center justify-between gap-5 max-md:hidden'>
            <ul className=' flex items-center gap-5 '>
                <li>HomePage</li>
                <li>female</li>
                <li>male</li>
                <li>Contat</li>
            </ul>
            <div>
                <input type="text" className='p-1 pl-4 rounded-3xl  outline-none' placeholder='search...' />
            </div>
          
        </div>
    )
}

export default MenuBig