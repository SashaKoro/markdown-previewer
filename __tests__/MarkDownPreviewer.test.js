/* global expect */
import React from 'react';
import { shallow, mount } from 'enzyme';
import MarkDownPreviewer from '../src/components/MarkDownPreviewer';

describe('MarkDownPreviewer', () => {
  it('is selectable by class name', () => {
    const wrapper = shallow(<MarkDownPreviewer />);
    expect(wrapper.is('.MarkDownPreviewer')).toBe(true);
  });
  it('Updates the state when textarea input changes', () => {
    const wrapper = shallow(<MarkDownPreviewer />);
    wrapper.setState({ output: 'Hello' });

    wrapper.find('.Textarea').simulate('change', { target: { value: 'Goodbye' } });
    expect(wrapper.state().output).toBe('Goodbye');
  });
  it('displays the output from state to the user', () => {
    const wrapper = mount(<MarkDownPreviewer />);
    wrapper.setState({ output: 'example' });

    expect(wrapper.find('.OutputArea').text()).toContain('example');
  });
});
