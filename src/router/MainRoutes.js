/**
 * Created by Alex on 2017-08-23.
 */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Shop from '../components/Shop'
import New from '../components/New'
import Recommendation from '../components/Recommendation'
import Similar from '../components/Similar'
import PrivateRoute from './PrivateRoute'
import '../containers/App.css';


class MainRoutes extends Component{
    render() {
        return (
            <main>
                <Switch>
                    <Route exact path="/demos/aritzia/" render={ () => (<Redirect to="/demos/aritzia/new"/>)} />
                    <PrivateRoute  path="/demos/aritzia/trend" component={Shop}/>
                    <Route path="/demos/aritzia/new" component={New}/>
                    <PrivateRoute path="/demos/aritzia/recom" component={Recommendation}/>
                    <PrivateRoute path="/demos/aritzia/similar" component={Similar} />
                </Switch>
            </main>
        )
    }
}

export default MainRoutes