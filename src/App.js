import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import './styles/index.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="app">
      <h1>RATING SYSTEM</h1>
      <StarRating />
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      <Dialog isOpen={isOpen} onClose={handleClose}>
        <p>This is a dialog box.</p>
      </Dialog>
    </div>
  );
};

export default App;
