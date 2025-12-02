import React, { useRef, useState } from 'react';
import BlogCard1 from './BlogCard1';
import { blogData } from '../../db/blog';

function Blog() {
    return (
        <div className='bg-[url(background/bgimg.jpeg)] bg-cover bg-center w-full text-[#EDF2C4]'>
            <div>
                <h2 className='py-10 px-15 font-[cinzel] text-3xl md:text-4xl'>Niyə Bizi Seçməlisən</h2>
            </div>
            <div>
                {blogData.map((data, index) => (
                    <BlogCard1
                        key={index}
                        title={data.title}
                        img={data.img}
                        desc={data.desc}
                        showImage={index === 0}
                    />
                ))}
            </div>


        </div>
    );
}

export default Blog;



