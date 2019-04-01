import * as React from 'react';

import { AppState } from './core/models/app.interface';
import { HandleErrorComponent } from './handle-error.component';
import { MockMovieList, MockMovie} from './core/models/mockdata';
import { Search } from './features/search/search.component';
import { List } from './features/movie-list/movie-list.component';
import { Movie } from './features/movie/movie.component';
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
          <HandleErrorComponent>
            <Search  query={this.state.query}  onChange={this.onChange}  />
            <List list={this.state.list} selectMovie={this.selectMovie} />
            <Movie {...this.state.movie} />
          </HandleErrorComponent>
        </div>
        );
      }
}
