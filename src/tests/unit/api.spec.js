import Api from '../../helpers/api';
import axios from 'axios';

jest.mock('axios');

describe('Api calls', () => {
  test('getBloodPressures', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          SysBP: 120,
          DiaBP: 90,
          atDate: "2021/08/03"
        },
        {
          SysBP: 120,
          DiaBP: 100,
          atDate: "2021/08/03"
        },
      ]
    });

    const { data } = await Api.getBloodPressures();
    expect(Array.isArray(data)).toEqual(true);
  });

  test('getEstimatedGlomerularFiltrationRates', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          eGFR: 65,
          atDate: "2021/08/03"
        },
        {
          eGFR: 70,
          atDate: "2021/08/03"
        },
      ]
    });

    const { data } = await Api.getEstimatedGlomerularFiltrationRates();
    expect(Array.isArray(data)).toEqual(true);
  });
});