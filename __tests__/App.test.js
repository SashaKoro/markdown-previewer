/* global expect */
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../src/App.js';
import MarkDownPreviewer from '../src/components/MarkDownPreviewer';

describe('App', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.is('.App')).toBe(true);
  });
  it('mounts to a DOM', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('.App').length).toBe(1);
  });
  it('contains the right child element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MarkDownPreviewer).length).toBe(1);
  });
});
