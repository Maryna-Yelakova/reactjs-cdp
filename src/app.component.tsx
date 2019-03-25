import * as React from 'react';

import { AppState } from './models/app.interface';
import { MockMovieList, MockMovie} from './models/mockdata';
import { Search } from './search/search.component'
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
 }

   onChange(e) {
     const val = e.target.value;
     this.setState({query: val});
  }

  render() {
        return (
        <div className="container">
             <Search  query={this.state.query}  onChange={this.onChange}  />
        </div>
        );
      }

}
