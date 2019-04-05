import React from 'react';
import { shallow } from 'enzyme';
import rooms from './__mocks__/rooms.js';
import MainDescription from '../client/src/components/MainDescription';


describe('<MainDescription /> when showing default content', () => {
  const wrapper = shallow(<MainDescription currentRoom={rooms[0]} />);

  test('listing to have showAll state as false by default', () => {
    expect(wrapper.state().showAll).toBe(false);
  });

  test('renders read more link', () => {
    expect(wrapper.find('.read-more')).toHaveLength(1);
  });
});

describe('<MainDescription /> when showing all content', () => {
  const wrapper = shallow(<MainDescription currentRoom={rooms[0]} />);
  wrapper.setState({ showAll: true });

  test('listing to have showAll state as true', () => {
    expect(wrapper.state().showAll).toBe(true);
  });

  test('renders read more link', () => {
    expect(wrapper.find('.hide')).toHaveLength(1);
  });
});



