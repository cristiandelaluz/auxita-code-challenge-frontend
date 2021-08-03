import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { DatePickerField } from '../../components/common/DatePickerField';
import { useField } from 'formik';

jest.mock('formik');

beforeEach(() => {
  const mockField = {
    value: '',
    checked: false,
    onChange: jest.fn(),
    onBlur: jest.fn(),
    multiple: undefined,
    name: 'datepicker',
  };
  const mockMeta = {
    touched: false,
    error: '',
    initialError: '',
    initialTouched: false,
    initialValue: '',
    value: '',
  };
  const mockFunctions = {
    setError: jest.fn(),
    setTouched: jest.fn(),
    setValue: jest.fn()
  };
  
  const mockProps = {
    id: 'datepicker',
    name: 'datepicker',
  };
  
  useField.mockReturnValue([{...mockField}, {...mockMeta}, {...mockFunctions}]);
  render(<DatePickerField id="datepicker" name="datepicker" {...mockProps} />)
})

describe('<DatePickerField />', () => {
  test('it must display calendar', async () => {
    fireEvent.click(screen.getByRole('textbox'));
    await screen.findByText(/today/i);
  })
});