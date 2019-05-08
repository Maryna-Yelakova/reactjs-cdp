import * as React from 'react';
import { withRouter } from 'react-router';
import './search.component.css';

export const Search = withRouter(({history, children, onChange, setFieldName, field}) => {
  let  searchInput;
  return (
          <div className="search_block">
            <div className="search_content">
              <h1 className="search_heading">Some Movies-box</h1>
              <div>
                <p className="search_label">Find your movie</p>
                <div className="search_holder">
                  <input type="text" className="search_input" id="query" ref={el => searchInput = el} onChange={onChange} />
                </div>
                <div className="search_control">
                  <div className="search_control_filter">
                    <span>Search by:</span>
                    <button className="search_control_button" onClick={() => setFieldName('title')}>Title</button>
                    <button className="search_control_button" onClick={() => setFieldName('genre')}>Genre</button>
                  </div>
                  <button className="search_control_button" onClick={() => history.push(`/search/${searchInput.value}`)}>SEARCH</button>

                </div>
              </div>
            </div>
          </div>
          );
})
