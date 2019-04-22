import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Home from './pages/Home'
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.min.css' // optional
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.js'


//import bootstrap from 'bootstrap';
import './main.css'

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>, 
    document.getElementById('root')
);