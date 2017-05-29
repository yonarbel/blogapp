import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import reducers from './reducers';
import promise from 'redux-promise';
import PostsIndex from './components/posts_index';
<<<<<<< HEAD
import PostsNew from './components/posts_new';
import ListExampleSimple from './components/sidebar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import logger from 'redux-logger';
injectTapEventPlugin();

<<<<<<< HEAD
<<<<<<< HEAD
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore); // passing the promise module middlewear and creatStore function then store = [returned func(reducers)]
=======
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

>>>>>>> parent of 93e4cbe... middleware
=======
const createStoreWithMiddleware = applyMiddleware(ReduxPromise, logger)(createStore); // passing the promise module middlewear and creatStore function then store = [returned func(reducers)]
>>>>>>> 602467c7f322e637c383feb906adce53f182cddb
=======

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

>>>>>>> parent of 7d7245f... make it better app

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    <div>
<<<<<<< HEAD
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
=======
     <Route path="/" component={PostsIndex}/>
    </div>
    </BrowserRouter>
    </Provider>
    , document.querySelector('.container'));
>>>>>>> parent of 7d7245f... make it better app
