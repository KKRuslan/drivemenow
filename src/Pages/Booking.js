import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import HdrAutoIcon from '@mui/icons-material/HdrAuto'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import '../Styles/Carousel.css'

const BookingPage = () => {
  const { carId } = useParams()
  const [carData, setCarData] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [priceEnd, setPriceEnd] = useState(null)
  const [showPayPalButton, setShowPayPalButton] = useState(false)
  const [isBookingComplete, setIsBookingComplete] = useState(false)

  useEffect(() => {
    axios
      .get(
        `https://sleepy-refuge-68800-f35e693283d5.herokuapp.com/api/cars/${carId}`
      )
      .then((response) => {
        setCarData(response.data)
      })
      .catch((error) => {
        console.error('Помилка при отриманні даних про автомобіль:', error)
      })
  }, [carId])

  useEffect(() => {
    if (startDate && endDate) {
      const halfHours = Math.ceil((endDate - startDate) / (1000 * 60 * 30)) // Кількість півгодин між обраними датами
      const newPrice = carData.price ? (carData.price * halfHours) / 48 : 0
      setPriceEnd(newPrice.toFixed(2))
    }
  }, [startDate, endDate, carData])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleBookNow = () => {
    setShowPayPalButton(true)
  }

  if (!carData) {
    return <div>Loading...</div>
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgcolor="transparent"
      >
        <Card
          sx={{
            maxWidth: '100%',
            background: 'transparent',
            boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)',
            height: '100%',
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={`/Images/${carData.image}`}
            alt={carData.name}
            sx={{
              objectFit: 'contain',
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="white"
              align="center"
              mb={2}
            >
              {carData.name}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              align="center"
              mb={2}
              sx={{ color: 'white', ml: 1 }}
            >
              {carData.price}$ /день
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mb={2}
            >
              <Typography color="white" align="center" mr={1}>
                <LocalGasStationIcon sx={{ fontSize: '1rem', mr: 1 }} />
                {carData.fuelType}
              </Typography>
              <Typography color="white" align="center" mr={1}>
                <HdrAutoIcon sx={{ fontSize: '1rem', mr: 1 }} />
                {carData.transmissionType}
              </Typography>
              <Typography color="white" align="center" mr={1}>
                <PeopleAltIcon sx={{ fontSize: '1rem', mr: 1 }} />
                {carData.numberOfSeats}
              </Typography>
              <Typography color="white" align="center">
                <DriveEtaIcon sx={{ fontSize: '1rem', mr: 1 }} />
                {carData.engineCapacity}
              </Typography>
            </Box>
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
              <Typography variant="h6" color="white" align="center" mt={2}>
                До оплати: {priceEnd}$
              </Typography>
              {isBookingComplete ? (
                <div className="modal">
                  <div className="modal-content">
                    <h2>Ви успішно забронювали автомобіль</h2>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      onClick={() => setIsBookingComplete(false)}
                    >
                      Закрити
                    </Button>
                  </div>
                </div>
              ) : showPayPalButton ? (
                <PayPalScriptProvider
                  options={{
                    'client-id':
                      'ATm-1JrVHJKx1v86PIbVhQgPROyahGLdnsoegts9YliSO0oD0Vzxc9S78YMwnR8v9Fj5m5NsWq2TpXlF',
                  }}
                >
                  <PayPalButtons
                    createOrder={(data, actions) => {
                      return actions.order.create({
                        purchase_units: [
                          {
                            amount: {
                              currency_code: 'USD',
                              value: priceEnd,
                            },
                          },
                        ],
                      })
                    }}
                    onApprove={(data, actions) => {
                      console.log('Payment approved:', data)
                      setIsBookingComplete(true)
                    }}
                  />
                </PayPalScriptProvider>
              ) : (
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={handleBookNow}
                >
                  Забронювати
                </Button>
              )}
            </form>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  )
}

export default BookingPage
