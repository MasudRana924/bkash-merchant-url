import React from "react";
import "./Modal.css"; // Make sure to style your modal
import logo from "../../assets/bkashLogo.png";
const Modal = ({ message, onClose, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="flex gap-2 mb-6">
          <img alt="" src={logo} className="h-6 w-12 mt-2" />
          <p className="mt-4 text-xs">{message}</p>
        </div>
        <div className="btn-section">
        <button
          onClick={onConfirm}
          className="alert-btn-yes h-10 w-16 text-white border rounded-lg"
        >
          হ্যাঁ
        </button>
        <button
          onClick={onClose}
          className="alert-btn-no h-10 w-16 text-gray-900 border rounded-lg ml-4"
        >
          না
        </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;


