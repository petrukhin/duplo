import React from 'react';
import PlayButton from './index.jsx';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(
        <PlayButton />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});