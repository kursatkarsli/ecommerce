import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router} from 'react-router-dom';



import {Provider} from 'react-redux'
import { store, persistor } from './Redux/store'
import {PersistGate} from 'redux-persist/es/integration/react'

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
            <App />
    
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);

