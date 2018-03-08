import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Sources from './Sources';

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

  wrapper = shallow(<Sources sources={sources} />);
});

describe('Sources rendering', () => {
  it('renders without crashing', () => {
    wrapper
  });

  it('renders correctly', () => {
    const tree =
      renderer.create(
        <MemoryRouter>
          <Sources sources={sources} />
        </MemoryRouter>
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the correct number of source components", () => {
    expect(wrapper.find('.source').length).toEqual(sources.length);
  });
});