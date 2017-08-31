import { combineReducers } from 'redux'
import {
    REQUEST_USERINFO,
    RECEIVE_USERINFO,
    REMOVE_USERINFO
} from '../actions'

function user(
    state = {},
    action
){
    switch(action.type){
        case REQUEST_USERINFO:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false
            })
        case RECEIVE_USERINFO:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                userInfo: action.userInfo,
                lastUpdate: action.receivedAt
            })
        case REMOVE_USERINFO:
            window.localStorage.removeItem('__scope_token');
            return {}
        default:
            return state
    }
}


const rootReducer = combineReducers({
    user
})

export default rootReducer