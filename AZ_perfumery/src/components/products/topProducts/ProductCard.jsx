import React from 'react'
import { ShoppingCart } from 'lucide-react';


function ProductCard({ name, image, price }) {
    return (
        <div className='bg-[#fdf6e2] flex flex-col justify-center px-3 overflow-hidden rounded-xl shadow-xl mx-auto w-[250px] sm:w-[280px] lg:w-[260px] 2xl:w-[270px] h-[370px] xl:h-[370px] 2xl:h-[390px]'>
            <div>
                <img src={image} className='rounded-xl w-full px-1.5 h-[260px]' />
            </div>

            <div className='py-1.5 px-2'>
                <h2 className='text-lg'>{name}</h2>

                <div className='flex justify-between py-2'>
                    <p className=''>{price}</p>
                    <ShoppingCart className='' />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
