import React from "react";
import JobForm from "./JobForm";
import Modal from "./Modal";

const CreateModal = ({ isOpen, onCancel, onSubmit }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCancel}>
      <JobForm onCancel={onCancel} onSubmit={onSubmit} />
    </Modal>
  );
};

export default CreateModal;
