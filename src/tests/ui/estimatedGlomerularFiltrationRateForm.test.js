import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';

import EstimatedGlomerularFiltrationRateForm from '../../components/forms/EstimatedGlomerularFiltrationRateForm';

afterEach(cleanup);
const onSubmit = jest.fn();

beforeEach(() => render(<EstimatedGlomerularFiltrationRateForm onSubmit={(e) => { onSubmit(e) }} />))

describe('<EstimatedGlomerularFiltrationRateForm />', () => {
  test('add', async () => {
    fireEvent.click(screen.queryByText('Add EGFR'));
    await screen.findByText(/Estimated glomerular filtration rate data 2/i);
  })

  test('clear fields', () => {
    fireEvent.click(screen.queryByText('Clear fields'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  })
});