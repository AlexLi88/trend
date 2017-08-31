/**
 * Created by Alex on 2017-08-31.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const RecomContainer = ({ userInfo }) => {

}

RecomContainer.propTypes = {
    userInfo: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    return { userInfo: state }
}

export default connect(mapStateToProps)(RecomContainer)
