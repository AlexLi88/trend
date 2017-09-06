/**
 * Created by Alex on 2017-08-23.
 */
import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import Shop from '../components/Shop'
import Recommendation from '../components/Recommendation'
import PrivateRoute from './PrivateRoute'
import '../containers/App.css';


class MainRoutes extends Component{
    render() {
        return (
            <main>
                <Switch>
                    <PrivateRoute exact path="/" component={Shop}/>
                    <PrivateRoute path="/recom" component={Recommendation}/>
                </Switch>
            </main>
        )
    }
}

export default MainRoutes