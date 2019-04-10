import * as React from 'react';
import { connect } from 'react-redux'

import { AppState } from './core/models/app.interface';
import { HandleErrorComponent } from './handle-error.component';
import { MockMovieList, MockMovie} from './core/models/mockdata';
import { Search } from './features/search/search.component';
import { MovieList } from './features/movie-list/movie-list.component';
import { Movie } from './features/movie/movie.component';
import { getMoviesAction } from './features/movie-list/+state/movie-list.actions';

// styles
import './app.component.css';

export interface AppPropsModel {
  getMoviesAction: () => {},
  listing: any[],
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
    const { listing: list } = nextProps;

    if (list && list.length) {
      this.setState({
        list,
      });
    }
  }

  componentDidMount() {
    console.log('LOL', this.props);
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
  };
};

export default connect(
  mapStateToProps,
  { getMoviesAction },
)(AppComponent);
