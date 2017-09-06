import React, { Component } from 'react'
import './ShopHeader.css'
import { Link } from 'react-router-dom'
import shopLogo from './aritzia_logo_2012.png'

export default class ShopHeader extends Component{
    render(){
        return(
            <div className="shop-header-container">
                <div className="shop-logo">
                    <a href="http://www.aritzia.com/en/home" target="_blank" rel="noopener noreferrer">
                        <img src={shopLogo}
                             alt="shopLogo"
                        />
                    </a>
                </div>
                <div className="shop-menu">
                    <ul>
                        <li>
                            <a href="http://www.aritzia.com/en/new">New</a>
                        </li>
                        <li>
                            <a href="http://www.aritzia.com/en/clothing">Clothing</a>
                        </li>
                        <li>
                            <a href="http://www.aritzia.com/en/brands">Brands</a>
                        </li>
                        <li>
                            <a href="http://www.aritzia.com.en/accessories">Accessories</a>
                        </li>
                        <li>
                            <Link to="/">Trends</Link>
                        </li>
                        <li>
                            <Link to="/recom">Recommendations</Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}