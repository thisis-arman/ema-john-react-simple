import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts]=useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div>
            <div className="shop-container">
              <div className='container__product'>
              <div className='products-container'>
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
              </div>
                <div>
                    <h3>Order Summary</h3>
                </div>

            </div>
        </div>
    );
};

export default Shop;