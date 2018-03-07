import React, { Component } from 'react';
import ReactRouterEnzymeContext from 'react-router-enzyme-context';
import { shallow, mount } from 'enzyme';
import App from './App';
import HomeContainer from './HomeContainer';
import Home from '../components/Home';

let options, app, changeSourceSpy, wrapper;

beforeAll(() => {
  options = new ReactRouterEnzymeContext();
  app = shallow(<App />);
  changeSourceSpy = jest.spyOn(app.instance(), 'changeCurrentSource');
  wrapper =
    mount(<HomeContainer
      sources={app.state().sources}
      changeCurrentSource={app.instance().changeCurrentSource} />, options.get())

});

describe('HomeContainer rendering', () => {
  it('renders without crashing', () => {
    wrapper
  });

  it('renders the Home component once', () => {
    expect(wrapper.find(Home).length).toBe(1)
  });

  it('calls changeCurrentSource once', () => {
    expect(changeSourceSpy).toHaveBeenCalled()
    changeSourceSpy.mockClear();
  });
});