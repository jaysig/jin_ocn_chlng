import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers';

import Welcome from './components/Welcome';
import ContIn from './components/ContIn';
import ContOut from './components/ContOut';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const Root = () => {
  return (
    <Provider store={ createStoreWithMiddleware(reducers) }>
      <Router history={hashHistory}>
        <Route path="/" component={ Welcome} >
          <IndexRedirect to="/contin" />
          <Route path="contin" component={ ContIn } />
          <Route path="/contout" component={ ContOut }></Route>
        </Route>
      </Router>
    </Provider>

  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
