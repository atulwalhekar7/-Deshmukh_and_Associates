import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Decline = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/disclaimer'); 
  };

  return (
    <Dialog open={true} onClose={handleClose}>
      <DialogTitle>Access Denied</DialogTitle>
      <DialogContent>
        <p>If you want to visit website please check and accept disclaimer</p>
      </DialogContent>
      <button
        style={{
          padding: "10px",
          cursor: "pointer",
          background: "gold",
          borderRadius: "4px",
          color: "black",
          border: "none"
        }}
        onClick={handleClose}
      >
        Go Back
      </button>
    </Dialog>
  );
};

export default Decline;
