import React from 'react';

interface MobileProps {
  isOpen: boolean;
}

const Mobile = ( open : MobileProps ) => {
  return (
    <div className={`fixed z-20 top-[70px] left-0 w-full bg-gray-200 flex md:hidden flex-col items-center gap-5 transition-transform-opacity h-lvh  duration-300 ease-in-out ${open.isOpen ? 'opacity-100 translate-y-0 ' : 'opacity-0 translate-x-[100%]'}`}>
      <ul className='w-full flex flex-col items-center gap-5'>
        <li>mohssine</li>
        <li>fatima zahra</li>
        <li>miral</li>
        <li>sofia</li>
        <li>amair</li>
      </ul>
    </div>
  );
}

export default Mobile;
