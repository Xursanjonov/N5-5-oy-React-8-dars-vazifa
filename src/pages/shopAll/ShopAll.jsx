import React from 'react'
import ShopaAllProducts from './components/ShopAllProducts'
import './shopAll.scss'

const ShopAll = () => {
  return (
    <section className='shopAll'>
      <h1>Shop All Products</h1>
      <div className="shopAll__products__div">
        <ShopaAllProducts />
      </div>
    </section>
  )
}

export default ShopAll