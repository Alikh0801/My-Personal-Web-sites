import React from 'react'
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';


function CategoryProductCard({ title, image, price30ml, price50ml, price100ml }) {
    const [selectedMl, setSelectedMl] = useState("30ml")

    const getPrice = () => {
        if (selectedMl === "30ml") return price30ml;
        if (selectedMl === "50ml") return price50ml;
        if (selectedMl === "100ml") return price100ml;
    }

    return (
        <div className='flex flex-col gap-2 border rounded-xl w-[145px] sm:w-[155px] md:w-[170px] p-2'>
            <img src={`http://localhost:9000/api/uploads/${image}`} alt={title} className='rounded-md' />

            <h3 className='text-center'>{title}</h3>

            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 justify-center'>
                    <span>Qiymət:</span>
                    <span>{getPrice()}₼</span>
                </div>

                <div className='flex justify-between px-1.5'>
                    <select
                        value={selectedMl}
                        onChange={(e) => setSelectedMl(e.target.value)}
                    >
                        <option value="30ml">30ml</option>
                        <option value="50ml">50ml</option>
                        <option value="100ml">100ml</option>
                    </select>
                    <button className='cursor-pointer'><ShoppingCart /></button>
                </div>
            </div>
        </div>



    );
}

export default CategoryProductCard;
