import React from 'react'
import { useParams } from 'react-router-dom'
import images from '../../assets/images/hero-img.png'
import './singleItem.scss'

const SingleItem = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <section className='singleItem'>
            <h1>Shop Item</h1>
            <div className="singleItem__card">
                <div className="singleItem__card__img"> <img src={images} alt="" /> </div>
                <div className="singleItem__card__title">
                    <h2>Samsung S21 Silicon Cover</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed.
                    </p>
                    <p>Contact us : 072 706 6455 | 071 789 9466</p>
                </div>
            </div>
            <h2>similar Products</h2>
            <div className="singleItem__cards"></div>
        </section>
    )
}

export default SingleItem