import React from 'react'

function BlogCard1({ img, title, desc }) {
    return (
        <div className='grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2 md:items-center xl:flex'>
            <div>
                <img
                    src={img}
                    className='object-cover rounded-2xl w-[200px] md:w-[220px] lg:w-[230px] xl:w-full xl:px-14 xl:py-12' />
            </div>

            <div className='text-[#EDF2C4] font-[cormorant] px-10 space-y-10 lg:py-10 lg:px-4 xl:px-40'>
                <h2 className='text-3xl font-[cinzel] lg:text-4xl'>{title}</h2>
                <p className='text-xl lg:text-2xl py-4'>{desc}</p>
            </div>
        </div>
    );
}

export default BlogCard1;

