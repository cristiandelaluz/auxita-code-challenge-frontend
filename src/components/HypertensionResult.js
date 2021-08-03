import React, { useState, useEffect } from 'react';
// Helper for calculate hypertension
import { getHypertensionClassification } from '../helpers/healthCalculator';
// React bootstrap
import { Modal, Button } from 'react-bootstrap';

const HypertensionResult = ({ bloodPressures, open }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (bloodPressures.length) {
      handleShow();
    }
  }, [open, bloodPressures]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getHC = getHypertensionClassification;

  return(
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Hypertension result</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <table className="table table-hover mt-4">
        <thead>
          <tr>
            <th>#</th>
            <th>Systolic blood pressure</th>
            <th>Diastolic blood pressure</th>
            <th>Date</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {bloodPressures.map((bloodPressure, index) => {
            return(
              <tr key={index}>
                <td>BP data {index + 1}</td>
                <td>{bloodPressure.SysBP}</td>
                <td>{bloodPressure.DiaBP}</td>
                <td>{bloodPressure.atDate}</td>
                <td className="text-secondary fw-bold">{getHC(bloodPressure)}</td>
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

export default HypertensionResult;