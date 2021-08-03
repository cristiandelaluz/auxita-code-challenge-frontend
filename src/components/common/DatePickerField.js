import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import { format, getYear, getMonth } from 'date-fns';
import { ArrowLeft, ArrowRight } from 'react-feather';

const dateFormat = 'yyyy/MM/dd';
const range = (start, end, length = end - start) => Array.from({ length }, (_, i) => start + i);

export const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext() ?? {};
  const [field] = useField(props);

  const years = range(2000, getYear(new Date()) + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  return (
    <DatePicker
      className="form-control"
      dateFormat={dateFormat}
      { ...field }
      { ...props }
      role="textbox"
      todayButton="Today"
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          style={{
            margin: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button type="button" className="btn btn-primary btn-sm px-2" onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
            <ArrowLeft size="16" />
          </button>
          
          <div className="px-2">
            <select
              className="form-select form-select-sm mb-1 w-100"
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              className="form-select form-select-sm w-100"
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <button type="button" className="btn btn-primary btn-sm px-2" onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
          <ArrowRight size="16" />
          </button>
        </div>
      )}
      selected={(field.value && new Date(field.value)) || null}
      onChange={value => setFieldValue(field.name, format(value, dateFormat))}
    />
  );
};