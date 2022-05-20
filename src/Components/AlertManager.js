import React from 'react';
import { Grid } from '@mui/material';
import AlertComponent from './AlertComponent';
const AlertManager = ({ alerts }) => {
  const alertsList = alerts.map(
    ({ title, text, timeLimit, link, alertType, id }) => (
      <Grid item xs={12} key={id}>
        <AlertComponent
          title={title}
          text={text}
          link={link}
          timeLimit={timeLimit}
          alertType={alertType}
        />
      </Grid>
    )
  );
  return (
    <Grid container spacing={2} padding={5}>
      {alertsList}
    </Grid>
  );
};

export default AlertManager;
