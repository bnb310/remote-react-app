import React from 'react';
import ReactDOM from 'react-dom';
import Tabs from './Tabs';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Tabs Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tabs />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders empty given no tabs', () => {
    const wrapper = shallow(<Tabs />)
    expect(toJson(wrapper)).toMatchSnapshot()
})
})