import React from 'react';
import { screen, render } from '@testing-library/react';

import HypertensionResult from '../../components/HypertensionResult';

const bloodPressures = [{ SysBP: 120, DiaBP: 100, atDate: '2021/08/02' }]
beforeEach(() => render(<HypertensionResult bloodPressures={bloodPressures} open={1} />))

describe('<HypertensionResult />', () => {
  test("It must display a modal", () => {
    const modal = screen.queryByText(/Hypertension result/i);
    expect(modal).toBeInTheDocument();
  })
});