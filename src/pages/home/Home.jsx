import React from 'react'
import Hero from './components/hero/Haro'
import ProductSlider from '../../components/productSlider/ProductSlider'
import SectionIcon from './components/sections/SectionIcon'
import ThreeImages from './components/threeImages/ThreeImages'
import ShopPremium from './components/shopPremium/ShopPremium'
import ThreeCards from './components/threeCards/ThreeCards'
import { tabsProduct } from '../../static'

const Home = () => {
    const cards = tabsProduct?.map((tab) => <ThreeCards key={tab.id} {...tab} />)

    return (
        <section className='container'>
            <Hero />
            <ProductSlider />
            <section className='SectionTitle'>
                <SectionIcon name={'about us'} key={1} />
                <h1 className="sectionTitle__text"> If you're looking for a Premium Quality Tempered Glass or Back-cover for your Device </h1>
                <p className="sectionTitle__info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </section>
            <ThreeImages />
            <ShopPremium />
            <SectionIcon name={'Why Choose US'} key={2} />
            <div className='threeCards'> {cards} </div>
        </section>
    )
}

export default Home