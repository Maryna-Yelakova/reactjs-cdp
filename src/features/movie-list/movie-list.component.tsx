import * as React from 'react';
// import './movie-list.component.css';

export const MovieList = ({list, selectMovie}) => {
  return (
    <ul className="movie_list">
      {list.map((movie) => <li className="movie_list_item" key={movie.id} onClick={() =>  selectMovie(movie)}>
        <div className="movie_list_item-content">
          <img src={require('../../assets/images/poster1.jpg')} width="200" height="302" alt="picture"/>
          <div className="movie_list_info">
            <p className="movie_list_name">{movie.title}</p>
            <i className="movie_list_genre">{movie.vote_average}</i>
          </div>
        </div>
      </li> )}
    </ul>
         );
}
