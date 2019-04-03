import * as  React from 'react';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { MovieList } from './movie-list.component';
import { MockMovieList } from '../../core/models/mockdata';


describe('MovieList', () => {
 it('should render correctly', () => {
   const mockSelectMovie = jest.fn();
   const component = shallow(<MovieList list={MockMovieList} selectMovie={mockSelectMovie} />);

   expect(component).toBeDefined();
   expect(shallowToJson(component)).toMatchSnapshot();
 });

 it('handle click correctly', () => {
   const mockSelectMovie = jest.fn();

  const component = shallow(<MovieList list={MockMovieList} selectMovie={mockSelectMovie} />);
  const item = component.find('.movie_list_item').first();
  item.simulate('click');

  expect(mockSelectMovie).toHaveBeenCalled();
 })
});
