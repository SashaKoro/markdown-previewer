import React from 'react';
import { shallow } from 'enzyme';
import App from '../src/App.js';

describe('App', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.is('.App')).toBe(true);
  });
});
