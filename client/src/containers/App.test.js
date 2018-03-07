import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import NavBar from '../components/NavBar';
import HomeContainer from './HomeContainer';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />)
});

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
  it("sets initial state of currentSourceID to null", () => {
    expect(wrapper.state().currentSourceID).toBe(null);
  })
});

describe("#changeCurrentSource", () => {
  it("sets the correct currentSourceID", () => {
    expect(wrapper.state().currentSourceID).toBe(null);
    wrapper.instance().changeCurrentSource('espn');
    expect(wrapper.state().currentSourceID).toBe('espn');
  });

  it("sets the currentSourceID to null if none is passed", () => {
    expect(wrapper.state().currentSourceID).toBe(null);
    wrapper.instance().changeCurrentSource();
    expect(wrapper.state().currentSourceID).toBe(null);
  });
});

