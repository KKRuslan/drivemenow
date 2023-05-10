import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';



const BookingPage = () => {
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Додатковий код для обробки бронювання
  };

  return (
    <>
      <Typography variant="h4">Бронювання</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          id="start-date"
          label="Дата початку бронювання"
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="start-time"
          label="Час початку бронювання"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 900, // 15 хвилин
          }}
          margin="normal"
        />
        <TextField
          id="end-date"
          label="Дата закінчення бронювання"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
        <TextField
          id="end-time"
          label="Час закінчення бронювання"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            step: 900, // 15 хвилин
          }}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary"component={Link} to="/pay">
          Забронювати
        </Button>
      </form>
    </>
  );
};

export default BookingPage;
