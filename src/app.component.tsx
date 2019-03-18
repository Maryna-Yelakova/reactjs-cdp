import * as React from 'react';

export class Hello extends React.Component {
  name:string ='Component!'

    render() {
      return  <h1>Hello, {this.name} </h1>;
    }
}

export class TestPureComponent extends React.PureComponent {
  someProperty:string ="PureComponent!"
  render() {
    return  <h1>Hello, {this.someProperty} </h1>;
  }
}


export const FunctionTestComponent: React.FunctionComponent<{
name:string
}> = (props) => {
  return  <h1>Hello {props.name}</h1>;
};
