import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// react router 
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// containers
import Users from './containers/user/users';
import User from './containers/user/user';

// components
import Actionlog from './components/actionlog/actionlogs';

// redux store
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index';
const store = createStore(allReducers);


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
