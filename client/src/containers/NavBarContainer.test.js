import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import NavBarContainer from './NavBarContainer';

let currentSourceID, sources, setMenuStatus, wrapper;

beforeEach(() => {
  currentSourceID = null;

  sources = [
    {
      id: 'bleacher-report',
      title: 'Bleacher Report',
      faviconURL: 'https://besticon-demo.herokuapp.com/icon?url=https://bleacherreport.com/&size=70..120..200',
      primaryColor: '#000000',
      topics: [
        {
          name: 'Top'
        },
        {
          name: 'MLB'
        },
        {
          name: 'NFL'
        },
        {
          name: 'NBA'
        },
        {
          name: 'UFC'
        },
        {
          name: 'Boxing'
        },
        {
          name: 'WWE'
        }
      ]
    },
    {
      id: 'cnn',
      title: 'CNN',
      faviconURL: 'https://besticon-demo.herokuapp.com/icon?url=https://bleacherreport.com/&size=70..120..200',
      primaryColor: '#cc0000',
      topics: [
        {
          name: 'Top'
        },
        {
          name: 'World'
        },
        {
          name: 'Politics'
        },
        {
          name: 'Money'
        },
        {
          name: 'Health'
        },
        {
          name: 'Travel'
        },
        {
          name: 'Tech'
        }
      ]
    },
    {
      id: 'vice-news',
      title: 'Vice News',
      faviconURL: 'https://besticon-demo.herokuapp.com/icon?url=https://bleacherreport.com/&size=70..120..200',
      primaryColor: '#000000',
      topics: [
        {
          name: 'Top'
        },
        {
          name: 'Drugs'
        },
        {
          name: 'Tech'
        },
        {
          name: 'Money'
        },
        {
          name: 'Immigration'
        },
        {
          name: 'Politics'
        },
        {
          name: 'Terrorism'
        }
      ]
    }
  ];

  wrapper =
    shallow(
      <NavBarContainer
        currentSourceID={currentSourceID}
        sources={sources}
      />
    );
});

describe('NavBarContainer rendering', () => {
  it('renders without crashing', () => {
    wrapper
  });

  it('renders correctly', () => {
    const tree =
      renderer.create(
        <MemoryRouter>
          <NavBarContainer
            currentSourceID={currentSourceID}
            sources={sources}
          />
        </MemoryRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('initial state', () => {
  it('menuActive', () => {
    expect(wrapper.state().menuActive).toBe(false);
  });
});

describe('#setMenuStatus', () => {
  it('sets activeMenu state to it\'s inverse', () => {
    expect(wrapper.state().menuActive).toBe(false);
    wrapper.instance().setMenuStatus()
    expect(wrapper.state().menuActive).toBe(true);
  });

  it('doesn\'t set activeMenu state if target is logo', () => {
    expect(wrapper.state().menuActive).toBe(false);
    wrapper.instance().setMenuStatus('logo')
    expect(wrapper.state().menuActive).toBe(false);
  });
});