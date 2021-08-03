import React from 'react';
import { screen, render, cleanup, fireEvent, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

import BloodPressureForm from '../../components/forms/BloodPressureForm';

afterEach(cleanup);
const onSubmit = jest.fn();

beforeEach(() => render(<BloodPressureForm onSubmit={(e) => { onSubmit(e) }} />))

describe('<BloodPressureForm />', () => {
  test('add', async () => {
    fireEvent.click(screen.queryByText('Add blood pressure'));
    await screen.findByText(/Blood pressure data 2/i);
  })

  test('clear fields', () => {
    fireEvent.click(screen.queryByText('Clear fields'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  })
});