import React, { Component } from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { shallow, mount } from 'enzyme';
import App from './App';
import HomeContainer from './HomeContainer';
import Home from '../components/Home';

describe('HomeContainer rendering', () => {
  const options = new ReactRouterEnzymeContext();
  const app = shallow(<App />);
  const changeSourceSpy = jest.spyOn(app.instance(), 'changeCurrentSource');
  const wrapper =
    mount(<HomeContainer
      sources={app.state().sources}
      changeCurrentSource={app.instance().changeCurrentSource} />, options.get())

  it('renders without crashing', () => {
    wrapper
  });

  it('renders the Home component once', () => {
    expect(wrapper.find('.home-component').length).toBe(1)
  });

  it('calls changeCurrentSource once', () => {
    expect(changeSourceSpy).toHaveBeenCalled()
    changeSourceSpy.mockClear();
  });
});