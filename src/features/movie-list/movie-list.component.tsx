import * as React from 'react';
import './movie-list.component.css';
import { AppContext } from '../../context';

export const MovieList = ({selectMovie, list}) => {
  return (
    // <AppContext.Consumer>
    // {context =>
      <ul className="movie_list">
        {list.map((movie) => <li className="movie_list_item" key={movie.id} onClick={() => selectMovie(movie.id)}>
          <div className="movie_list_item-content">
            <img src={ movie.poster_path } width="200" height="302" alt="picture"/>
            <div className="movie_list_info">
              <p className="movie_list_name">{movie.title}</p>
              <i className="movie_list_genre">{movie.vote_count}</i>
            </div>
          </div>
        </li> )}
      </ul>
    // }
    // </AppContext.Consumer>
  );
}
// https://medium.com/@RubenOostinga/avoiding-deeply-nested-component-trees-973edb632991
