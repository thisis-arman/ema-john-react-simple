import React from 'react';
import './Header.css'
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div>
            <nav className='nav-bar'>
                <div className='logo'>
                <img src={logo} alt="" />
                </div>
                <div className='main-menu'>
                    <ul>
                        <li>Order</li>
                        <li>Order Review</li>
                        <li>Manage Inventory</li>
                        <li>Login</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;