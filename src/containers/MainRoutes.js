/**
 * Created by Alex on 2017-08-23.
 */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import  ShopContainer from './ShopContainer'
import './App.css';

class MainRoutes extends Component{
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/" component={ShopContainer}/>
                </Switch>
            </main>
        )
    }
}

export default MainRoutes