/**
 * Created by Alex on 2017-08-23.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import dataService from '../dataServices/'

export default class Header extends Component {
    static propTypes = {
        userInfo: PropTypes.object.isRequired,
        userActions: PropTypes.object.isRequired
    }

    state = {
        userName: '',
        passWord: ''
    }

    componentDidMount(){
        const {fetchUserInfo} = this.props.userActions;
        if(window.localStorage.getItem('__scope_token') && window.localStorage.getItem('__scope_token')){
            fetchUserInfo(window.localStorage.getItem('__scope_token'));
        }
    }

    render(){
        let authPart;
        if(Object.keys(this.props.userInfo).length === 0){
            authPart =
                <div className="login-wrapper item right">
                    <input type="text"
                           placeholder="userName"
                           value={this.state.userName}
                           onChange={this.handleUnChange}
                    />
                    <input type="password"
                           placeholder="passWord"
                           value={this.state.passWord}
                           onChange={this.handlePwChange}
                    />
                    <a className="item right" onClick={this.logIn}>
                        Login
                    </a>
                </div>
        }else{
            authPart = <a className="item right" onClick={this.logOut}>
                Log out
            </a>
        }
        return(
            <div id="header">
                <div className="ui inverted container menu" style={{width: '100%'}}>
                    <div className="header item logo">
                        ScopeVision
                    </div>

                    {authPart}
                </div>
            </div>
        )
    }

    logIn = () => {
        const {fetchUserInfo} = this.props.userActions;
        dataService.login(this.state.userName, this.state.passWord).then(
            (res) => {
                console.log(res);
                window.localStorage.setItem('__scope_token', res.data.id_token);
                fetchUserInfo(res.data.id_token);
            },
            (err) => {
                console.error(err);
            }
        )
    }

    logOut = () =>{
        const {removeUserInfo} = this.props.userActions;
        this.setState({userName: '', passWord: ''});
        removeUserInfo();
        window.localStorage.removeItem('__scope_token');
    }

    handleUnChange = e => {
        this.setState( {userName: e.target.value })
    }

    handlePwChange = e => {
        this.setState( {passWord: e.target.value })
    }
}