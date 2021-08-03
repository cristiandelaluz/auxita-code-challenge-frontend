import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import HypertensionCalculator from '../../views/HypertensionCalculator';
import axios from 'axios';

jest.mock('axios');

beforeEach(() => render(<HypertensionCalculator />))

describe('Hypertension calculator', () => {
  test('it must display the title', () => {
    const title = screen.queryByText(/hypertension calculator/i);
    expect(title).toBeInTheDocument();
  });

  test('Load data', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          SysBP: 120,
          DiaBP: 90,
          atDate: "2021/08/03"
        },
        {
          SysBP: 120,
          DiaBP: 100,
          atDate: "2021/08/03"
        },
      ]
    });

    fireEvent.click(screen.queryByText('Load data from an external API'));
    await screen.findByText(/Hypertension result/i);
  });
});