import React from 'react';
import { shallow } from 'enzyme';
import { Wrapper } from './Wrapper';
import { InputField } from './InputField';

describe('<Wrapper />', () => {
  it('should render InputField component', () => {
    const renderedComponent = shallow(<Wrapper />);
    expect(renderedComponent.find(InputField)).toBe(true);
  });
});
