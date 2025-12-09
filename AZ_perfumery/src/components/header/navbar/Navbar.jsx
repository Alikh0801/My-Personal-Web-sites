import React from 'react'
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { UserRound } from 'lucide-react';



function Navbar() {
    return (
        <header className="flex justify-between items-center py-8 px-6 lg:px-12 text-[#EEF2D8] relative">

            <a href="">
                <h1 className="text-2xl font-[Lora]">A&Z Perfumery</h1>
            </a>
            <nav className="hidden lg:flex gap-10 text-xl font-[Lora]">
                <a className="hover:scale-[1.1] transition-all hover:text-[#C8CC68]">BLOG</a>
                <a className="hover:scale-[1.1] transition-all hover:text-[#C8CC68]">Məhsullar</a>
                <a className="hover:scale-[1.1] transition-all hover:text-[#C8CC68]">Bizimlə əlaqə</a>
            </nav>
            <div className="hidden lg:flex gap-6 items-center">
                <div className="flex gap-6">
                    <Search className="cursor-pointer hover:scale-[1.1] transition-[0.5]" />
                    <ShoppingCart className="cursor-pointer hover:scale-[1.1] transition-[0.5]" />
                </div>

                <button className="flex gap-2 rounded-md px-4 py-2 font-[Lora] bg-[#2B5E33] text-amber-100 hover:bg-[#3D7845] transition-all">
                    Daxil ol <UserRound />
                </button>
            </div>
            <div className="lg:hidden flex items-center gap-5">
                <Search className="cursor-pointer" />
                <ShoppingCart className="cursor-pointer" />
                <button className="text-3xl">☰</button>
            </div>
            <div className="absolute top-full left-0 w-full bg-[#1f1e1e] text-white p-6 flex-col gap-6 hidden">
                <a className="text-lg">BLOG</a>
                <a className="text-lg">Məhsullar</a>
                <a className="text-lg">Bizimlə əlaqə</a>

                <button className="flex gap-2 rounded-md px-4 py-3 font-[Lora] bg-[#2B5E33] text-amber-100 hover:bg-[#3D7845] transition-all mt-2">
                    Daxil ol <UserRound />
                </button>
            </div>
        </header>
    );
}

export default Navbar;

