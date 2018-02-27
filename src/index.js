import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers';

import Welcome from './components/Welcome';
import ContIn from './components/PresIn';
import ContOut from './components/PresOut';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);
const Root = () => {
  return (
    <Provider store={ createStoreWithMiddleware(reducers) }>
      <Router history={hashHistory}>
        <Route path="/" component={ Welcome} >
          <Route path="contin" component={ ContIn } />
          {/* <Route path="/contout" component={ ContOut }></Route> */}
        </Route>
      </Router>
    </Provider>

  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
