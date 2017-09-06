/**
 * Created by Alex on 2017-09-06.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Recommendation extends Component{
    static = propTypes = {
        recom: PropTypes.object.isRequired
    }

    render(){
        return (
            <div className="product-image">
                <img src={recom.url} />
            </div>
        )
    }


}