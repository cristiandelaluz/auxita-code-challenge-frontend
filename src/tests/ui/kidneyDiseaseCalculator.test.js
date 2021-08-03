import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import KidneyDiseaseCalculator from '../../views/KidneyDiseaseCalculator';
import axios from 'axios';

jest.mock('axios');

beforeEach(() => render(<KidneyDiseaseCalculator />))

describe('Kidney disease calculator', () => {
  test('it must display the title', () => {
    const title = screen.queryByText(/kidney disease calculator/i);
    expect(title).toBeInTheDocument();
  });

  test('Load data', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          eGFR: 65,
          atDate: "2021/08/03"
        },
        {
          eGFR: 70,
          atDate: "2021/08/03"
        },
      ]
    });

    fireEvent.click(screen.queryByText('Load data from an external API'));
    await screen.findByText(/kidney disease result/i);
  });
});