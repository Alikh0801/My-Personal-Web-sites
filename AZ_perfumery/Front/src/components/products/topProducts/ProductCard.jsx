import { useState } from "react";
import { ShoppingCart } from "lucide-react";

function ProductCard({ name, image, prices }) {
    const [selectedMl, setSelectedMl] = useState("30ml");

    const getPrice = () => {
        const key = selectedMl.replace("ml", "");
        return prices?.[key];
    };

    return (
        <div className='relative flex flex-col gap-2 border border-gray-200 rounded-2xl
            w-[140px] sm:w-[155px] md:w-[170px] lg:w-[200px] 2xl:w-[220px]
            p-2 bg-[#FFFFF2] shadow-sm transition-all duration-300
            hover:shadow-xl hover:-translate-y-1'
        >
            <img
                src={`https://azperfumeryapi.vercel.app/api/uploads/${image}`}
                alt={name}
                className='rounded-xl w-full object-cover transition-transform duration-300 hover:scale-[1.03]'
            />

            <h3 className='text-center text-sm font-semibold text-gray-800 line-clamp-2'>
                {name}
            </h3>

            <div className='flex flex-col gap-3 mt-auto'>
                <div className='flex gap-2 justify-center text-sm'>
                    <span className='text-gray-500'>Qiymət:</span>
                    <span className='font-bold text-gray-900'>
                        {getPrice()}₼
                    </span>
                </div>

                <div className='flex justify-between items-center px-1.5'>
                    <select
                        value={selectedMl}
                        onChange={(e) => setSelectedMl(e.target.value)}
                        className='text-sm border rounded-lg px-2 py-1
                            focus:ring-2 focus:ring-black/20 cursor-pointer'
                    >
                        <option value="30ml">30ml</option>
                        <option value="50ml">50ml</option>
                        <option value="100ml">100ml</option>
                    </select>

                    <button
                        className='p-2 rounded-lg bg-black text-white
                            transition-all duration-300
                            hover:bg-gray-800 hover:scale-105
                            active:scale-95 shadow-md'
                    >
                        <ShoppingCart className='w-3.5 h-3.5 md:w-5 md:h-5 transition-transform hover:scale-110' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
