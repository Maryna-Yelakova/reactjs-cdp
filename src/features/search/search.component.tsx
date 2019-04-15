import * as React from 'react';
import './search.component.css';

export const Search = ({query, onChange}) => {
  return (
          <div className="search_block">
            <div className="search_content">
              <h1 className="search_heading">Some Movies-box</h1>
              <div>
                <p className="search_label">Find your movie</p>
                <div className="search_holder">
                  <input type="text" className="search_input" id="query" value={query} onChange={onChange}/>
                </div>
                <div className="search_control">
                  <div className="search_control_filter">
                    <span>Search by:</span>
                    <button className="search_control_button">Title</button>
                    <button className="search_control_button">Genre</button>
                  </div>
                  <button className="search_control_button">SEARCH</button>
                </div>
              </div>
            </div>
          </div>
          );
}
