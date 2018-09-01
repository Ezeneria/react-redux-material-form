import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Provider} from 'react-redux';
import store from './store/store';
import registerServiceWorker from './registerServiceWorker';

const app =
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <App/>
        </MuiThemeProvider>
    </Provider>;
ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
