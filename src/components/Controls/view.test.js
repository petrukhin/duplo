import React from 'react';
import Controls from './index.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <Controls />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});