import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';

import * as serviceWorker from './serviceWorker';
import { Provider} from 'react-redux';
import PostReducers from './reducers/PostReducer';



//Creating Store .....
const store =createStore(PostReducers);



ReactDOM.render(
 <Provider store ={store}>
     <App/>
      </Provider>,
 document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//
