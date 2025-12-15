import React, { useState } from 'react'
import { useEffect } from 'react'
import CategoryProductCard from './CategoryProductCard';

function AllProducts() {

    const [category, setCategory] = useState("men");
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:9000/api/products?category=${category}`)
            .then(res => res.json())
            .then(result => setProducts(result.data))
    }, [category]);


    return (
        <div>

            <div className='flex justify-center items-center gap-10 text-md py-4'>
                <button
                    className={`cursor-pointer border-b-2 pb-1 transition-colors ${category === "men" ? "border-blue-500 text-blue-500" : "border-transparent text-gray-700"
                        }`}
                    onClick={() => setCategory("men")}
                >
                    Men
                </button>

                <button
                    className={`cursor-pointer border-b-2 pb-1 transition-colors ${category === "women" ? "border-blue-500 text-blue-500" : "border-transparent text-gray-700"
                        }`}
                    onClick={() => setCategory("women")}
                >
                    Women
                </button>

                <button
                    className={`cursor-pointer border-b-2 pb-1 transition-colors ${category === "unisex" ? "border-blue-500 text-blue-500" : "border-transparent text-gray-700"
                        }`}
                    onClick={() => setCategory("unisex")}
                >
                    Unisex
                </button>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:flex p-5 gap-5 justify-items-center'>
                {
                    products.map(product => (
                        <CategoryProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price30ml={product.price_30ml}
                            price50ml={product.price_50ml}
                            price100ml={product.price_100ml}
                        />
                    ))
                }
            </div>

        </div>
    )
}

export default AllProducts;