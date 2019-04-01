import * as React from 'react';
import './movie.component.css';
import { MovieModel } from '../../core/models/app.interface';

export const Movie: React.SFC<MovieModel> = (movie) => {
  return (
          <div className="movie">
             <h2>{movie.title}</h2>
             <span>{movie.vote_average}</span>
          </div>
          );
}
