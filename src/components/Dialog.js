import React from 'react';
import '../styles/index.css';

const Dialog = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Dialog;
