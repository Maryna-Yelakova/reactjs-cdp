import { MovieModel } from '../../../core/models/app.interface';

export const movieInitialState: MovieModel = {
  id: 0,
  title: '',
  tagline: '',
  vote_average: 0,
  vote_count: 0,
  release_date: '',
  poster_path: '',
  overview: '',
  budget: 0,
  revenue: 0,
  runtime: 0,
  genres: ['']
}
