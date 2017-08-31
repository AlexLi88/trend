/**
 * Created by Alex on 2017-08-23.
 */
import React from 'react'
import { Provider } from 'react-redux'
import App from './App'

import { BrowserRouter as Router} from 'react-router-dom'
import configureStore from '../store/configureStore'

const store = configureStore()
const Root = () => (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
)

export default Root
