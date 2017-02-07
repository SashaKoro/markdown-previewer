/* global expect */
import React from 'react';
import { shallow, mount } from 'enzyme';
import OutputArea from '../src/components/OutputArea';

describe('Output area', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(<OutputArea incomingText="test" />);
    expect(wrapper.is('.OutputArea')).toBe(true);
  });
  it('displays the output from props to the user', () => {
    const wrapper = mount(<OutputArea incomingText="### hello" />);
    expect(wrapper.find('.OutputArea').text()).toContain('hello');
  });
});
