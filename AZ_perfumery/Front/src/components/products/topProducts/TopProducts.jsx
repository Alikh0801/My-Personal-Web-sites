import React from 'react'
import { topProducts } from '../../../db/topProducts';
import ProductCard from './ProductCard';

function TopProducts() {
    return (
        <div className='bg-[#F2EEDF]'>
            <div className='flex flex-col gap-5 py-4 lg:py-10 2xl:px-11'>
                <h2 className='font-[playfair] text-center opacity-90 text-xl md:text-3xl lg:text-3xl 2xl:text-3xl'>
                    Çox satılanlar
                </h2>

                <p className='font-[playfair] px-8 opacity-75 text-md md:text-xl lg:text-xl 2xl:text-2xl'>
                    “Ən çox satılan ətirlərimizi kəşf edin! Uzunömürlü notları, zərif qoxu balansı və unikal təravəti ilə
                    istifadəçilərin favoritinə çevrilən parfümləri sizin üçün topladıq.
                    Burada həm gündəlik istifadə üçün yüngül, həm də xüsusi anlar üçün seçilən daha dərin aromalar tapa bilərsiniz.
                    Özünüzə ən uyğun imzanı bu populyar ətirlər arasından seçin!”
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-6 lg:py-12'>
                {topProducts.map((products) => (
                    <ProductCard
                        key={products.id}
                        name={products.name}
                        image={products.img}
                        price={products.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default TopProducts;

