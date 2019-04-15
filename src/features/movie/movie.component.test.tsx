import * as  React from 'react';
import { shallow, mount, render } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import { Movie } from './movie.component';
import { MockMovie } from '../../core/models/mockdata';


describe('Movie', () => {
 it('should render correctly', () => {
   const component = shallow(<Movie {...MockMovie} />);

   expect(component).toBeDefined();
   expect(shallowToJson(component)).toMatchSnapshot();
 });

});
