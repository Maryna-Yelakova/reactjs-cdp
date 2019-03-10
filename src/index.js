import  React from 'react';
import  ReactDOM  from 'react-dom';

const title = React.createElement('h1', {}, 'Hello World!');
ReactDOM.render(
  title,
  document.getElementById('root')
);





class TestComponent extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

const element = <TestComponent name="Component!" />;

ReactDOM.render(
  element,
  document.getElementById('test_component')
);





class TestPureComponent extends React.PureComponent {
  render() {
    return  <h1>Hello, {this.props.someProperty} </h1>
  }
}

const pure = <TestPureComponent someProperty="PureComponent!" />;

ReactDOM.render(
  pure,
  document.getElementById('pure')
);




const FunctionTestComponent = ({name}) => <h1>Hello {name}</h1>

ReactDOM.render(
  <FunctionTestComponent
    name="Test Function Component!"
  />,
  document.getElementById('function')
);
