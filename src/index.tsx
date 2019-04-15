import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// components
import AppComponent from './app.component';

// store
import { store } from './core/store/rootReducer';

render(
  <Provider store={ store }>
    <AppComponent />
  </Provider>,
  document.getElementById('root')
);
