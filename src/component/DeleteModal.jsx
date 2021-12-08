import React from "react";
import ActionModal from "./ActionModal";

const DeleteModal = ({ isOpen, onCancel, onSubmit, text }) => {
  return (
    <ActionModal
      isOpen={isOpen}
      onCancel={onCancel}
      onSubmit={onSubmit}
      text={text}
    />
  );
};

export default DeleteModal;
