import React, { Component } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';
import App from './App';
import HomeContainer from './HomeContainer';
import Home from '../components/Home';

let app, changeSourceSpy, wrapper;

beforeAll(() => {
  app = shallow(<App />);

  changeSourceSpy = jest.spyOn(app.instance(), 'changeCurrentSource');

  wrapper =
    mount(
      <MemoryRouter>
        <HomeContainer
          sources={app.state().sources}
          changeCurrentSource={app.instance().changeCurrentSource}
        />
      </MemoryRouter>
    )

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