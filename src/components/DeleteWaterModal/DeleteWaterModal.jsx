import { Modal, Button } from "react-bootstrap";
import {deleteWaterRecord, fetchDaysArray} from "../../redux/water/operations";
import { fetchTodayWaterRecords} from "../../redux/water/operations";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

export const DeleteContactModal = ({ show, onHide, }) => {
   
    const dispatch = useDispatch();
    const accessToken = localStorage.getItem("persist:auth");
    
    const handleDeleteWater = async (id) => {
    if (!accessToken) return;
  
    try {
      const response = await dispatch(deleteWaterRecord(id));
      if (response.meta.requestStatus === "fulfilled") {
        // Обновление данных
        await dispatch(fetchTodayWaterRecords()); 
        await dispatch(fetchDaysArray())
         window.location.reload();
      }
    } catch (err) {
      console.error("Error deleting water record", err);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Deletion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure you want to delete this contact? This action cannot be
        undone.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleDeleteWater}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};