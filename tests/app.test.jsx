import React from 'react';
import { shallow } from 'enzyme';
import App from '../client/src/components/App';
import Listing from '../client/src/components/Listing';

describe('App', () => {
  Object.defineProperty(window.location, 'pathname', {
    writable: true,
    value: 'rooms/3'
  });
  const wrapper = shallow(<App />);
  wrapper.setState({ roomNum: 3, isMounted: true });

  test('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('renders 1 < Listing /> component', () => {
    expect(wrapper.find(Listing)).toHaveLength(1);
  });
});

