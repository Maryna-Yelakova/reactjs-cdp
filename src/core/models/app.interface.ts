export interface AppState {
      query:string;
      list:Array<MovieModel>;
      movie: MovieModel;
}

export interface MovieModel {
      id: number;
      title: string;
      tagline: string;
      vote_average: number;
      vote_count: number;
      release_date: string;
      poster_path: string;
      overview: string;
      budget: number;
      revenue: number;
      runtime: number;
      genres:Array<string>;
}
