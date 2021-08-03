import { getHypertensionClassification, getKidneyDiseaseClassification } from '../../helpers/healthCalculator';

/* 
 * For Hypertension calculator
**/

test('get stage 3 classification for a blood pressure', () => {
  const bloodPressure = { SysBP: 180, DiaBP: 120, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure)).toBe('Stage 3');
});

test('get stage 2 classification for a blood pressure', () => {
  const bloodPressure1 = { SysBP: 160, DiaBP: 99, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure1)).toBe('Stage 2');

  const bloodPressure2 = { SysBP: 179, DiaBP: 99, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure2)).toBe('Stage 2');

  const bloodPressure3 = { SysBP: 159, DiaBP: 100, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure3)).toBe('Stage 2');

  const bloodPressure4 = { SysBP: 159, DiaBP: 109, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure4)).toBe('Stage 2');
});

test('get stage 1 classification for a blood pressure', () => {
  const bloodPressure1 = { SysBP: 140, DiaBP: 89, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure1)).toBe('Stage 1');

  const bloodPressure2 = { SysBP: 159, DiaBP: 89, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure2)).toBe('Stage 1');

  const bloodPressure3 = { SysBP: 139, DiaBP: 90, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure3)).toBe('Stage 1');

  const bloodPressure4 = { SysBP: 139, DiaBP: 99, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure4)).toBe('Stage 1');
});


test('get no hypertension classification for a blood pressure', () => {
  const bloodPressure = { SysBP: 120, DiaBP: 80, atDate: '2018/10/31' };
  expect(getHypertensionClassification(bloodPressure)).toBe('No Hypertension');
});

/* 
 * For Kidney disease calculator
**/

test('get normal classification for a eGFR', () => {
  const eGFR = { eGFR: 91, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR)).toBe('Normal');
});

test('get mildly decreased classification for a eGFR', () => {
  const eGFR1 = { eGFR: 60, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR1)).toBe('Mildly Decreased');
  const eGFR2 = { eGFR: 89, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR2)).toBe('Mildly Decreased');
});

test('get mild to moderate classification for a eGFR', () => {
  const eGFR1 = { eGFR: 45, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR1)).toBe('Mild to Moderate');
  const eGFR2 = { eGFR: 59, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR2)).toBe('Mild to Moderate');
});

test('get moderate to severe classification for a eGFR', () => {
  const eGFR1 = { eGFR: 30, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR1)).toBe('Moderate to Severe');
  const eGFR2 = { eGFR: 44, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR2)).toBe('Moderate to Severe');
});

test('get severely decreased classification for a eGFR', () => {
  const eGFR1 = { eGFR: 15, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR1)).toBe('Severely Decreased');
  const eGFR2 = { eGFR: 29, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR2)).toBe('Severely Decreased');
});

test('get kidney failure classification for a eGFR', () => {
  const eGFR = { eGFR: 14, atDate: '2018/10/31' };
  expect(getKidneyDiseaseClassification(eGFR)).toBe('Kidney Failure');
});