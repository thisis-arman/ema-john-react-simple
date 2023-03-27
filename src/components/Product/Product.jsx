
import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
    const {name,id,img,price,seller,ratings} =props.product
    return (
        <div className='products-container'>
            <div>
            <div className="product">
                <img src={img?img:'image is not avaiable'} alt="" />
                <h4>{name}</h4>
                <h4>Price : ${price}</h4>
                <p>Menufacturer : {seller}</p>
                <p>Rating: {ratings}</p>
            </div>
            <button className='cart-btn'>Add To Cart</button>
            </div>
            
        </div>
    );
};

export default Product;