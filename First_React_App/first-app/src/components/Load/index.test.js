import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import ButtonWithLoading from './index';

describe('Load', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonWithLoading
        isLoading={false}
        onClick={() => {}} 
      >
        Test
      </ButtonWithLoading>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

test('has a valid snapshot', () => {
  const component = renderer.create(
    <ButtonWithLoading
      isLoading={false}
      onClick={() => {}}
    >
      Test
    </ButtonWithLoading>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});