import React, { useState } from 'react';
import { TextField, Select, MenuItem, Button, Grid } from '@mui/material';
import { ADD_ALERT, REMOVE_ALERT } from '../AlertReducer';

const AlertsExample = ({ alertsDispatch }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const [alertType, setType] = useState('error');
  const [timeLimit, setTimeLimit] = useState(10);
  const [link, setLink] = useState('');
  const handleAlertText = (e) => setText(e.target.value);
  const handleAlertTitle = (e) => setTitle(e.target.value);
  const handleTimeLimit = (e) => setTimeLimit(e.target.value);
  const handleAlertType = (e) => setType(e.target.value);
  const handleLink = (e) => setLink(e.target.value);
 const getId = () =>
   `alert-${Math.round(Math.random() * 100 * Math.random() * 100)}`;
   const alertId= getId()
  const handleSubmit = (e) => {
    e.preventDefault();
   if(text !== '') {
        alertsDispatch({
          type: ADD_ALERT,
          payload: {
            text,
            title,
            alertType,
            timeLimit,
            link,
            id:alertId,
          },
        });
        setText('')
        setTitle('')
        setType('error')
        setTimeLimit(10)
        setLink('')
        setTimeout(()=> {
            alertsDispatch({ type: REMOVE_ALERT, payload: { id: alertId } });
        },timeLimit * 1000)
   }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} padding={5}>
        <Grid item xs={6}>
          <TextField
            id='alert-text'
            name='alert-text'
            label='Alert Text'
            type='text'
            value={text}
            onChange={handleAlertText}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='alert-title'
            name='alert-title'
            label='Alert Title'
            type='text'
            fullWidth
            value={title}
            onChange={handleAlertTitle}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='time-limit'
            name='time-limit'
            label='Time Limit'
            type='number'
            fullWidth
            value={timeLimit}
            onChange={handleTimeLimit}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id='alert-link'
            name='alert-link'
            label='Link'
            type='text'
            fullWidth
            value={link}
            onChange={handleLink}
          />
        </Grid>
        <Grid item xs={12}>
          <Select
            name='alert-type'
            fullWidth
            value={alertType}
            onChange={handleAlertType}
          >
            <MenuItem key='error' value='error'>
              Error
            </MenuItem>
            <MenuItem key='info' value='info'>
              Info
            </MenuItem>
            <MenuItem key='success' value='success'>
              Success
            </MenuItem>
            <MenuItem key='warning' value='warning'>
              Warning
            </MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <Button type='submit' variant='contained'>
            Add
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AlertsExample;
