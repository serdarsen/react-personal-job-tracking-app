import React, { useRef } from "react";
import "./modal.css";

const Modal = ({
  isOpen = null,
  onReject,
  onResolve,
  rejectLabel = "Cancel",
  resolveLabel = "Save",
  children,
}) => {
  const appModalRef = useRef();

  return (
    <div
      ref={appModalRef}
      className={`app__modal ${
        isOpen === true
          ? "fade-in-fwd"
          : isOpen === false
          ? "fade-in-fwd-reverse"
          : "app__modal-hidden"
      }`}
      onClick={(e) => {
        if (e.target !== appModalRef.current) {
          return;
        }
        onReject();
      }}
    >
      <div
        className={`app__modal-content ${
          isOpen === true
            ? "slide-in-top"
            : isOpen === false
            ? "slide-in-top-reverse"
            : ""
        }`}
      >
        <div className="app__modal-body">{children}</div>
        <div className="app__modal-footer">
          <button
            type="button"
            className="btn btn-light"
            onClick={onReject}
            title={rejectLabel}
          >
            {rejectLabel}
          </button>
          <button
            type="button"
            className="btn btn-success app__modal-resolve"
            onClick={onResolve}
            title={resolveLabel}
          >
            {resolveLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
