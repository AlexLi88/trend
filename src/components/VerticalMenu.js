/**
 * Created by Alex on 2017-09-07.
 */
import React, { Component } from 'react'

export default class VerticalMenu extends Component {
    render() {

        const categoryNavStyle = {
            float: 'left',
            display: 'block',
            width: '12%',
            marginRight: '1.5%',
        }

        const categoryUlStyle = {
            padding: '0 0 5px',
            margin: '0',
            listStyle: 'none',
        }

        const categoryh5Style = {
            margin: '0px 0 15px 0',
            fontWeight: '600',
            fontSize: '14px',
            color: 'rgba(0,0,0,.4)'
        }

        const categoryLiStyle = {
            letterSpacing: '.05em',
            fontWeight: '600',
            textTransform: 'none',
            fontSize: '14px',
            marginBottom: '10px'
        }

        return(
            <div className="category-navigation" style={categoryNavStyle}>
                <div className="category-list-container">
                    <ul style={categoryUlStyle}>
                        <li><h5 style={categoryh5Style}>Category</h5></li>
                        <li style={categoryLiStyle}>Dresses</li>
                        <li style={categoryLiStyle}>Blouses</li>
                        <li style={categoryLiStyle}>Pants</li>
                        <li style={categoryLiStyle}>T-Shirts</li>
                        <li style={categoryLiStyle}>Sweaters</li>
                        <li style={categoryLiStyle}>Jackets</li>
                        <li style={categoryLiStyle}>Coats</li>
                        <li style={categoryLiStyle}>Skirts</li>
                        <li style={categoryLiStyle}>Accessories</li>
                    </ul>
                </div>
            </div>
        )
    }
}
