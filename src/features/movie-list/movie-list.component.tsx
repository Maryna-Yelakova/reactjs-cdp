import * as React from 'react';
import './movie-list.component.css';

export const List = ({list, selectMovie}) => {
  return (
          <ul className="movie_list">{list.map((movie) => <li key={movie.id} onClick={() =>  selectMovie(movie)}>{movie.title}</li> )}</ul>
         );
}
