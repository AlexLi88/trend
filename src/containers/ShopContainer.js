/**
 * Created by Alex on 2017-08-24.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Shop from '../components/Shop'

const ShopContainer = ({userInfo}) => {
    let mainPart
    if(Object.keys(userInfo.user).length === 0){
        mainPart = <h1>Please login first</h1>
    }else{
        mainPart = <Shop />
    }
    return(
        <div className="shop-container">
            {mainPart}
        </div>
    )
}

ShopContainer.propTypes = {
    userInfo: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { userInfo: state }
}

export default connect(mapStateToProps)(ShopContainer)
