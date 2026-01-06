import Hero from './hero/Hero'
import Navbar from './navbar/Navbar';

function Header() {
    return (
        <div className='bg-cover bg-no-repeat text-amber-50'
            style={{ backgroundImage: "url('/background/Group1.png')" }}>
            <Navbar />
            <Hero />
        </div>
    )
}

export default Header;
