import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Table from './index';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('Table', () => {
  
  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z'},
    ],
  }

  it('renders without crasing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table list = { props.list } onDismiss = {() => {}}  />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('has valid snapshot', () => {
    const component = renderer.create(
      <Table list = { props.list }  onDismiss = {() => {}} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  // Unit test
  it('shows two items in list', () => {
    const element = shallow(
      <Table list = { props.list } onDismiss = {() => {}} />
    );

    expect(element.find('.table-row').length).toBe(2);
  });
});