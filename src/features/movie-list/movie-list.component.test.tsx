import * as  React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { MovieList } from './movie-list.component';
import { MockMovieList } from '../../core/models/mockdata';

jest.mock('react-dom');

describe('MovieList', () => {
 it('should render correctly', () => {
   const mockSelectMovie = jest.fn();
   const component = shallow(<MovieList  list = {MockMovieList} selectMovie = {mockSelectMovie} />);
   expect(mockSelectMovie.mock.calls.length).toEqual(1);
   expect(shallowToJson(component)).toMatchSnapshot();

 });
});
