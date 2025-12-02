import React from 'react'
import Slider from './Swipper'

function Hero() {
    return (
        <section
            className="
                w-full 
                min-h-[70vh]
                flex flex-col lg:flex-row 
                items-center 
                justify-between 
                gap-10 
                px-5 sm:px-8 lg:px-16 
                py-10 sm:py-12 lg:py-16
            "
        >
            {/* LEFT CONTENT */}
            <div className='flex flex-col gap-6 text-center lg:text-left max-w-[700px]'>
                <h2 className='text-4xl sm:text-5xl lg:text-7xl font-[Noto_Sans] leading-tight'>
                    Wrap Yourself <br />
                    in Noir Elegance
                </h2>

                <p className='text-base sm:text-lg md:text-xl font-["cormorant"] opacity-90 leading-relaxed'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
                    Neque velit tempora ducimus sequi ipsa, voluptates nulla assumenda quia eum ut. <br />
                    Animi iste autem repudiandae similique maxime veritatis temporibus rerum id.
                </p>
            </div>

            {/* RIGHT - SLIDER SECTION */}
            <div className='w-full max-w-[600px] flex flex-col items-center px-4 sm:px-8'>
                <h2 className='font-semibold font-[Noto_Sans] mb-4 border-b pb-2 inline-block text-lg sm:text-xl'>
                    Endirimli Məhsullar
                </h2>
                <Slider />
            </div>
        </section>
    );
}


export default Hero;

