import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { connect } from 'react-redux'

import { RootReducer } from './features/reducers/index';
import { AppState } from './core/models/app.interface';
import { HandleErrorComponent } from './handle-error.component';
import { MockMovieList, MockMovie} from './core/models/mockdata';
import { Search } from './features/search/search.component';
import { MovieList } from './features/movie-list/movie-list.component';
import { Movie } from './features/movie/movie.component';
import { getMoviesAction } from './features/movie-list/+state/movie-list.actions'
import './app.component.css';

const store = createStore(RootReducer, applyMiddleware(thunk));

const mapStateToProps = state => state;
const mapDispatchToProps = {
  ...getMoviesAction // will be wrapped into a dispatch call
};


export class AppComponent extends React.Component<{},AppState> {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      list: MockMovieList,
      movie: MockMovie
    };

    this.onChange = this.onChange.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
 }

 componentDidMount() {
  this.props.getMoviesAction();
}

  onChange(e) {
    const val = e.target.value;
    this.setState({ query: val });
  }

  selectMovie(movie) {
    this.setState({ movie: movie });
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <HandleErrorComponent>
            <Search query={this.state.query} onChange={this.onChange} />
            <MovieList list={this.state.list} selectMovie={this.selectMovie} />
            <Movie {...this.state.movie} />
          </HandleErrorComponent>
        </div>
      </Provider>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent)
