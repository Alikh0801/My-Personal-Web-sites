import React, { useState, useEffect } from 'react';
import CategoryProductCard from './CategoryProductCard';
import { ArrowLeftToLine, ArrowRightFromLine } from 'lucide-react';

function AllProducts() {
    const [category, setCategory] = useState("men");
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(12);


    useEffect(() => {
        const updateItemsPerPage = () => {
            const width = window.innerWidth;
            if (width < 640) setItemsPerPage(6);
            else if (width < 768) setItemsPerPage(6);
            else if (width < 1024) setItemsPerPage(8);
            else if (width < 1280) setItemsPerPage(8);
            else if (width < 1536) setItemsPerPage(10);
            else if (width > 1536) setItemsPerPage(12);
            else setItemsPerPage(12);
        }
        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);
        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    // Data fetch
    useEffect(() => {
        fetch(`https://azperfumeryapi.vercel.app/api/products?category=${category}`)
            .then(res => res.json())
            .then(result => setProducts(result.data))
            .catch(err => console.error(err));
    }, [category]);

    // Category filter
    const filteredData = products.filter(p => p.category === category);

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Category deyishende sehife sifirlanacaq 
    useEffect(() => {
        setCurrentPage(1);
    }, [category]);

    return (
        <div className='bg-[#F2EEDF]'>
            <div className='max-w-[1440px] mx-auto'>
                {/* Category */}
                <div className='flex justify-center items-center gap-10 text-md py-10'>
                    {["men", "women", "unisex"].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`cursor-pointer border-b-2 pb-1 transition-colors ${category === cat
                                ? "border-blue-500 text-blue-500"
                                : "border-transparent text-gray-700"
                                }`}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>
                {/* Product Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12 p-5 justify-items-center'>
                    {currentProducts.map(product => (
                        <CategoryProductCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price30ml={product.price_30ml}
                            price50ml={product.price_50ml}
                            price100ml={product.price_100ml}
                        />
                    ))}
                </div>
                {/* Pagination */}
                <div className="flex justify-center items-center gap-5 py-10 flex-wrap">
                    <button
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-black transition-all ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        <ArrowLeftToLine className="w-5 h-5" />
                    </button>

                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg border border-gray-300 cursor-pointer transition-all ${currentPage === i + 1
                                ? "bg-blue-500 text-white border-blue-500"
                                : "bg-white text-gray-700 hover:bg-black hover:text-white"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className={`flex items-center justify-center w-8 h-8 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:text-black transition-all ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        <ArrowRightFromLine className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AllProducts;
