import React from 'react';
import { screen, render } from '@testing-library/react';

import AppFooter from '../../components/layouts/AppFooter';

beforeEach(() => render(<AppFooter />))

describe('<AppFooter />', () => {
  test("it must display author's name", () => {
    const author = screen.queryByText(/cristian de la luz/i);
    expect(author).toBeInTheDocument();
  })
});