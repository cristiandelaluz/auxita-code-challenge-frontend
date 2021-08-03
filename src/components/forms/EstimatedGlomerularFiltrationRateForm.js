import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
// Components
// .- common/DatePickerField
import { DatePickerField } from '../common/DatePickerField';
// .- Icons
import { PlusCircle, CheckCircle, Trash2, RefreshCw } from 'react-feather';
// .- Validation
import { EstimatedGlomerularFiltrationRateSchema } from '../../validations/estimatedGlomerularFiltrationRateValidation';
import ErrorMessage from '../common/ErrorMessage';
// React bootstrap
import { Button } from 'react-bootstrap';

const initialValues = {
  estimatedGlomerularFiltrationRates: [
    { eGFR: 0, atDate: '' }
  ],
};

const EstimatedGlomerularFiltrationRateForm = (props) => {
  const emitData = (values) => {
    props.onSubmit(values);
  };

  return(
    <Formik
      initialValues={initialValues}
      validationSchema={EstimatedGlomerularFiltrationRateSchema}
      onSubmit={values => {
        emitData(values.estimatedGlomerularFiltrationRates);
      }}
    >
      {({ values, handleReset }) => (
        <Form>
          <FieldArray name="estimatedGlomerularFiltrationRates">
            {({ insert, remove, push }) => (
              <div>
                {values.estimatedGlomerularFiltrationRates.length > 0 &&
                  values.estimatedGlomerularFiltrationRates.map((estimatedGlomerularFiltrationRate, index) => (
                    <div className="row mt-3" key={index}>
                      <h5>Estimated glomerular filtration rate data {index + 1}</h5>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="mb-3">
                          <label htmlFor={`eGFR${index}`}>Estimated glomerular filtration rate</label>
                          <Field className="form-control" id={`eGFR${index}`} name={`estimatedGlomerularFiltrationRates.${index}.eGFR`} type="number" />
                          <ErrorMessage name={`estimatedGlomerularFiltrationRates.${index}.eGFR`} />
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3">
                        <div className="mb-3">
                          <label htmlFor={`dateEGFR${index}`}>Date</label>
                          <DatePickerField name={`estimatedGlomerularFiltrationRates.${index}.atDate`} id={`dateEGFR${index}`} />
                          <ErrorMessage name={`estimatedGlomerularFiltrationRates.${index}.atDate`} />
                        </div>
                      </div>
                      { index > 0 ? 
                      <div className="col-md-3 d-flex align-items-center">
                        <button type="button" className="btn btn-sm btn-outline-danger d-flex align-items-center" onClick={() => remove(index)}>
                          <span className="me-2">Remove</span>
                          <Trash2 size="16" />
                        </button>
                      </div> : null
                      }
                    </div>
                  ))}

                <div className="w-100 d-flex mt-3">
                  <Button variant="outline-primary" className="d-flex align-items-center" type="button" onClick={() => push({ eGFR: 0, atDate: '' })}>
                    <span className="me-2">Add EGFR</span>
                    <PlusCircle />
                  </Button>
                  <Button variant="primary" className="d-flex align-items-center ms-2 me-2" type="submit">
                    <span className="me-2">Calculate</span>
                    <CheckCircle />
                  </Button>
                  <Button variant="outline-primary" className="d-flex align-items-center ms-auto"
                    type="button"
                    onClick={() => {handleReset(); emitData([]);}}>
                    <span className="me-2">Clear fields</span>
                    <RefreshCw />
                  </Button>
                </div>
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  );
};

export default EstimatedGlomerularFiltrationRateForm;