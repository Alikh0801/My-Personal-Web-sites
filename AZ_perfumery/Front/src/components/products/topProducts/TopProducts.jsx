import React from 'react'
import { useState, useEffect } from 'react';
import ProductCard from './ProductCard';

function TopProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://azperfumeryapi.vercel.app/api/products/bestsellers")
            .then(res => res.json())
            .then(data => setProducts(data.data));
    }, [])
    console.log(products);


    return (
        <div className='bg-[#F2EEDF]'>
            <div className='max-w-[1440px] mx-auto'>
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

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 py-6 lg:py-12 justify-items-center'>
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            prices={product.prices}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

export default TopProducts;

