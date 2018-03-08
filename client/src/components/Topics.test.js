import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Topics from './Topics';

let currentTopic, source, changeCurrentTopic, wrapper;

beforeAll(() => {
  currentTopic = 'Top';

  source = {
    id: 'bleacher-report',
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
  };

  changeCurrentTopic = jest.fn();

  wrapper =
    shallow(
      <Topics
        sourceColor={source.primaryColor}
        topics={source.topics}
        currentTopic={currentTopic}
        changeCurrentTopic={changeCurrentTopic}
      />
    );
});

describe('App rendering', () => {
  it('renders without crashing', () => {
    wrapper
  });

  it('renders correctly', () => {
    const tree =
      renderer.create(
        <Topics
          sourceColor={source.primaryColor}
          topics={source.topics}
          currentTopic={currentTopic}
          changeCurrentTopic={changeCurrentTopic}
        />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders the proper number of list elements", () => {
    expect(wrapper.find('li').length).toEqual(source.topics.length);
  });
});
