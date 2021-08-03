import React from 'react';
import { screen, render } from '@testing-library/react';

import AppNavbar from '../../components/layouts/AppNavbar';
import {
  BrowserRouter as Router
} from 'react-router-dom';

beforeEach(() => render(<Router><AppNavbar /></Router>))

describe('<AppNavbar />', () => {
  test('it must display hypertension calculator link', () => {
    const link = screen.queryByText(/hypertension calculator/i);
    expect(link).toBeInTheDocument();
  })

  test('it must display kidney disease calculator link', () => {
    const link = screen.queryByText(/kidney disease calculator/i);
    expect(link).toBeInTheDocument();
  })
});