import * as React from 'react';
import { render } from 'react-dom';

import { TestPureComponent, FunctionTestComponent} from './app.component';
import { Search } from './search/search.component'

render(
  <div>
  <Search />
  <TestPureComponent />
  <FunctionTestComponent
      name="Test Function Component!"
    />
  </div>,
  document.getElementById('root')
);
