import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box, Grid } from '@mui/material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/Carousel.css';

const BookingPage = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Додатковий код для обробки бронювання
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box minHeight="100vh" display="flex" alignItems="center" justifyContent="center" bgcolor="transparent">
        <Box p={4} boxShadow={3} borderRadius={4} bgcolor="rgba(255, 255, 255, 0.3)" color='white'>
          <Typography variant="h4" align="center" mb={4}>
            Бронювання
          </Typography>
          <form onSubmit={handleSubmit} className="form-container">
            <div className="date-picker-container">
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                placeholderText="Дата початку бронювання"
                className="form-control"
                required
                showTimeSelect
              />
               <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                placeholderText="Дата закінчення бронювання"
                className="form-control"
                required
                showTimeSelect
              />
            </div>
            <Button type="submit" variant="contained" color="primary" component={Link} to="/pay" fullWidth>
              Забронювати
            </Button>
          </form>
        </Box>
      </Box>
    </Grid>
  );
};

export default BookingPage;
