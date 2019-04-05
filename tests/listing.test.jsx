import React from 'react';
import { shallow } from 'enzyme';
import Listing from '../client/src/components/Listing';
import rooms from './__mocks__/rooms.js';
import MainDescription from '../client/src/components/MainDescription';
import Amenities from '../client/src/components/Amenities';


describe('<Listing /> when loading', () => {
  const wrapper = shallow(<Listing roomNum='1' />);

  test('renders loading', () => {
    expect(wrapper.find('.loading')).toHaveLength(1);
  });
});

describe('<Listing />', () => {
  const wrapper = shallow(<Listing roomNum='1' />);
  wrapper.setState({ currentRoom: rooms[0], isMounted: true });

  test('listing to preserve state', () => {
    expect(wrapper.state().currentRoom.roomNum).toBe(1);
  });

  test('renders 1 < MainDescription /> component', () => {
    expect(wrapper.find(MainDescription)).toHaveLength(1);
  });

  test('renders 1 < Amenities /> component', () => {
    expect(wrapper.find(Amenities)).toHaveLength(1);
  });

  test('renders highlights', () => {
    expect(wrapper.find('.sub-head')).toHaveLength(3);
  });

  test('renders superhost as a highlight', () => {
    expect(wrapper.find('.superhost')).toHaveLength(1);
  });

});

