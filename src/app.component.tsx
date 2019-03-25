import * as React from 'react';

import { AppState } from './models/app.interface';
import { MockMovieList, MockMovie} from './models/mockdata';
import { Search } from './search/search.component';
import { List } from './list/list.component';
import { Movie } from './movie/movie.component';
import './app.component.css';

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

   onChange(e) {
     const val = e.target.value;
     this.setState({query: val});
  }

  selectMovie(movie){
    this.setState({movie: movie});
  }

  render() {
        return (
        <div className="container">
            <Search  query={this.state.query}  onChange={this.onChange}  />
            <List list={this.state.list} selectMovie={this.selectMovie} />
            <Movie movie={this.state.movie} />
        </div>
        );
      }
}
