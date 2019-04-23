import * as React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { AppState } from './core/models/app.interface';
import { HandleErrorComponent } from './handle-error.component';
import { MockMovieList, MockMovie} from './core/models/mockdata';
import { Search } from './features/search/search.component';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list.page';
import { Movie } from './features/movie/movie.component';
import { getMoviesAction } from './features/movie-list/+state/movie-list.actions';
import { selectMovieAction } from './features/movie/+state/movie.actions';
import { MovieList } from './features/movie-list/movie-list.component';
import * as movieListActions from './features/movie-list/+state/movie-list.actions';
import { searchMovieAction, setFieldNameAction } from './features/search/+state/search.actions';
import { store } from './core/store/rootReducer';

// styles
import './app.component.css';
// import { AppContext } from './context';

export interface AppPropsModel {
  getMoviesAction: () => {},
  listing: any[],
  selectMovieAction: (id) => {},
  movie: any,

    query:string,
    field:string,

  searchMovieAction: (val) => {},
  setFieldNameAction: (field) => {},
}

export class AppComponent extends React.Component<AppPropsModel, AppState> {
  // static context = AppContext;

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      field:'',
      list: [],
      movie: MockMovie
    };

    this.onChange = this.onChange.bind(this);
    this.selectMovie = this.selectMovie.bind(this);
    this.setFieldName =this.setFieldName.bind(this);
  }

  componentWillReceiveProps(nextProps, thisState) {
    console.log(nextProps, 'nextProps')
    const { listing: list,
            movie: movie,
            query: query,
            fiels: field } = nextProps;

    if (list && list.length) {
      this.setState({
        list,
        movie,
        query,
        field
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
    const foundedMovies = this.search(this.state.list,val,'title');
    store.dispatch(movieListActions.fetchedMoviesAction(foundedMovies))
    // this.setState({ query: val });
  }



  search(arr, query, field) {
            if (!query) {
              return arr;
            }

            let results = [];
            if(typeof query === 'string'){
              query = query.toLowerCase();
            }else{
              console.log(query);
            }
            arr.forEach((item)=> {
              if(item){
                if (item[field].toLowerCase().indexOf(query) !== -1 ) {
                    results.push(item);
                }
              }
            });
            return results;
          };


  selectMovie(movieId) {
    this.props.selectMovieAction(movieId);
  }

  setFieldName(field){
    this.props.setFieldNameAction(field);
  }

  render() {
    // let context = this.context;
    return (

      <div className="container">
        <HandleErrorComponent>
        <Router>
          <Switch>
            <Route exact path="/" component={MovieListPageComponent}/>
            <Route path="/movie/:id" component={Movie}/>
          </Switch>
        </Router>
          <Search query={this.state.query}   field={this.state.field} onChange={this.onChange} setFieldName={this.setFieldName} />
          <MovieListPageComponent  selectMovie={this.selectMovie} list={this.state.list}/>
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
  { getMoviesAction, selectMovieAction,   searchMovieAction, setFieldNameAction },
)(AppComponent);
//
// <AppContext.Provider value={this.state.list}></AppContext.Provider
