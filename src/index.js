import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import {createStore} from 'redux';
import allreducers from './reducers'
import {Provider} from 'react-redux'
const mystore=createStore(allreducers);
ReactDOM.render(<Provider store={mystore}><Root /></Provider>, document.getElementById('root'));
//this is all app data store
=======
import {createStore} from 'redux'
import allReducers from './reducers/Allreducer'
import {Provider} from 'react-redux'

const mystore=createStore(allReducers);

ReactDOM.render(<Provider store={mystore}><Root /></Provider>, document.getElementById('root'));


//this is all app data store



>>>>>>> ca0119ed0b045c51699fd6d2609ceabffd11f67d
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
