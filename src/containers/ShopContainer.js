/**
 * Created by Alex on 2017-08-24.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Shop from '../components/Shop'

const ShopContainer = ({userInfo}) => {
    return(
        <div className="shop-container">
            <Shop />
        </div>
    )
}

ShopContainer.propTypes = {
    userInfo: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { userInfo: state.user }
}

export default connect(mapStateToProps)(ShopContainer)
