import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './swipeer.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { itemsDiscount } from "../../../db/discountData";

function Slider() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div id='hero-slider' className="w-full">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
            >
                {
                    itemsDiscount.map((p, i) => (
                        <SwiperSlide key={i}>
                            <div className='flex flex-col bg-[#131329] p-4 rounded-xl text-[#F3F5DF] gap-2 md:p-4'>
                                <h2 className="text-xl font-semibold opacity-80">{p.title}</h2>
                                <p className="text-md opacity-80 md:text-xl">{p.desc}</p>

                                <div className="flex gap-2">
                                    <span className="text-xl font-bold">{p.price}</span>
                                    <span className="line-through opacity-50">{p.oldPrice}</span>
                                </div>

                                <div className='w-full'>
                                    <img
                                        src={`/images/${p.img}`}
                                        alt="parfumeSwipper"
                                        className="h-[250px] w-full p-1 rounded-2xl sm:h-[280px] md:h-[300px]"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
}


export default Slider;
