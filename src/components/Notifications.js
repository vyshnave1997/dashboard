import React from "react";
import { Snackbar, Alert } from "@mui/material";

const Notifications = ({ open, handleClose, message, severity }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Notifications;
