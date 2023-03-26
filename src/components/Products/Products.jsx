import React from 'react';
import './Products.css'

const Products = (props) => {
    const { img, name, price, seller, ratings } = (props.product)
    return (
        <div className='products'>
            <img src={img} alt="" />
            <div className='products-info'>
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Star</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Products;