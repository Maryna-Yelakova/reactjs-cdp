import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppState } from './core/models/app.interface';
import { HandleErrorComponent } from './handle-error.component';
import  MovieListPageComponent  from './pages/movie-list-page/movie-list.page';
import  MoviePageComponent  from './pages/movie-page/movie.page';
import  SearchPageComponent  from './pages/search-page/search.page';
import { NotFoundPageComponent } from './pages/not-found/not-found.page';
import { Movie } from './features/movie/movie.component';

// styles
import './app.component.css';

export class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <HandleErrorComponent>
          <Router>
            <Switch>
              <Route exact path="/" component={MovieListPageComponent}/>
              <Route path="/movie/:id" component={MoviePageComponent}/>
              <Route path="/search/" component={SearchPageComponent}/>
              <Route path="*" component={NotFoundPageComponent}/>
            </Switch>
          </Router>
        </HandleErrorComponent>
      </div>
    );
  }
}
