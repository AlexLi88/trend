import dataService from '../dataServices'
export const REQUEST_USERINFO = 'REQUEST_USERINFO'
export function requestUserinfo(){
    return {
        type: REQUEST_USERINFO,
    }
}

export const RECEIVE_USERINFO = 'RECEIVE_USERINFO'
function receiveUserInfo(json){
    return{
        type: RECEIVE_USERINFO,
        userInfo: json,
        receivedAt: Date.now()
    }
}

export const REMOVE_USERINFO = 'REMOVE_USERINFO'
export function removeUserInfo(){
    return{
        type: REMOVE_USERINFO
    }
}

export function fetchUserInfo(token){
    return function (dispatch){
        dispatch(requestUserinfo())
        dataService.getAccount(token).then(
            res => (res.data),
            err => {
                console.error('An error occured.', err);
                dispatch(removeUserInfo());
            }
        ).then(json =>{
            if(json) dispatch(receiveUserInfo(json))
            else dispatch(removeUserInfo())
        }).catch(err => dispatch(removeUserInfo()))
    }
}

