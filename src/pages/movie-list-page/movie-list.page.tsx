import * as React from 'react';

import { MovieList } from '../../features/movie-list/movie-list.component';
import { MovieModel } from '../../core/models/app.interface';

  export const MovieListPageComponent = ({selectMovie, list}) => {

    return (
       <MovieList selectMovie={selectMovie} list={list} />
     )

}
