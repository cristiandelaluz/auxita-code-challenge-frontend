import React, { useState } from 'react';
// Components
// .- BloodPressureForm
import EstimatedGlomerularFiltrationRateForm from '../components/forms/EstimatedGlomerularFiltrationRateForm';
// .- HypertensionResult
import KidneyDiseaseResult from '../components/KidneyDiseaseResult';
// .- React bootstrap
import { Button, Alert } from 'react-bootstrap';
// .- Feather icons
import { DownloadCloud } from 'react-feather';
// .- Api
import Api from '../helpers/api';

const KidneyDiseaseCalculator = () => {
  const [estimatedGlomerularFiltrationRates, setEstimatedGlomerularFiltrationRates] = useState([]);
  const [openResult, setOpenResult] = useState(0);
  const [apiFailed, setApiFailed] = useState(false);

  const onSubmit = (data) => {
    setEstimatedGlomerularFiltrationRates(data);
    setOpenResult(openResult + 1);
  }

  const loadData = async () => {
    try {
      const { data } = await Api.getEstimatedGlomerularFiltrationRates();
      if (data.length) {
        setEstimatedGlomerularFiltrationRates(data);
      }

      setApiFailed(false);
    } catch (error) {
      setApiFailed(true);
    }
  }

  return (
    <div className="container m-navbar m-footer">
      <div className="row">
        <div className="col-12">
          <div className="card-gradient--top"></div>
          <div className="card border-0 shadow">
            <div className="card-body">
            <div className="card-title d-flex align-items-center justify-content-between mb-4">
              <h4 className="m-0">Kidney Disease Calculator</h4>
              <Button variant="outline-secondary d-flex align-items-center" onClick={() => loadData()}>
                Load data from an external API
                <DownloadCloud className="ms-2" />
              </Button>
            </div>
              <Alert variant="danger" show={apiFailed}>
                Api call failed. Did you run API project ? You can use "npm run start" or "yarn start" for run it.
              </Alert>
              <EstimatedGlomerularFiltrationRateForm onSubmit={(e) => { onSubmit(e) }} />
              <KidneyDiseaseResult estimatedGlomerularFiltrationRates={estimatedGlomerularFiltrationRates} open={openResult} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KidneyDiseaseCalculator;