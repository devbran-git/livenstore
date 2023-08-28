import React from 'react';
import {render} from '@testing-library/react-native';
import Cart from '..';

describe('Home test', () => {
  it('renderize text', () => {
    const {getByText} = render(<Cart />);

    const expectedText = getByText('CART');

    expect(expectedText).toBeTruthy();
  });
});
