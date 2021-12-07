import React from "react";
import "./footer.css";

const Footer = ({
  onCancel = () => {},
  onSubmit = () => {},
  cancelLabel = "Cancel",
  submitLabel = "Save",
}) => {
  return (
    <div className="app__footer">
      <button
        type="button"
        className="btn btn-light"
        onClick={onCancel}
        title={cancelLabel}
      >
        {cancelLabel}
      </button>
      <button
        type="submit"
        className="btn btn-success app__footer-resolve"
        onClick={onSubmit}
        title={submitLabel}
      >
        {submitLabel}
      </button>
    </div>
  );
};

export default Footer;
