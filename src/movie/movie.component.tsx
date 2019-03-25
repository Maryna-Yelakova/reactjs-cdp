import * as React from 'react';
import './movie.component.css';

export const Movie = ({movie}) => {
  return (
          <div className="movie">
             <h2>{movie.title}</h2>
             <span>{movie.vote_average}</span>
          </div>
          );
}
