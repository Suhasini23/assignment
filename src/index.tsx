import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import * as serviceWorker from "./serviceWorker";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import reducers from './Reducers/index';

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk),
));
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
