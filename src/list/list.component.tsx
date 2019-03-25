import * as React from 'react';
import './list.component.css';

export const List = ({list, selectMovie}) => {
  return (
          <ul className="movie_list">{list.map((movie) => <li onClick={() =>  selectMovie(movie)}>{movie.title}</li> )}</ul>
         );
}
