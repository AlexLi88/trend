/**
 * Created by Alex on 2017-09-06.
 */
import React, { Component } from 'react'
import Card from './Card'
import VerticalMenu from './VerticalMenu'
export default class New extends Component {
    state = {
        imgList: [
            {
                url: 'http://s7d9.scene7.com/is/image/Aritzia/medium/f17_04_a06_60354_13623_on_a.jpg',
                brand: 'Wilfred',
                name: 'Allant Pant',
                price:'$145'
            },
            {
                url: 'http://s7d9.scene7.com/is/image/Aritzia/medium/f17_00_a03_65022_1274_on_a.jpg',
                brand: 'The Group by Bobaton',
                name: 'Muholi Hoodie',
                price:'$110'
            },
            {
                url: 'http://s7d9.scene7.com/is/image/Aritzia/medium/f17_07_a06_63872_6162_on_a.jpg',
                brand: 'Wilfred Free',
                name: 'Dunstall Pant',
                price:'$65'
            },
            {
                url: 'http://s7d9.scene7.com/is/image/Aritzia/medium/f17_04_n03_65694_6849_on_a.jpg',
                brand: 'Wilfred',
                name: 'Dinan Blanket',
                price:'$55'
            },
            {
                url: 'http://s7d9.scene7.com/is/image/Aritzia/medium/f17_07_a03_65478_1274_on_a.jpg',
                brand: 'Wilfred Free',
                name: 'Robson Sweater',
                price:'$65'
            },
            {
                url: 'http://s7d9.scene7.com/is/image/Aritzia/medium/f17_00_a04_62565_1274_on_a.jpg',
                brand: 'The Group by Babaton',
                name: 'Liebling Bomber',
                price:'$175'
            },
            {
                url: 'http://s7d9.scene7.com/is/image/Aritzia/medium/f17_04_a06_56744_12633_on_a.jpg',
                brand: 'Wilfred',
                name: 'Darontal Pant',
                price:'$125'
            },
            {
                url: 'http://s7d9.scene7.com/is/image/Aritzia/medium/f17_07_a03_65480_13914_on_a.jpg',
                brand: 'Wilfred Free',
                name: 'Issa Sweater',
                price:'$85'
            },
            {
                url: 'http://s7d9.scene7.com/is/image/Aritzia/medium/f17_04_a03_64711_12612_on_a.jpg',
                brand: 'Wilfred',
                name: 'Bernette Sweater',
                price:'$125'
            }
        ]
    }
    render(){
        const ulStyle = {
            margin: '0',
            padding: '0',
            display: 'inline-block',
            width: '100%',
            listStyle: 'none',
            listStyleImage: 'none'
        }

        const liStyle = {
            display: 'block',
            float: 'left',
            listStyle: 'none outside none',
            width: '31.0158102766798%',
            marginRight: '1.97628458498024%'
        }


        let imgList = this.state.imgList.map((img, key)=>{
            return(
                <li key={key} style={liStyle}>
                    <Card img={img} />
                </li>
            )
        });

        return(
            <div className="new" style={{padding: '30px'}}>
                <VerticalMenu/>
                <div className="primary-content" style={{width: '85%', float: 'left'}}>
                    <ul className="search-result-items" style={ulStyle}>
                        {imgList}
                    </ul>
                </div>
            </div>
        )
    }
}