import axios from 'axios';

const baseUrl = process.env.REACT_APP_EXTERNAL_API_URL;
const Api = {
  getBloodPressures: async () => await axios.get(`${baseUrl}/health-data-bank/get-blood-pressures`),
  getEstimatedGlomerularFiltrationRates: async () => await axios.get(`${baseUrl}/health-data-bank/get-estimated-glomerular-filtration-rates`),
};

export default Api;