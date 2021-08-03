import React from 'react';
import { screen, render } from '@testing-library/react';

import KidneyDiseaseResult from '../../components/KidneyDiseaseResult';

const estimatedGlomerularFiltrationRates = [{ eGFR: 120, atDate: '2021/08/02' }]
beforeEach(() => render(<KidneyDiseaseResult estimatedGlomerularFiltrationRates={estimatedGlomerularFiltrationRates} open={1} />))

describe('<KidneyDiseaseResult />', () => {
  test("It must display a modal", () => {
    const modal = screen.queryByText(/Kidney disease result/i);
    expect(modal).toBeInTheDocument();
  })
});