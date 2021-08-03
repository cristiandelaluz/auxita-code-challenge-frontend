import React from 'react';
import { screen, render } from '@testing-library/react';

import App from '../../App';

beforeEach(() => render(<App />))

describe('<App />', () => {
  test("it must display app logo", () => {
    const logo = screen.queryByAltText(/logo/i);
    expect(logo).toBeInTheDocument();
  })
});