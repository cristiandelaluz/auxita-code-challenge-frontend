import * as Yup from 'yup';
 
export const EstimatedGlomerularFiltrationRateSchema = Yup.object().shape({
  estimatedGlomerularFiltrationRates: Yup.array()
    .of(
      Yup.object().shape({
        eGFR: Yup.number()
          .moreThan(0, 'Estimated glomerular filtration must be more than 0.')
          .required('Estimated glomerular filtration.'),
        atDate: Yup.string()
          .required('Date is required.'),
      })
    )
});