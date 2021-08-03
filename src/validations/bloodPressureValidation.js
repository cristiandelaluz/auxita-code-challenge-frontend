import * as Yup from 'yup';
 
export const BloodPressureSchema = Yup.object().shape({
  bloodPressures: Yup.array()
    .of(
      Yup.object().shape({
        SysBP: Yup.number()
          .moreThan(0, 'Systolic blood pressure must be more than 0.')
          .required('Systolic blood pressure is required.'),
        DiaBP: Yup.number()
        .moreThan(0, 'Diastolic blood pressure must be more than 0.')
          .required('Diastolic blood pressure is required.'),
        atDate: Yup.string()
          .required('Date is required.'),
      })
    )
});