import React from "react";
import ActionModal from "./ActionModal";

const ChangeModal = ({ isOpen, onCancel, onSubmit, text }) => {
  return (
    <ActionModal
      isOpen={isOpen}
      onCancel={onCancel}
      onSubmit={onSubmit}
      text={text}
    />
  );
};

export default ChangeModal;
