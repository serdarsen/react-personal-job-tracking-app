import React from "react";
import "./deleteModal.css";
import Footer from "./Footer";
import Modal from "./Modal";

const DeleteModal = ({ isOpen, onCancel, onSubmit, jobToDeleteLabel }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onCancel}>
      <div className="app__deleteModal-content">
        Delete {jobToDeleteLabel} ?
      </div>
      <Footer
        onCancel={onCancel}
        onSubmit={onSubmit}
        cancelLabel="No"
        submitLabel="Yes"
      />
    </Modal>
  );
};

export default DeleteModal;
