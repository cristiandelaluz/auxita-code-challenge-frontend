import React, { useState } from 'react';
// Components
// .- BloodPressureForm
import BloodPressureForm from '../components/forms/BloodPressureForm';
// .- HypertensionResult
import HypertensionResult from '../components/HypertensionResult';
// .- React bootstrap
import { Button, Alert } from 'react-bootstrap';
// .- Feather icons
import { DownloadCloud } from 'react-feather';
// .- Api
import Api from '../helpers/api';

const HypertensionCalculator = () => {
  const [bloodPressures, setBloodPressures] = useState([]);
  const [openResult, setOpenResult] = useState(0);
  const [apiFailed, setApiFailed] = useState(false);

  const onSubmit = (data) => {
    setBloodPressures(data);
    setOpenResult(openResult + 1);
  }

  const loadData = async () => {
    try {
      const { data } = await Api.getBloodPressures();
      if (data.length) {
        setBloodPressures(data);
      }

      setApiFailed(false);
    } catch (error) {
      setApiFailed(true);
    }
  }

  return(
    <div className="container m-navbar m-footer">
      <div className="row">
        <div className="col-12">

          <div className="card-gradient--top"></div>
          <div className="card border-0 shadow">
            <div className="card-body">
            <div className="card-title d-flex align-items-center justify-content-between mb-4">
              <h4 className="m-0">Hypertension Calculator</h4>
              <Button variant="outline-secondary d-flex align-items-center" onClick={() => loadData()}>
                Load data from an external API
                <DownloadCloud className="ms-2" />
              </Button>
            </div>
              <Alert variant="danger" show={apiFailed}>
                Api call failed. Did you run API project ? You can use "npm run start" or "yarn start" for run it.
              </Alert>
              <BloodPressureForm onSubmit={(e) => { onSubmit(e) }} />
              <HypertensionResult bloodPressures={bloodPressures} open={openResult} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HypertensionCalculator;