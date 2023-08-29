import React from 'react';
import {render} from '@testing-library/react-native';
import Home from 'screens/home';

describe('Home test', () => {
  it('renderize text', () => {
    const {getByText} = render(<Home />);

    const expectedText = getByText('HOME');

    expect(expectedText).toBeTruthy();
  });
});
