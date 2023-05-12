import React, { useState } from "react";
import StarRating from "./components/StarRating";
import Dialog from "./components/Dialog";
import "./styles/index.css";

const App = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  return (
    <div className="container">
      <StarRating />
      <button onClick={toggleDialog}>Open Dialog</button>
      {dialogOpen && <Dialog onClose={toggleDialog} />}
    </div>
  );
};



export default App
