import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

import { MovieList } from './features/movie-list/movie-list.component';
import { Movie } from './features/movie/movie.component';

// components
import AppComponent from './app.component';

// store
import { store } from './core/store/rootReducer';

render(
  <Provider store={ store }>
    // <Router>
      <AppComponent />
      // <Switch>
        // <Route exact path="/" component={MovieList}/>
        // <Route path="/movie/:id" component={Movie}/>
      // </Switch>
    // </Router>
  </Provider>,
  document.getElementById('root')
);
