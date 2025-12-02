import React from 'react'
import { ShoppingCart } from 'lucide-react';


function ProductCard({ name, image, price }) {
    return (
        <div className='bg-[#F5F3F2] shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer flex flex-col'>
            <div className='relative'>
                <img src={image} className='w-full h-[400px] object-cover p-7' />
                <div className='absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent'></div>
            </div>

            <div className='p-4 flex flex-col justify-between flex-1'>
                <h2 className='text-2xl font-[cinzel] text-gray-800 mb-2'>{name}</h2>

                <div className='flex justify-between items-center'>
                    <p className='text-xl font-semibold text-gray-700'>{price}</p>
                    <ShoppingCart className='text-gray-800 hover:text-green-500 transition' />
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
