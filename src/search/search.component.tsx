import * as React from 'react';
import './search.component.css';

interface QueryState {
  query:string;
}

export class Search extends React.Component<{},QueryState> {
  constructor(props) {
    super(props);
    this.state = {query: ""};
    this.onChange = this.onChange.bind(this);
 }

   onChange(e) {
     const val = e.target.value;
     this.setState({query: val});
  }

  render() {
        return (
        <div className="search_block">
             <input type="text" className="search_input" value={this.state.query} onChange={this.onChange}/>
        </div>
        );
      }

}
