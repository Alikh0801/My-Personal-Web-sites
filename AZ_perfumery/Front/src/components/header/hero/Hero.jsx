import React from 'react'
import Slider from './Swipper'

function Hero() {
    return (
        <section className="flex flex-col gap-7 xl:grid xl:grid-cols-2 lg:py-10 xl:py-6">
            {/* LEFT CONTENT */}
            <div className='flex flex-col gap-8 xl:justify-center xl:gap-14'>
                <h2 className='text-3xl font-semibold font-[Noto_Sans] text-center sm:text-4xl md:text-5xl lg:text-6xl'>
                    Wrap Yourself <br />
                    in Noir Elegance
                </h2>

                <p className='text-lg sm:xl md:text-2xl xl:text-3xl font-["cormorant"] opacity-80 text-center px-5 sm:px-7 md:px-12 lg:px-10 xl:px-30'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Neque velit tempora ducimus sequi ipsa, voluptates nulla assumenda quia eum ut.
                </p>
            </div>

            {/* RIGHT - SLIDER SECTION */}
            <div className='w-[250px] sm:w-[260px] md:w-[300px] lg:w-[300px] mx-auto h-auto flex flex-col items-center justify-center gap-10 py-8'>
                <h2 className='font-semibold font-[Noto_Sans] border-b inline-block text-xl md:text-2xl'>
                    Həftənin fürsəti
                </h2>
                <Slider />
            </div>
        </section>
    );
}


export default Hero;

