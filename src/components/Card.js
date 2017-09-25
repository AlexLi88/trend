/**
 * Created by Alex on 2017-09-06.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class Card extends Component{
    static propTypes = {
        img: PropTypes.object.isRequired
    }

    render(){
        const cardStyle = {
            color: '#000',
            position: 'relative',
            margin: '0 0 20px 0'
        }

        const imgWrapperStyle = {
            position: 'relative',
            minHeight: '217px'
        }

        const imgStyle = {
            position: 'relative',
            display: 'inline',
            maxWidth: '100%',
            maxHeight: '427px',
            verticalAlign: 'bottom',
            marginBottom: '5px'
        }

        const h6Style = {
            margin: '0',
            padding: '.25em 5px 0em 7px',
            textAlign: 'left',
            textTransform: 'none',
            color: '#222',
            fontSize: '13px',
            lineHeight: '1em',
            fontWeight: '600',
            letterSpacing: '.03em'
        }

        const buttonStyle = {
            cursor: 'pointer',
            position: 'absolute',
            bottom: '5px',
            height: '45px',
            lineHeight: '45px',
            right: '10px',
            zIndex: '4',
            display: 'block',
            background: 'rgba(0,0,0,.1)',
            padding: '0 10px',
            textTransform: 'none',
            color: '#fff',
            WebkitFontSmoothing: 'antialiased',
            fontSize: '11px!important',
        }
        return (
            <div className="product-card-wrapper" style={cardStyle}>
                <div className="product-image" style={imgWrapperStyle}>
                    <img src={this.props.img.url || this.props.img.mediaUrl} style={imgStyle}/>
                    <div className="search-button" style={buttonStyle}>
                        <Link to={{
                            pathname: '/demos/aritzia/similar',
                            search: `?url=${this.props.img.url || this.props.img.mediaUrl}`
                        }} style={{color: '#fff'}}>Similar Image</Link>
                    </div>
                </div>
                <div className="product-brand">
                    <h6 style={h6Style}>{this.props.img.brand}</h6>
                </div>
                <div className="product-name">
                    <h6 style={h6Style}>{this.props.img.name}</h6>
                </div>
                <div className="product-price">
                    <h6 style={h6Style}>{this.props.img.price}</h6>
                </div>
            </div>
        )
    }

}