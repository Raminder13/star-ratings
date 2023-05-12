import React from 'react';

function Dialog(props) {
  const { onClose = f => f } = props;
  return (
    <div>
      <h2>Dialog title</h2>
      <p>Dialog content</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default Dialog;
