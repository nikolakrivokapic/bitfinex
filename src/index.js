import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './containers/app';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Provider store={configureStore()}>
    <App />
    </Provider>,
document.getElementById('root')
);

serviceWorker.unregister();
