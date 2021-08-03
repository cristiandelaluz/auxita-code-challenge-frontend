import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
// Components
// .- common/DatePickerField
import { DatePickerField } from '../common/DatePickerField';
// .- Icons
import { PlusCircle, CheckCircle, Trash2, RefreshCw } from 'react-feather';
// .- Validation
import { BloodPressureSchema } from '../../validations/bloodPressureValidation';
import ErrorMessage from '../common/ErrorMessage';
// React bootstrap
import { Button } from 'react-bootstrap';

const initialValues = {
  bloodPressures: [
    { SysBP: 0, DiaBP: 0, atDate: '' }
  ],
};

const BloodPressureForm = (props) => {
  const emitData = (values) => {
    props.onSubmit(values);
  };

  return(
    <Formik
      initialValues={initialValues}
      validationSchema={BloodPressureSchema}
      onSubmit={values => {
        emitData(values.bloodPressures);
      }}
    >
      {({ values, handleReset }) => (
        <Form>
          <FieldArray name="bloodPressures">
            {({ insert, remove, push }) => (
              <div>
                {values.bloodPressures.length > 0 &&
                  values.bloodPressures.map((bloodPressure, index) => (
                    <div className="row mt-3" key={index}>
                      <h5>Blood pressure data {index + 1}</h5>
                      <div className="col-md-4 col-lg-3">
                        <div className="mb-3">
                          <label htmlFor={`SysBP${index}`}>Systolic blood pressure</label>
                          <Field className="form-control" id={`SysBP${index}`} name={`bloodPressures.${index}.SysBP`} type="number" />
                          <ErrorMessage name={`bloodPressures.${index}.SysBP`} />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <div className="mb-3">
                          <label htmlFor={`DiaBP${index}`}>Diastolic blood pressure</label>
                          <Field className="form-control" id={`DiaBP${index}`} name={`bloodPressures.${index}.DiaBP`} type="number" />
                          <ErrorMessage name={`bloodPressures.${index}.DiaBP`} />
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-3">
                        <div className="mb-3">
                          <label htmlFor={`dateBp${index}`}>Date</label>
                          <DatePickerField name={`bloodPressures.${index}.atDate`} id={`dateBp${index}`} />
                          <ErrorMessage name={`bloodPressures.${index}.atDate`} />
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
                  <Button variant="outline-primary" className="d-flex align-items-center" type="button" onClick={() => push({ SysBP: 0, DiaBP: 0, atDate: '' })}>
                    <span className="me-2">Add blood pressure</span>
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

export default BloodPressureForm;