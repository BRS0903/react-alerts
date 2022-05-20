import React from 'react';
import { Alert, AlertTitle, Link } from '@mui/material';

const AlertComponent = ({
  text,
  title,
  alertType = 'success',
  link,
}) => {
  return link ? (
    <Link href={link} underline='none' target={'_blank'}>
      <Alert severity={alertType} color={alertType}>
        {title && <AlertTitle>{title}</AlertTitle>}
        {text}
      </Alert>
    </Link>
  ) : (
    <Alert severity={alertType} color={alertType}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {text}
    </Alert>
  );
};

export default AlertComponent;
