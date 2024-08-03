"use client"
import React from 'react'
const slides = [
    {
        id: 1,
        title: "Summer Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/",
        bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
        id: 2,
        title: "Winter Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/",
        bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
        id: 3,
        title: "Spring Sale Collections",
        description: "Sale! Up to 50% off!",
        img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800",
        url: "/",
        bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
];
function Slider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    return (
        <div className='h-[calc(100vh-70px)] w-full overflow-hidden'>
            <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
                {slides.map(slide => (
                    <div className={`${slide.bg} w-screen h-full flex flex-col gap-7 md:flex-row`} key={slide.id}>
                        <div className='TEXT-CONTAINER md:w-1/2 h-full flex justify-center gap-5 items-center flex-col'>
                            <p className='md:text-[35px] text-[25px] font-bold'>{slide.description}</p>
                            <p className='md:text-[20px]'>{slide.title}</p>
                            <button className='p-2 border bg-black text-white rounded-sm'>Shop Now</button>
                        </div>
                        <div className='IMAGE-CONTAINER relative md:w-1/2 h-1/2  '>
                            <img src={slide.img} alt="" sizes='100%' className='' />
                        </div>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-5 w-full flex justify-center gap-2'>
                {slides.map((slide, index) => (
                    <div className={`w-3 h-3  rounded-full ring-1 ring-black cursor-pointer flex items-center justify-center ${currentIndex === index ? "scale-150" : ""
                        }`}
                        key={slide.id}
                        onClick={() => setCurrentIndex(index)}
                        >
                        {currentIndex === index && (
                            <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
                        )}

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Slider