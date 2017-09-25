/**
 * Created by Alex on 2017-08-31.
 */
import React, { Component } from 'react'
import dataService from '../dataServices'
//import Slider from 'react-slick'
import Card from './Card'
import VerticalMenu from './VerticalMenu'
import './Recommendation.css'

export default class Recommendation extends Component{
    state = {
        recomList: [],
        imgList: []
    }

    componentDidMount(){
        dataService.getRecommendations(0, 10).then(
            res =>{
                console.log(res);
                this.setState({recomList: res.data});
                let promiseList = this.state.recomList.map(recom => {
                    return dataService.getRecommendation(recom.id);
                });

                Promise.all(promiseList).then(
                    res => {
                        for(let list of res){
                            this.setState({imgList: this.state.imgList.concat(list.data.recommendedList)});
                        }
                    }
                )
            },
            err =>{
                console.error(err);
            }
        )
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

    // render(){
    //     var settings = {
    //         dots: true,
    //         infinite: false,
    //         // centerMode: true,
    //         speed: 500,
    //         slidesToShow: 5,
    //         slidesToScroll: 5
    //     };
    //     let imgListDom = [];
    //     if(this.state.imgList.length > 0){
    //         for(var i = 0; i < this.state.imgList.length; i++){
    //             imgListDom.push(
    //                 <div key={i}>
    //                     <img className="recom-img"
    //                          src={this.state.imgList[i].url}
    //                          alt={this.state.imgList[i].id} />
    //                 </div>
    //             )
    //         }
    //     }
    //     return(
    //         <div className="slider-container">
    //             <Slider {...settings}>
    //                 {imgListDom}
    //             </Slider>
    //         </div>
    //     )
    // }
}