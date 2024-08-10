"use client"
import React, { useEffect } from 'react'
const slides = [
    {
        id: 1,
        title: "Summer Sale Collections",
        description: "Find out best spring collection. Offering our best quality production in a X Spring Collection Offering our best quality production in a X Spring Collection",
        img: "https://uk.lindafarrow.com/cdn/shop/files/IMAGE_6_1920_X_1080_1920x.png?v=1723040224",
        url: "/",
    },
    {
        id: 2,
        title: "Winter Sale Collections",
        description: "Offering our best quality production in a X Spring Collection",
        img: "https://cdn.prod.website-files.com/66628e28a5c8866918e2d848/666294f9b037a27ae7d30ed4_Wide%20Gallery%201-min-p-1600.jpg",
        url: "/",
    }
];
function Slider() {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        // <div className='h-[calc(100vh-70px)] w-full overflow-hidden'>
        //     <div className="w-max h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${currentIndex * 100}vw)` }}>
        //         {slides.map(slide => (
        //             <div className={`${slide.bg} w-screen h-full flex flex-col gap-7 md:flex-row`} key={slide.id}>
        //                 <div className='TEXT-CONTAINER md:w-1/2 h-full flex justify-center gap-5 items-center flex-col'>
        //                     <p className='md:text-[20px] lg:text-[25px]'>{slide.title}</p>
        //                     <p className='md:text-[35px] lg:text-[50px] font-bold'>{slide.description}</p>

        //                     <button className='p-2 border bg-black text-white rounded-sm'>Shop Now</button>
        //                 </div>
        //                 <div className='IMAGE-CONTAINER  md:w-1/2 h-1/2  '>
        //                     <img src={slide.img} alt="" sizes='100%' className='object-cover' />
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        //     <div className='absolute bottom-5 w-full flex justify-center gap-2'>
        //         {slides.map((slide, index) => (
        //             <div className={`w-3 h-3  rounded-full ring-1 ring-black cursor-pointer flex items-center justify-center ${currentIndex === index ? "scale-150" : ""
        //                 }`}
        //                 key={slide.id}
        //                 onClick={() => setCurrentIndex(index)}
        //             >
        //                 {currentIndex === index && (
        //                     <div className="w-[6px] h-[6px] bg-black rounded-full"></div>
        //                 )}

        //             </div>
        //         ))}
        //     </div>

        // </div>
        <div className='px-14'>
        <div className='rounded-2xl relative h-[88vh] w-[100%] overflow-hidden'>
            <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
            >
                {slides.map((slide) => (
                    <div key={slide.id} className='w-[100vw] h-full flex-shrink-0'>
                        <img src={slide.img} alt={slide.title} className='w-full h-[88vh] object-cover' />
                        <div className='absolute bottom-4 text-white flex flex-col gap-8 px-4 w-[100%]'>
                            <div>
                                <h1 className='text-5xl font-bold'>{slide.title}</h1>
                            </div>
                            <div className='flex justify-between items-center'>
                                <p className='w-[70%] text-[14px]'>{slide.description}</p>
                                <button className='h-fit w-fit text-[14px] bg-white text-black rounded-3xl px-6 py-2 transition-all duration-700 ease-in-out hover:shadow-md'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}

export default Slider