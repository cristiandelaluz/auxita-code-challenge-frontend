import React, { useState, useEffect } from 'react';
// Helper for calculate hypertension
import { getKidneyDiseaseClassification } from '../helpers/healthCalculator';
// React bootstrap
import { Modal, Button } from 'react-bootstrap';

const KidneyDiseaseResult = ({ estimatedGlomerularFiltrationRates, open }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (estimatedGlomerularFiltrationRates.length) {
      handleShow();
    }
  }, [open, estimatedGlomerularFiltrationRates]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getKDC = getKidneyDiseaseClassification;

  return(
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Kidney disease result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table mt-4">
          <thead>
            <tr>
              <th>#</th>
              <th>Estimated glomerular filtration rate</th>
              <th>Date</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {estimatedGlomerularFiltrationRates.map((estimatedGlomerularFiltrationRate, index) => {
              return(
                <tr key={index}>
                  <td>EGFR data {index + 1}</td>
                  <td>{estimatedGlomerularFiltrationRate.eGFR}</td>
                  <td>{estimatedGlomerularFiltrationRate.atDate}</td>
                  <td className="text-secondary fw-bold">{getKDC(estimatedGlomerularFiltrationRate)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default KidneyDiseaseResult;