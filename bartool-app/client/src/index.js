import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './App';
import Search from './components/Search';
import * as serviceWorker from './serviceWorker';
import SavedPage from './components/SavedPage';

ReactDOM.render(
    <BrowserRouter>
    <Switch>
    <Route path="/" exact component={App} />
    <Route path='/search' component={Search} />
    <Route path='/saved' component={SavedPage} />
    </Switch>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
