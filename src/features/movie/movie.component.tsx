import * as React from 'react';
import './movie.component.css';
import { MovieModel } from '../../core/models/app.interface';

export const Movie: React.SFC<MovieModel> = (movie) => {
  return (
          <div className="movie">
            <img src={require('../../assets/images/poster1.jpg')} width="200" height="302" alt="picture"/>
            <div className="movie_info">
              <div className="movie_main-info">
                <h2 className="movie_name">{movie.title}</h2>
                <p className="movie_genre">{movie.vote_average}</p>

              </div>
              <p className="movie_description">{movie.overview}</p>
            </div>
          </div>
          );
}
