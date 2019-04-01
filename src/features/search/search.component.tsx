import * as React from 'react';
import './search.component.css';

export const Search = ({query, onChange}) => {
  return (
          <div className="search_block">
               <input type="text" className="search_input" value={query} onChange={onChange}/>
          </div>
          );
}
