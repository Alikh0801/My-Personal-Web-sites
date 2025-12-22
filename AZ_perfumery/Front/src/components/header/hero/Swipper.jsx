import React, { useRef, useState, useEffect } from 'react';
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
    const [discountProduct, setdiscountProduct] = useState([]);
    const progressCircle = useRef(null);
    const progressContent = useRef(null);

    useEffect(() => {
        fetch("http://localhost:9000/api/products/discount")
            .then(res => res.json())
            .then(result => {
                if (result.ok) {
                    console.log(result.data);

                    setdiscountProduct(result.data)
                }
            })
            .catch(err => console.error("Discount fetch error:", err))
    }, []);

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
                    discountProduct.map((p) => (
                        <SwiperSlide key={p.id}>

                            <div className='flex flex-col bg-[#131329] p-3 rounded-xl text-[#F3F5DF] gap-2 md:p-4'>
                                <div className='px-2 flex flex-col gap-2'>
                                    <h2 className="text-lg font-semibold opacity-80">{p.title}</h2>
                                    <div className="flex gap-2">
                                        <span className="text-md font-bold">{p.prices["30"] - p.prices["30"] * p.discount / 100} ₼</span>
                                        <span className="text-sm line-through opacity-50">{p.prices["30"]} ₼</span>
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <img
                                        src={`https://azperfumeryapi.vercel.app/api/uploads/${p.image}`}
                                        alt="parfumeSwipper"
                                        className="h-[300px] sm:h-[310px] md:h-[350px] w-full p-1 rounded-2xl"
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
