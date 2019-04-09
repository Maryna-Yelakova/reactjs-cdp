import * as React from 'react';
import { connect } from 'react-redux';

import './movie.component.css';
// models
import { MovieModel } from '../../core/models/app.interface';

// images
import * as posterImage from '../../assets/images/poster1.jpg';

export const Movie: React.SFC<MovieModel> = (movie) => {

  return (
    <div className="movie">
      <img
        src={ posterImage }
        width="200"
        height="302"
        alt="picture"
      />
      <div className="movie_info">
        <div className="movie_main-info" data-cy="info">
          <h2 className="movie_name">{movie.title}</h2>
          <p className="movie_genre">{movie.vote_average}</p>
        </div>
        <p className="movie_description">{movie.overview}</p>
      </div>
    </div>
  );

}
