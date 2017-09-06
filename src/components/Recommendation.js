/**
 * Created by Alex on 2017-08-31.
 */
import React, { Component } from 'react'
import dataService from '../dataServices'
import Slider from 'react-slick'
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
        var settings = {
            dots: true,
            infinite: true,
            // centerMode: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 5
        };
        let imgListDom = [];
        if(this.state.imgList.length > 0){
            for(var i = 0; i < 20; i++){
                imgListDom.push(
                    <div key={i}>
                        <img className="recom-img"
                             src={this.state.imgList[i].url}
                             alt={this.state.imgList[i].id} />
                    </div>
                )
            }
        }
        return(
            <div className="slider-container">
                <Slider {...settings}>
                    {imgListDom}
                </Slider>
            </div>
        )
    }
}