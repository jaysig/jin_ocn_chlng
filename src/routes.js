import React from 'react';
import { Router, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from './components/Welcome';
import ContIn from './components/PresIn';
import ContOut from './components/PresOut';

export default (
  <Route path="/" component={ App} >
    <IndexRoute component={ Welcome } />
    <Route path="/contin" component={ ContIn }></Route>
    <Route path="/contout" component={ ContOut }></Route>
  </Route>
)
