import * as React from 'react';
import { connect } from 'react-redux'

import { AppState } from './core/models/app.interface';
import { HandleErrorComponent } from './handle-error.component';
import { MockMovieList, MockMovie} from './core/models/mockdata';
import { Search } from './features/search/search.component';
import { MovieList } from './features/movie-list/movie-list.component';
import { Movie } from './features/movie/movie.component';
import { getMoviesAction } from './features/movie-list/+state/movie-list.actions';
import { selectMovieAction } from './features/movie/+state/movie.actions';
import { searchMovieAction } from './features/search/+state/search.actions';

// styles
import './app.component.css';

export interface AppPropsModel {
  getMoviesAction: () => {},
  listing: any[],
  selectMovieAction: (id) => {},
  movie: any,
  search:'',
  searchMovieAction: (val) => {}
}

export class AppComponent extends React.Component<AppPropsModel, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      list: [],
      movie: MockMovie,
    };

    this.onChange = this.onChange.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
  }

  componentWillReceiveProps(nextProps, thisState) {
    console.log(nextProps, 'nextProps')
    const { listing: list,
            movie: movie,
            query: query } = nextProps;

    if (list && list.length) {
      this.setState({
        list,
        movie,
        query
      });
    }
  }

  componentDidMount() {
    console.log('LOL', this.props);
    this.props.getMoviesAction();
    }

  onChange(e) {
    const val = e.target.value;
    console.log(val)
    this.props.searchMovieAction(val);
    // this.setState({ query: val });
  }

  selectMovie(movieId) {
    this.props.selectMovieAction(movieId);
  }

  render() {
    return (
      <div className="container">
        <HandleErrorComponent>
          <Search query={this.state.query} onChange={this.onChange} />
          <MovieList list={this.state.list} selectMovie={this.selectMovie} />
          <Movie {...this.state.movie} />
        </HandleErrorComponent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    listing: state.movieList,
    movie: state.movie
  };
};

export default connect(
  mapStateToProps,
  { getMoviesAction, selectMovieAction,   searchMovieAction },
)(AppComponent);
