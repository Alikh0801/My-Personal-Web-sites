import React from 'react'
import { topProducts } from '../../../db/topProducts';
import ProductCard from './ProductCard';

function TopProducts() {
    return (
        <div className='bg-[#F2EEDF]'>
            <div className='grid grid-cols-1 xl:grid-cols-2 md:px-20 lg:px-10'>
                <h2 className='mt-10 text-3xl font-[playfair] px-18 lg:mt-32'>
                    Çox satılanlar
                </h2>

                <p className='py-15 font-[playfair] text-2xl px-10'>
                    “Ən çox satılan ətirlərimizi kəşf edin! Uzunömürlü notları, zərif qoxu balansı və unikal təravəti ilə
                    istifadəçilərin favoritinə çevrilən parfümləri sizin üçün topladıq.
                    Burada həm gündəlik istifadə üçün yüngül, həm də xüsusi anlar üçün seçilən daha dərin aromalar tapa bilərsiniz.
                    Özünüzə ən uyğun imzanı bu populyar ətirlər arasından seçin!”
                </p>
            </div>

            <div className='grid grid-cols-1 px-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-12 sm:px-30 md:px-10 xl:px-10'>
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

