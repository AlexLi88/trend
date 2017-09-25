/**
 * Created by Alex on 2017-09-07.
 */
import React, { Component } from 'react'
import Card from './Card'
import VerticalMenu from './VerticalMenu'
import dataService from '../dataServices'


export default class Similar extends Component {
    state = {
        imgList: []
    }

    componentDidMount(){
        this.searchSimilarImage()
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.location.search !== this.props.location.search){
            this.searchSimilarImage(nextProps.location.search);
        }
    }

    searchSimilarImage = (search) => {
        this.setState({imgList: []});
        let searchUrl = search || this.props.location.search
        const url = searchUrl.split('?url=')[1]
        let tempImgList = [{url}]
        dataService.searchSimilar(url).then(
            res => {
                tempImgList = tempImgList.concat(res.data.medias);
                this.setState({imgList: tempImgList})
            },
            err => {
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
        let loader = '';
        if(this.state.imgList.length === 0){
             loader =
                <div className="ui segment" style={{boxShadow: 'none', border: 'none', margin:'10px'}}>
                    <div className="ui active inverted dimmer">
                        <div className="ui text loader">Loading</div>
                    </div>
                    <p></p>
                 </div>
        }
        return (
            <div className="similar" style={{padding: '30px'}}>
                <VerticalMenu/>
                <div className="primary-content" style={{width: '85%', float: 'left'}}>
                    {loader}
                    <ul className="search-result-items" style={ulStyle}>
                        {imgList}
                    </ul>
                </div>
            </div>
        )
    }
}