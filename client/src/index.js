import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Feature from './components/feature';
import requireAuth from './components/auth/require_auth';
import SignIn from './components/auth/signin';
import SignOut from './components/auth/signout';
import SignUp from './components/auth/signup';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Router>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <Route path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signout" component={SignOut} />
        <Route path="/feature" component={requireAuth(Feature)} />
      </div>
    </Provider>
  </Router>,
  document.querySelector('.container')
);
