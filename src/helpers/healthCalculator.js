/**
 * Function to classify if a patient has hypertension
 * @param bloodPressure of type { SysBP: number, DiaBP: number, atDate: string }
 * @return A string with the result
 */
export const getHypertensionClassification = (bloodPressure) => {
  const { SysBP, DiaBP } = bloodPressure;
  if (SysBP >= 180 && DiaBP >= 120) {
    return 'Stage 3';
  }

  if ((SysBP >= 160 && SysBP < 180) || (DiaBP >= 100 && DiaBP < 110)) {
    return 'Stage 2';
  }

  if ((SysBP >= 140 && SysBP < 160) || (DiaBP >= 90 && DiaBP < 100)) {
    return 'Stage 1';
  }

  return 'No Hypertension';
};

/**
 * Function to classify if a patient has kidney disease
 * @param estimatedGlomerularFiltrationRate of type { eGFR: number, atDate: string }
 * @return A string with the result
 */
export const getKidneyDiseaseClassification = (estimatedGlomerularFiltrationRate) => {
  const { eGFR } = estimatedGlomerularFiltrationRate;

  if (eGFR >= 90) {
    return 'Normal';
  }

  if (eGFR >= 60 && eGFR < 90) {
    return 'Mildly Decreased';
  }

  if (eGFR >= 45 && eGFR < 60) {
    return 'Mild to Moderate';
  }

  if (eGFR >= 30 && eGFR < 45) {
    return 'Moderate to Severe';
  }

  if (eGFR >= 15 && eGFR < 30) {
    return 'Severely Decreased';
  }

  return 'Kidney Failure';
};