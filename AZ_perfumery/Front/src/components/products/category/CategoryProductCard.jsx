import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

function CategoryProductCard({ title, image, prices }) {
    const [selectedMl, setSelectedMl] = useState("30ml");

    const getPrice = () => {
        // selectedMl: "30ml" => prices["30"]
        const key = selectedMl.replace("ml", "");
        return prices[key];
    }

    return (
        <div
            className="
        group relative flex flex-col
        w-40 sm:w-[185px] md:w-[190px] lg:w-[200px] 2xl:w-[210px]
        bg-[#FFFFF2] rounded-2xl border border-gray-200
        shadow-sm transition-all duration-300
        hover:shadow-xl hover:-translate-y-1"
        >
            {/* Image */}
            <div className="relative overflow-hidden rounded-t-2xl">
                <img
                    src={`https://azperfumeryapi.vercel.app/api/uploads/${image}`}
                    alt={title}
                    className="
                w-full h-[195px] sm:h-[210px] md:h-[220px] lg:h-[225px] 2xl:h-[250px]
                object-cover transition-transform duration-500
                group-hover:scale-[1.02]"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-3 gap-2">
                <h3
                    className="
                text-center text-sm md:text-base
                font-semibold text-gray-800
                line-clamp-2 leading-snug"
                >
                    {title}
                </h3>

                {/* Price */}
                <div className="flex justify-center items-center gap-1 text-sm mt-1">
                    <span className="text-gray-500">Qiymət:</span>
                    <span className="font-bold text-gray-900">
                        {getPrice()}₼
                    </span>
                </div>

                {/* Bottom controls */}
                <div className="mt-auto flex items-center justify-between gap-2">
                    <select
                        value={selectedMl}
                        onChange={(e) => setSelectedMl(e.target.value)}
                        className="
                    text-xs sm:text-sm
                    border rounded-lg px-2 py-1
                    bg-white cursor-pointer
                    focus:outline-none focus:ring-2 focus:ring-black/20"
                    >
                        <option value="30ml">30ml</option>
                        <option value="50ml">50ml</option>
                        <option value="100ml">100ml</option>
                    </select>

                    <button
                        className="
                    flex items-center justify-center
                    p-2 rounded-lg
                    bg-black text-white
                    transition-all duration-300
                    hover:bg-gray-800 hover:scale-105
                    active:scale-95"
                    >
                        <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                </div>
            </div>
        </div>

    );
}

export default CategoryProductCard;
