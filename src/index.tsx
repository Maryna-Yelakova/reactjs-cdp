import * as React from 'react';
import { render } from 'react-dom';

import { Hello, TestPureComponent, FunctionTestComponent} from './app.component';

render(
  <div>
  <Hello />
  <TestPureComponent />
  <FunctionTestComponent
      name="Test Function Component!"
    />
  </div>,
  document.getElementById('root')
);
