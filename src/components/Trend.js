/**
 * Created by Alex on 2017-08-24.
 */
import React, { Component } from 'react'
import Masonry from 'react-masonry-component'
import dataService from '../dataServices'
import './Trend.css';

export default class Trend extends Component{

    state ={
        trendList: {
            'outerwear': {},
            'dresses': {},
            'footwear': {},
            'bags': {},
            'pants': {},
            'skirts': {},
            'tops': {}
        },
        category: ['outerwear', 'dresses','footwear','bags','pants','skirts','tops'],
        trendListDom: [],
        selectedTrend:[],
    }

    componentDidMount(){
        dataService.queryTrend('2017-08-24', 'product').then(
            res=>{
                let tempTrendList = {
                    'outerwear': {},
                    'dresses': {},
                    'footwear': {},
                    'bags': {},
                    'pants': {},
                    'skirts': {},
                    'tops': {}
                };
                console.log(res);
                res.data.trends.forEach((item) => {
                    item.clusterId in tempTrendList[item.category] ?
                        tempTrendList[item.category][item.clusterId].push(item) :
                        tempTrendList[item.category][item.clusterId] = [item]
                });
                this.generateTrendDom(tempTrendList);
                this.setState({trendList: tempTrendList});
            },
            err=>{
                console.error(err);
            }
        )
    }
    generateTrendDom(tempTrendList){
        let trendListDom = [];
        let masonryOptions = {
            transitionDuration: 500
        }
        for(let category in tempTrendList){
            if(this.state.trendList.hasOwnProperty(category)){
                let clusterTrendDom = []
                for(let clusterId in tempTrendList[category]){
                    let clusterTrend = tempTrendList[category][clusterId].map((item, key)=>{
                        return(
                            <div className="image-element"
                                key={key}>
                                <div className="image-wrapper">
                                    <img src={item.url}
                                         alt={item.id}
                                         title="Click image to create recommendation"
                                         onClick={this.handleClick}
                                    />
                                    <i className="checkmark icon check-icon"></i>
                                </div>
                            </div>
                        )
                    });

                    clusterTrendDom.push(
                        <div className="cluster-trend-wrapper" key={clusterId}>
                            <h3>{clusterId}</h3>
                            <Masonry
                                className={'masonry'}
                                elementType={'div'}
                                options={masonryOptions}
                                disableImagesLoaded={false}
                                updateOnEachImageLoad={true}
                            >
                            {clusterTrend}
                            </Masonry>
                        </div>
                    );
                }
                let categoryDom =
                    <div className="category-trend-wrapper" key={category}>
                        <h3>{category}</h3>
                        {clusterTrendDom}
                    </div>
                trendListDom.push(categoryDom);
            }
        }
        this.setState({trendListDom: trendListDom});
    }
    handleClick = (event) => {
        const target = event.target;
        const parent = target.parentNode;
        const alt = target.getAttribute('alt');
        let value;
        parent.classList.contains('show-check') ? value = false :  value = true;
        const id = parseInt(alt, 10);

        if(value) {
            this.setState({
                selectedTrend: this.state.selectedTrend.concat([id])
            });
            parent.classList.add('show-check');
        }
        else{
            this.setState({
                selectedTrend: this.state.selectedTrend.filter((_, i) => _ !== id)
            });
            parent.classList.remove('show-check');
        }
    }
    handleSubmit = (event) => {
        dataService.createRecommendations('test', this.state.selectedTrend).then(
            res => {
                console.log(res);
            },
            err => {
                console.error(err);
            }
        )
    }
    render(){
        return(
            <div className="trend-container">
                Trending Now
                {this.state.trendListDom}
                <div className="button-wrapper">
                    <button onClick={this.handleSubmit} type="button">Create recommendations</button>
                </div>
            </div>
        )
    }
}