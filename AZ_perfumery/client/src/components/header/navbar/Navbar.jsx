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
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchMl, setSearchMl] = useState({});


    const searchRef = useRef(null);
    const inputRef = useRef(null);

    /* ---------------- Desktop Search Outside Click ---------------- */
    useEffect(() => {
        if (mobileMenuOpen) return; // MOBİL-de DEAKTİV

        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [mobileMenuOpen]);

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

    // All products for Navbar
    useEffect(() => {
        if (searchValue.trim().length < 2) {
            setSearchResults([]);
            return;
        }

        const timeout = setTimeout(() => {
            fetch(`http://localhost:9000/api/products/search?q=${searchValue}`)
                .then(res => res.json())
                .then(data => setSearchResults(data.data))
                .catch(() => setSearchResults([]));
        }, 300); // debounce

        return () => clearTimeout(timeout);
    }, [searchValue]);

    const getSearchPrice = (prices, ml) => {
        const key = ml.replace("ml", "");
        return prices[key];
    };

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
                        <div className="relative flex items-center gap-3 border border-[#3a3a3a] rounded-lg px-3 py-2">
                            <Search size={18} />
                            <input
                                ref={inputRef}
                                value={searchValue}
                                onFocus={() => setSearchOpen(true)}
                                onChange={(e) => {
                                    setSearchValue(e.target.value);
                                    setSearchOpen(true);
                                }}
                                type="text"
                                placeholder="Axtarış et..."
                                className="bg-transparent w-full outline-none text-sm"
                            />
                            {searchOpen && searchResults.length > 0 && (
                                <div className="absolute left-0 top-full mt-2 w-full bg-[#1f1e1e]
                                    rounded-xl shadow-2xl z-50 max-h-[300px] overflow-y-auto">

                                    {searchResults.map(product => {
                                        const selectedMl = searchMl[product._id] || "30ml";

                                        return (
                                            <div
                                                key={product._id}
                                                className="flex gap-4 p-3 hover:bg-[#2a2a2a] transition-all"
                                            >
                                                <img
                                                    src={`http://localhost:9000${product.image}`}
                                                    alt={product.title}
                                                    className="w-12 h-12 object-cover rounded-lg"
                                                />

                                                <div className="flex-1">
                                                    <p className="text-sm font-medium">{product.title}</p>

                                                    {/* PRICE */}
                                                    <div className="text-xs text-[#C8CC68] mt-1">
                                                        {getSearchPrice(product.prices, selectedMl)} ₼
                                                    </div>

                                                    {/* ML + CART */}
                                                    <div className="flex items-center gap-2 mt-2">
                                                        <select
                                                            value={selectedMl}
                                                            onChange={(e) =>
                                                                setSearchMl(prev => ({
                                                                    ...prev,
                                                                    [product._id]: e.target.value
                                                                }))
                                                            }
                                                            className="bg-[#1f1e1e] border border-[#3a3a3a] text-xs rounded px-2 py-1"
                                                        >
                                                            <option value="30ml">30ml</option>
                                                            <option value="50ml">50ml</option>
                                                            <option value="100ml">100ml</option>
                                                        </select>

                                                        <button className="p-1 rounded bg-black text-white hover:scale-105 transition">
                                                            <ShoppingCart size={14} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}


                                </div>
                            )}
                            {searchOpen && searchValue && searchResults.length === 0 && (
                                <div className="absolute left-0 top-full mt-2 w-full bg-[#1f1e1e]
                                    rounded-xl p-4 text-sm text-center text-gray-400">
                                    Nəticə tapılmadı
                                </div>
                            )}


                            <X
                                onClick={() => {
                                    setShowSearch(false);
                                    setSearchOpen(false);
                                    setSearchValue("");
                                    setSearchResults([]);
                                }}
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
                onClick={(e) => e.stopPropagation()}
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
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setSearchOpen(false);
                            setSearchValue("");
                            setSearchResults([]);
                        }}
                    />
                </div>

                {/* Nav */}
                <nav className="flex flex-col gap-6 mt-10 text-lg font-[Lora]">
                    <a href="#products" className="hover:text-[#C8CC68]">Məhsullar</a>
                    <a href="#footer" className="hover:text-[#C8CC68]">Bizimlə əlaqə</a>
                </nav>

                {/* Mobile Search */}
                {/* Mobile Search Wrapper */}
                <div
                    className="mt-8"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Input */}
                    <div
                        className="border border-[#3a3a3a] rounded-lg px-3 py-2 flex items-center gap-3"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Search size={18} />
                        <input
                            value={searchValue}
                            onFocus={() => setSearchOpen(true)}
                            onChange={(e) => {
                                setSearchValue(e.target.value);
                                setSearchOpen(true);
                            }}
                            type="text"
                            placeholder="Axtarış et..."
                            className="bg-transparent w-full outline-none text-sm"
                        />
                    </div>

                    {/* Results */}
                    {searchOpen && searchResults.length > 0 && (
                        <div
                            className="mt-3 bg-[#1f1e1e] rounded-xl shadow-xl max-h-[50vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {searchResults.map((product) => {
                                const selectedMl = searchMl[product._id] || "30ml";

                                return (
                                    <div
                                        key={product._id}
                                        className="flex gap-3 p-3 border-b border-[#2a2a2a]"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <img
                                            src={`http://localhost:9000${product.image}`}
                                            className="w-14 h-14 rounded-lg object-cover"
                                            alt={product.title}
                                        />

                                        <div className="flex-1">
                                            <p className="text-sm font-medium">{product.title}</p>

                                            <p className="text-xs text-[#C8CC68]">
                                                {getSearchPrice(product.prices, selectedMl)} ₼
                                            </p>

                                            <div className="flex items-center gap-2 mt-2">
                                                <select
                                                    value={selectedMl}
                                                    onClick={(e) => e.stopPropagation()}
                                                    onChange={(e) =>
                                                        setSearchMl((prev) => ({
                                                            ...prev,
                                                            [product._id]: e.target.value,
                                                        }))
                                                    }
                                                    className="bg-[#1f1e1e] border border-[#3a3a3a] text-xs rounded px-2 py-1"
                                                >
                                                    <option value="30ml">30ml</option>
                                                    <option value="50ml">50ml</option>
                                                    <option value="100ml">100ml</option>
                                                </select>

                                                <button
                                                    onClick={(e) => e.stopPropagation()}
                                                    className="p-2 rounded bg-black text-white"
                                                >
                                                    <ShoppingCart size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {searchOpen && searchValue && searchResults.length === 0 && (
                        <div
                            className="mt-3 text-center text-sm text-gray-400"
                            onClick={(e) => e.stopPropagation()}
                        >
                            Nəticə tapılmadı
                        </div>
                    )}
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
                    <h2 className="text-center text-2xl text-[#C8CC68]">Tezliklə...</h2>

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
                                <a href="">
                                    <button
                                        type="button"
                                        className="text-sm text-[#C8CC68] hover:underline  cursor-pointer"
                                    >
                                        Şifrəmi unutdum
                                    </button>
                                </a>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="mt-2 bg-[#2B5E33] hover:bg-[#3D7845] transition-all rounded-xl py-3 font-[Lora] text-lg cursor-pointer"
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
                        <a href="">
                            <button
                                type="button"
                                className="mt-1 text-[#C8CC68] hover:underline font-medium cursor-pointer"
                            >
                                Yeni hesab yarat
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Navbar;
