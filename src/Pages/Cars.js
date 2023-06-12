import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fiesta from '../Images/fiesta.png';
import logan from '../Images/logan.png';
import peugeot from '../Images/peugeot.png';
import kia from '../Images/kia.png';
import corolla from '../Images/corolla.png';
import hyundai from '../Images/hyundai.png';
import X5M from '../Images/X5M.png';
import q7 from '../Images/q7.png';
import prado from '../Images/prado.png';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import DriveEtaIcon from '@mui/icons-material/DriveEta';



import { Grid, Card, CardContent, CardMedia, CardActions, Button, Typography, CardActionArea, Tabs, Tab } from '@mui/material';

export const cars = [
  {
    id: 1,
    image: fiesta,
    name: 'Ford fiesta',
    price: 30,
    category: 'economy',
    fuelType: 'Бензин',
    transmissionType: 'Механічна',
    engineCapacity: '1.2 л',
    numberOfSeats: '5',
  },
  {
    id: 2,
    image: logan,
    name: 'Renault logan',
    price: 30,
    category: 'economy',
    fuelType: 'Бензин',
    transmissionType: 'Механічна',
    engineCapacity: '1.6 л',
    numberOfSeats: '5',
  },
  {
    id: 3,
    image: peugeot,
    name: 'Peugeot 301',
    price: 33,
    category: 'economy',
    fuelType: 'Бензин',
    transmissionType: 'Автоматична',
    engineCapacity: '1.2 л',
    numberOfSeats: '5',
  },
  {
    id: 4,
    image: kia,
    name: 'Kia Ceed 2022',
    price: 40,
    category: 'comfort',
    fuelType: 'Дизель',
    transmissionType: 'Автоматична',
    engineCapacity: '1.6 л',
    numberOfSeats: '5',
  },
  {
    id: 5,
    image: corolla,
    name: 'Toyota Corolla',
    price: 42,
    category: 'comfort',
    fuelType: 'Гібрид',
    transmissionType: 'Автоматична',
    engineCapacity: '1.8 л',
    numberOfSeats: '5',
  },
  {
    id: 6,
    image: hyundai,
    name: 'Hyundai Elantra',
    price: 45,
    category: 'comfort',
    fuelType: 'Бензин',
    transmissionType: 'Автоматична',
    engineCapacity: '2.0 л',
    numberOfSeats: '5',
  },
  {
    id: 7,
    image: X5M,
    name: 'BMW X5M',
    price: 180,
    category: '4x4',
    fuelType: 'Бензин',
    transmissionType: 'Автоматична',
    engineCapacity: '4.4 л',
    numberOfSeats: '5',
  },
  {
    id: 8,
    image: prado,
    name: 'Land Cruiser Prado',
    price: 150,
    category: '4x4',
    fuelType: 'Дизель',
    transmissionType: 'Автоматична',
    engineCapacity: '3.0 л',
    numberOfSeats: '7',
  },
  {
    id: 9,
    image: q7,
    name: 'Audi Q7',
    price: 130,
    category: '4x4',
    fuelType: 'Дизель',
    transmissionType: 'Автоматична',
    engineCapacity: '3.0 л',
    numberOfSeats: '7',
  },
];

function CarCard({ car }) {
  
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: '100%', background: 'transparent', boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)', color: 'white', height: '100%' }}>
        <CardActionArea sx={{ height: '100%' }}>
          <CardMedia
            component='img'
            height='200'
            image={car.image}
            alt={car.name}
            sx={{
              objectFit: 'contain',
            }}
          />

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography gutterBottom variant="h5" component="div" color="white">
              {car.name}
            </Typography>
            <Typography variant="h6" color="primary" sx={{ color: 'white', ml: 1 }}>
              {car.price}$ /день
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
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
            <Button size="small" variant="contained" color="primary" component={Link} to="/booking">
              Забронювати
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  const filteredCars = selectedCategory === 'all' ? cars : cars.filter(car => car.category === selectedCategory);

  return (
    <div style={{ minHeight: '100vh'}}>
      <Tabs value={selectedCategory} onChange={handleCategoryChange} sx={{ marginLeft: '32%' }}>
        <Tab label="Всі" value="all" />
        <Tab label="Економ" value="economy" />
        <Tab label="Комфорт" value="comfort" />
        <Tab label="4Х4 Преміум" value="4x4" />
      </Tabs>
      <Grid container spacing={2}>
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Grid>
    </div>
  );
}

export default App;