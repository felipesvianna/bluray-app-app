import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('Se App renderiza normalmente', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toEqual(true);
});