import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions'
import nock from 'nock'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() =>{
        nock.cleanAll()
    })

    it('creates RECEIVE_USERINFO when fetching userinfo has been done', () => {

    })
})