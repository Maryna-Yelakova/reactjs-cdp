import * as React from 'react';
import { AppState } from './core/models/app.interface';
import { HandleErrorComponent } from './handle-error.component';
import { Routes } from './router/routes';
import { Movie } from './features/movie/movie.component';

// styles
import './app.component.css';

export class AppComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <HandleErrorComponent>
          <Routes/>
        </HandleErrorComponent>
      </div>
    );
  }
}
