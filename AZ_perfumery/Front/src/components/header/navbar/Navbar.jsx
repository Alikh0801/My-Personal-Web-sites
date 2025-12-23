import React, { useState, useEffect, useRef } from "react";
import {
    Search,
    ShoppingCart,
    UserRound,
    X,
    Menu,
} from "lucide-react";

function Navbar() {
    const [showSearch, setShowSearch] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

    const searchRef = useRef(null);
    const inputRef = useRef(null);

    /* ---------------- Desktop Search Outside Click ---------------- */
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setShowSearch(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    /* ---------------- Desktop Search Autofocus ---------------- */
    useEffect(() => {
        if (showSearch) {
            setTimeout(() => inputRef.current?.focus(), 150);
        }
    }, [showSearch]);

    /* ---------------- Scroll Lock (Mobile Menu) ---------------- */
    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen || loginOpen ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [mobileMenuOpen, loginOpen]);

    return (
        <>
            {/* ================= HEADER ================= */}
            <header className="flex justify-between items-center py-8 px-6 lg:px-12 text-[#EEF2D8] relative z-50">

                {/* Logo */}
                <a href="#">
                    <h1 className="text-2xl font-[Lora]">A&Z Perfumery</h1>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex gap-10 text-xl font-[Lora]">
                    <a href="#products" className="hover:scale-110 transition-all hover:text-[#C8CC68] cursor-pointer">
                        Məhsullar
                    </a>
                    <a href="#footer" className="hover:scale-110 transition-all hover:text-[#C8CC68] cursor-pointer">
                        Bizimlə əlaqə
                    </a>
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex gap-6 items-center relative">
                    <Search
                        onClick={() => setShowSearch(true)}
                        className="cursor-pointer hover:scale-110 transition-all"
                    />

                    <ShoppingCart className="cursor-pointer hover:scale-110 transition-all" />

                    <button onClick={() => setLoginOpen(true)} className="flex gap-2 rounded-md px-4 py-2 font-[Lora] bg-[#2B5E33] hover:bg-[#3D7845] transition-all cursor-pointer">
                        Daxil ol <UserRound />
                    </button>

                    {/* Desktop Search Overlay */}
                    <div
                        ref={searchRef}
                        className={`absolute right-0 top-full mt-4 w-[320px] bg-[#1f1e1e] rounded-xl p-4 shadow-2xl transition-all duration-300 origin-top ${showSearch ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
                    >
                        <div className="flex items-center gap-3 border border-[#3a3a3a] rounded-lg px-3 py-2">
                            <Search size={18} />
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Axtarış et..."
                                className="bg-transparent w-full outline-none text-sm"
                            />
                            <X
                                onClick={() => setShowSearch(false)}
                                className="cursor-pointer hover:text-red-400"
                                size={18}
                            />
                        </div>
                    </div>
                </div>

                {/* Mobile Hamburger */}
                <div className="lg:hidden">
                    <button onClick={() => setMobileMenuOpen(true)}>
                        <Menu size={32} />
                    </button>
                </div>
            </header>

            {/* ================= MOBILE OVERLAY ================= */}
            <div
                onClick={() => setMobileMenuOpen(false)}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity
                ${mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />

            {/* ================= MOBILE MENU ================= */}
            <aside
                className={`fixed top-0 right-0 h-full w-[80%] max-w-[320px]
                bg-[#1f1e1e] text-[#EEF2D8] z-50 p-6
                transition-transform duration-300
                ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close */}
                <div className="flex justify-end">
                    <X
                        size={28}
                        className="cursor-pointer"
                        onClick={() => setMobileMenuOpen(false)}
                    />
                </div>

                {/* Nav */}
                <nav className="flex flex-col gap-6 mt-10 text-lg font-[Lora]">
                    <a href="#products" className="hover:text-[#C8CC68]">Məhsullar</a>
                    <a href="#footer" className="hover:text-[#C8CC68]">Bizimlə əlaqə</a>
                </nav>

                {/* Mobile Search */}
                <div className="mt-8 border border-[#3a3a3a] rounded-lg px-3 py-2 flex items-center gap-3">
                    <Search size={18} />
                    <input
                        type="text"
                        placeholder="Axtarış et..."
                        className="bg-transparent w-full outline-none text-sm"
                    />
                </div>

                {/* Actions */}
                <div className="flex gap-14 mt-8 items-center">
                    <ShoppingCart />
                    <button onClick={() => {
                        setMobileMenuOpen(false);
                        setLoginOpen(true);
                    }}
                        className="flex gap-2 rounded-md px-4 py-2 font-[Lora] bg-[#2B5E33]">
                        Daxil ol <UserRound />
                    </button>
                </div>
            </aside>
            {/* ================= LOGIN OVERLAY ================= */}
            <div
                onClick={() => setLoginOpen(false)}
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity
                ${loginOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />
            {/* ================= LOGIN MODAL ================= */}
            <div
                className={`fixed inset-0 z-50 flex items-center justify-center px-4
                transition-all duration-300
                ${loginOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
            >
                <div className="w-full max-w-md bg-[#121212] text-[#EEF2D8] rounded-3xl shadow-2xl overflow-hidden">

                    {/* Header */}
                    <div className="relative px-6 pt-6 pb-4 border-b border-[#2a2a2a]">
                        <h2 className="text-2xl font-[Lora] text-center">
                            Hesaba daxil ol
                        </h2>

                        <X
                            size={22}
                            onClick={() => setLoginOpen(false)}
                            className="absolute top-6 right-6 cursor-pointer hover:text-red-400 transition-colors"
                        />
                    </div>

                    {/* Body */}
                    <div className="px-6 py-6">
                        <form className="flex flex-col gap-4">

                            {/* Email */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-[#AEB39A]">
                                    Email ünvanı
                                </label>
                                <input
                                    type="email"
                                    placeholder="example@mail.com"
                                    className="bg-transparent border border-[#3a3a3a] rounded-xl px-4 py-3 outline-none focus:border-[#C8CC68] transition-colors"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-1">
                                <label className="text-sm text-[#AEB39A]">
                                    Şifrə
                                </label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="bg-transparent border border-[#3a3a3a] rounded-xl px-4 py-3 outline-none focus:border-[#C8CC68] transition-colors"
                                />
                            </div>

                            {/* Forgot password */}
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="text-sm text-[#C8CC68] hover:underline"
                                >
                                    Şifrəmi unutdum
                                </button>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-2 bg-[#2B5E33] hover:bg-[#3D7845] transition-all rounded-xl py-3 font-[Lora] text-lg"
                            >
                                Daxil ol
                            </button>
                        </form>
                    </div>

                    {/* Footer */}
                    <div className="px-6 py-4 border-t border-[#2a2a2a] text-center">
                        <p className="text-sm text-[#AEB39A]">
                            Hesabınız yoxdur?
                        </p>
                        <button
                            type="button"
                            className="mt-1 text-[#C8CC68] hover:underline font-medium"
                        >
                            Yeni hesab yarat
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Navbar;
