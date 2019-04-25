import * as React from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../core/models/app.interface';
import { MovieList } from '../../features/movie-list/movie-list.component';
import { MovieModel } from '../../core/models/app.interface';

import { MockMovieList, MockMovie} from '../../core/models/mockdata';
import { Search } from '../../features/search/search.component';
import { Movie } from '../../features/movie/movie.component';
import { getMoviesAction } from '../../features/movie-list/+state/movie-list.actions';
import { selectMovieAction } from '../../features/movie/+state/movie.actions';
import * as movieListActions from '../../features/movie-list/+state/movie-list.actions';
import { searchMovieAction, setFieldNameAction } from '../../features/search/+state/search.actions';
import { store } from '../../core/store/rootReducer';


export interface ListPropsModel {
  getMoviesAction: () => {},
  listing: any[],
  selectMovieAction: (id) => {},
  movie: any,

    query:string,
    field:string,

  searchMovieAction: (val) => {},
  setFieldNameAction: (field) => {},
}


export class MovieListPageComponent extends React.Component<ListPropsModel, AppState> {
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

  render(){
    return (
      <div>
        <Search query={this.state.query}   field={this.state.field} onChange={this.onChange} setFieldName={this.setFieldName} />
        <MovieList  selectMovie={this.selectMovie} list={this.state.list} />
      </div>
     )
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
  )(MovieListPageComponent);
