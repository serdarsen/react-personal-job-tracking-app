import React, { useRef } from "react";
import "./modal.css";

const Modal = ({ isOpen = null, onRequestClose, children }) => {
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
        onRequestClose();
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
        {children}
      </div>
    </div>
  );
};

export default Modal;
