import React from 'react';
import { shallow } from 'enzyme';
import rooms from './__mocks__/rooms.js';
import Amenities from '../client/src/components/Amenities';


describe('<Amenities />', () => {
  const wrapper = shallow(<Amenities currentRoom={rooms[0]} />);

  test('renders 2 main amenities', () => {
    expect(wrapper.find('.icon-main')).toHaveLength(2);
  });

  test('renders 5 categories', () => {
    expect(wrapper.find('.category')).toHaveLength(5);
  });

  test('renders 18 sub-categories', () => {
    expect(wrapper.find('.sub-category')).toHaveLength(18);
  });
});

