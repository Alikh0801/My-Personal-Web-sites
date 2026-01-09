import React from 'react'
import Header from './components/header/Header'
import TopProducts from './components/products/topProducts/TopProducts'
import WhyUs from './components/WhyUs/WhyUs'
import AllProducts from './components/products/category/AllProducts'
import Footer from './components/footer/Footer'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Header />
      <TopProducts />
      <WhyUs />
      <AllProducts />
      <Footer />
    </CartProvider>
  )
}

export default App