// Footer.jsx
import { Instagram, MessageCircle, Phone } from 'lucide-react';

function Footer() {
    return (
        <footer id='footer' className="bg-gray-900 text-gray-100 py-10">
            <div className='max-w-[1440px] mx-auto'>
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                    {/* Brand */}
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h1 className="text-2xl font-bold">A&Z Perfumery</h1>
                        <p className="text-gray-400 mt-2">
                            Üslubunuza uyğun eksklüziv ətirlər.
                        </p>
                    </div>

                    {/* Contact & Socials */}
                    <div className="flex flex-col md:flex-row items-center gap-6">

                        {/* Phone */}
                        <a
                            href="tel:+994552137797"
                            className="flex items-center gap-2 hover:text-pink-500 transition-colors"
                        >
                            <Phone size={20} />
                            +994 55 213 77 97
                        </a>

                        {/* Social links */}
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/az_perfumery"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-pink-500 transition-colors"
                            >
                                <Instagram size={24} />
                            </a>
                            <a
                                href="https://wa.me/994552137797"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-emerald-500 transition-colors"
                            >
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} A&Z Perfumery. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
export default Footer;
