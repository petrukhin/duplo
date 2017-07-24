import React from 'react';
import Controls from './index.jsx';
import { shallow } from 'enzyme';

it('should call the onClick handler', () => {
    const onClick = jest.fn();
    const component = shallow(<Controls
        onClick={onClick}
    />);
    component.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
});