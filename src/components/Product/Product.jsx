import React from 'react';
import './Product.css'
// import {FontAwesome} from '@fontawesome/react-fontawesome'
// import { faShoppingCart } from '@fontawesome/free-solid-svg-icons';

const Product = (props) => {
    console.log(props)
    const {name,id,img,price,seller,ratings} =props.product
    const handleAddToCart = props.handleAddToCart
    return (
        <div className='products-container'>
            <div>
            <div className="product">
                <img src={img} alt="" />
                <h4>{name}</h4>
                <h4>Price : ${price}</h4>
                <p>Menufacturer : {seller}</p>
                <p>Rating: {ratings}Star</p>
            </div>
            <button onClick={()=> handleAddToCart(props.product)} className='cart-btn'>
                {/* <FontAwesomeIcon icon={faShoppingCart}/> */}
                Add To Cart
                </button>
            </div>
            
        </div>
    );
};

export default Product;