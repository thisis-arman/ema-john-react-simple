import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]= useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product)=>{
        console.log(product)
        const newCart = [...cart,product]
        setCart(newCart)

    }
    return (
        <div>
            <div className="shop-container">
              <div className='container__product'>
              <div className='products-container'>
                    {
                        products.map(product => <Product product={product}
                        handleAddToCart={handleAddToCart}></Product>)
                    }
                </div>
              </div>
                <div>
                    <h3>Order Summary</h3>
                    <p>Selected Items: {cart.length}</p>
                </div>

            </div>
        </div>
    );
};

export default Shop;