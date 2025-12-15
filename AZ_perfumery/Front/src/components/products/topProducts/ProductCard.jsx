import React from 'react'
import { ShoppingCart } from 'lucide-react';


function ProductCard({ name, image, price }) {
    return (
        <div className='bg-[#fdf6e2] flex flex-col justify-center px-3 overflow-hidden rounded-xl shadow-xl mx-auto w-[220px] sm:w-[230px] lg:w-[260px] 2xl:w-[270px] h-[390px] xl:h-[390px]'>
            <div>
                <img src={image} className='rounded-xl w-full px-1.5 h-[260px]' />
            </div>

            <div className='py-1.5 px-2'>
                <h2 className='text-lg'>{name}</h2>

                <div className='flex justify-between items-center py-2'>
                    <p className='text-xl'>{price}</p>
                    <button className='items-center rounded-2xl border px-5 py-2 hover:scale-[1.1] transition-all hover:shadow-lg hover:shadow-gray-800 cursor-pointer'>
                        <ShoppingCart className='text-emerald-600' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
