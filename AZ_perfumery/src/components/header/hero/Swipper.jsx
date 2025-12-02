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
                className="mySwiper"
            >
                {
                    itemsDiscount.map((p, i) => (
                        <SwiperSlide key={i}>
                            <div className="bg-[#171515] rounded-2xl text-white shadow-lg flex flex-col gap-3 p-4 sm:p-6 w-full max-w-[500px] mx-auto">
                                <h2 className="text-lg sm:text-xl font-semibold">{p.title}</h2>
                                <p className="text-sm sm:text-base opacity-60">{p.desc}</p>

                                <div className="flex gap-3 items-center">
                                    <span className="text-xl font-bold">{p.price}</span>
                                    <span className="line-through opacity-50">{p.oldPrice}</span>
                                </div>

                                <img
                                    src={`/images/${p.img}`}
                                    alt="parfumeSwipper"
                                    className="w-full h-60 sm:h-[330px] md:h-[380px] rounded-xl mt-3 object-cover"
                                />
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
