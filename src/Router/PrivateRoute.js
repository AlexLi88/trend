/**
 * Created by Alex on 2017-09-05.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'


const PrivateRoute = ({ component: Component, ...rest }) => {
    let routePart;
    if(Object.keys(rest.userInfo).length === 0){
        routePart = <h3 style={{textAlign:'center', marginTop: '5px'}}>Please Login first</h3>
    }else{
        routePart = <Component {...rest}></Component>
    }
    return(<Route  render={() => (routePart)}/>)
}

PrivateRoute.propTypes = {
    userInfo: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.user,
        routing: state.routing
    }
}

export default connect(mapStateToProps)(PrivateRoute)