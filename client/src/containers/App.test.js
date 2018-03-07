import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import HomeContainer from './HomeContainer';
import SourcePageContainer from './SourcePageContainer';

const wrapper = shallow(<App />)

describe('App rendering', () => {
  it('renders without crashing', () => {
    wrapper
  });

  it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the NavBar once", () => {
    expect(wrapper.find(NavBar).length).toEqual(1);
  });

  it("renders the BrowserRouter once", () => {
    expect(wrapper.find(BrowserRouter).length).toEqual(1);
  });

  it("renders a route for the HomeContainer", () => {
    expect(wrapper.find('.home-route').length).toEqual(1);
  });

  it("renders a route for every source available", () => {
    expect(wrapper.find('.source-page-route').length)
      .toEqual(wrapper.state().sources.length);
  });
});

describe("App initial state", () => {
  const state = wrapper.state();
  it("sets initial state of currentSourceID to null", () => {
    expect(state.currentSourceID).toBe(null);
  })
});

