import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import SignIn from './components/auth/signin';
import signOut from './components/auth/signout';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Router>
    <Provider store={createStoreWithMiddleware(reducers)}>
      <div>
        <Route path="/" component={App} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signout" component={signOut} />
      </div>
    </Provider>
  </Router>,
  document.querySelector('.container'),
);
