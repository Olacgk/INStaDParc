import React, { useState } from 'react'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function AlertComponent({ severity, alertTitle, alertMessage }) {
    const [showAlert, setShowAlert] = useState(false);
  return (
    <Alert severity={severity} onClose={() => setShowAlert(false)}>
        <AlertTitle>{alertTitle}</AlertTitle>
        {alertMessage}
    </Alert>
  )
}
