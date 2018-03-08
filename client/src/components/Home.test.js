import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';

let sources, wrapper;

beforeAll(() => {
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

  wrapper = shallow( <Home sources={sources} />);
});

describe('Home rendering', () => {
  it('renders without crashing', () => {
    wrapper
  });

  it('renders correctly', () => {
    const tree =
      renderer.create(
        <MemoryRouter>
          <Home sources={sources} />
        </MemoryRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});