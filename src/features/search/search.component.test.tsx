import * as  React from 'react';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Search } from './search.component';


describe('Search', () => {
 it('should render correctly', () => {
   const changeQuery = jest.fn();
   const component = shallow(<Search query="MockQuery" onChange={changeQuery} />);

   expect(component).toBeDefined();
   expect(shallowToJson(component)).toMatchSnapshot();
 });

 it('handle search', () => {
   const changeQuery = jest.fn();
   const component = mount(<Search query="MockQuery" onChange={changeQuery} />);

  const input = component.find('input');
  input.simulate('change');

  expect(changeQuery).toHaveBeenCalled(); // TODO test onChange
 })
});
