import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import ListExampleSimple from './components/sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logger from 'redux-logger';
injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore); // passing the promise module middlewear and creatStore function then store = [returned func(reducers)]

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <div>
      <MuiThemeProvider>
        <ListExampleSimple/>
      </MuiThemeProvider>
      <Switch>
        <Route path="/posts/new" component={PostsNew}/>
        <Route path="/" component={PostsIndex}/>
      </Switch>
    </div>
  </BrowserRouter>
  </Provider>, document.querySelector('.root'));
