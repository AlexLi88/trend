/**
 * Created by Alex on 2017-08-24.
 */
import React, { Component } from 'react'
import ShopHeader from './ShopHeader'
import Trend from './Trend'

export default class Shop extends Component{
    render(){
        return(
            <div className="shop-wrapper">
                <ShopHeader />
                <Trend />
            </div>
        )
    }
}