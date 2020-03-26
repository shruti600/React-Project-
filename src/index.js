import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {InfoProvider} from './context';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <InfoProvider>
        <Router>
            <App />
        </Router>
    </InfoProvider>, 
    document.getElementById('root'));

