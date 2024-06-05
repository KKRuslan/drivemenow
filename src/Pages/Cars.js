import React, { useState, useEffect } from 'react'
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Typography,
  CardActionArea,
  Tabs,
  Tab,
} from '@mui/material'
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation'
import HdrAutoIcon from '@mui/icons-material/HdrAuto'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import DriveEtaIcon from '@mui/icons-material/DriveEta'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CarCard({ car }) {
  const navigate = useNavigate()

  const handleBookingClick = () => {
    navigate(`/booking/${car.id}`, { state: { carData: car } })
  }

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          maxWidth: '100%',
          background: 'transparent',
          boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)',
          color: 'white',
          height: '100%',
        }}
      >
        <CardActionArea sx={{ height: '100%' }}>
          <CardMedia
            component="img"
            height="200"
            image={`/Images/${car.image}`}
            alt={car.name}
            sx={{
              objectFit: 'contain',
            }}
          />

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div" color="white">
              {car.name}
            </Typography>
            <Typography
              variant="h6"
              color="primary"
              sx={{ color: 'white', ml: 1 }}
            >
              {car.price}$ /день
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', mt: 2 }}
            >
              <LocalGasStationIcon sx={{ fontSize: '1rem', mr: 1 }} />
              {car.fuelType}
              <HdrAutoIcon sx={{ fontSize: '1rem', ml: 1, mr: 1 }} />
              {car.transmissionType}
              <PeopleAltIcon sx={{ fontSize: '1rem', ml: 1, mr: 1 }} />
              {car.numberOfSeats} місць
              <DriveEtaIcon sx={{ fontSize: '1rem', ml: 1, mr: 1 }} />
              {car.engineCapacity}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              onClick={handleBookingClick}
            >
              Забронювати
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  )
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cars, setCars] = useState([])

  useEffect(() => {
    // Виконати запит до сервера для отримання списку автомобілів
    axios
      .get('https://sleepy-refuge-68800-f35e693283d5.herokuapp.com/api/cars/') // Змінено URL запиту
      .then((response) => {
        setCars(response.data)
      })
      .catch((error) => {
        console.error('Помилка при отриманні списку автомобілів:', error)
      })
  }, [])

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue)
  }

  const filteredCars =
    selectedCategory === 'all'
      ? cars
      : cars.filter((car) => car.category === selectedCategory)

  return (
    <div style={{ minHeight: '100vh' }}>
      <Tabs
        value={selectedCategory}
        onChange={handleCategoryChange}
        sx={{ marginLeft: '32%' }}
      >
        <Tab label="Всі" value="all" />
        <Tab label="Економ" value="economy" />
        <Tab label="Комфорт" value="comfort" />
        <Tab label="4Х4 Преміум" value="4x4" />
      </Tabs>
      <Grid container spacing={2}>
        {filteredCars.map((car) => (
          <CarCard key={car.carId} car={car} />
        ))}
      </Grid>
    </div>
  )
}

export default App
