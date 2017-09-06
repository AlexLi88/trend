import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Header from '../components/Header'
import ShopHeader from '../components/ShopHeader'
import { bindActionCreators } from 'redux'

import { fetchUserInfo, removeUserInfo } from '../actions'

const HeaderContainer = ({userInfo, userActions}) => {
    return(
        <div id="header">
            <Header userInfo={userInfo} userActions={userActions}/>
            <ShopHeader/>
        </div>
    )

}



HeaderContainer.propTypes = {
    userInfo: PropTypes.object.isRequired,
    userActions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.user,
        routing: state.routing
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        userActions: {
            fetchUserInfo: (token) => dispatch(fetchUserInfo(token)),
            removeUserInfo: bindActionCreators(removeUserInfo, dispatch)
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer)

