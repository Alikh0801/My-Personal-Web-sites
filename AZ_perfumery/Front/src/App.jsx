import React from 'react'
import Header from './components/header/Header'
import TopProducts from './components/products/topProducts/TopProducts'
import WhyUs from './components/WhyUs/WhyUs'
import AllProducts from './components/products/category/AllProducts'

function App() {
  return (
    <div>
      <Header />
      <TopProducts />
      <WhyUs />
      <AllProducts />
    </div>
  )
}

export default App