import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'

function Header() {
    return (
        <div className='bg-cover bg-center bg-no-repeat text-amber-50 max-lg:px-0'
            style={{ backgroundImage: "url('/images/Group1.png')" }}
        >
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header;
