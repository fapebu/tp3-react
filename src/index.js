import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Counter from './component/counter';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Counter/>

    </Provider>    
  </React.StrictMode>,
  document.getElementById('root')
);



