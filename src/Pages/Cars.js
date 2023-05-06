import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fiesta from '../Images/fiesta.png';
import logan from '../Images/logan.png';
import peugeot from '../Images/peugeot.png';

import { Grid, Card, CardContent, CardMedia, CardActions, Button, Typography, CardActionArea, Tabs, Tab } from '@mui/material';

const cars = [
  {
    id: 1,
    image: fiesta,
    name: 'Ford fiesta',
    description: 'Короткий опис машини 1',
    price: 100,
    category: 'economy'
  },
  {
    id: 2,
    image: logan,
    name: 'Renault logan',
    description: 'Короткий опис машини 2',
    price: 100,
    category: 'economy'
  },
  {
    id: 3,
    image: peugeot,
    name: 'Peugeot 301',
    description: 'Короткий опис машини 2',
    price: 200,
    category: 'economy'
  },
  {
    id: 4,
    image: peugeot,
    name: 'Peugeot 301',
    description: 'Короткий опис машини 2',
    price: 200,
    category: 'comfort'
  },
  {
    id: 5,
    image: peugeot,
    name: 'Peugeot 301',
    description: 'Короткий опис машини 2',
    price: 200,
    category: 'comfort'
  },
  {
    id: 6,
    image: peugeot,
    name: 'Peugeot 301',
    description: 'Короткий опис машини 2',
    price: 200,
    category: 'comfort'
  },
  {
    id: 7,
    image: peugeot,
    name: 'Peugeot 301',
    description: 'Короткий опис машини 2',
    price: 200,
    category: 'vip'
  },
  {
    id: 8,
    image: peugeot,
    name: 'Peugeot 301',
    description: 'Короткий опис машини 2',
    price: 200,
    category: 'vip'
  },
  {
    id: 9,
    image: peugeot,
    name: 'Peugeot 301',
    description: 'Короткий опис машини 2',
    price: 200,
    category: 'vip'
  },
];

function CarCard({ car }) {
  return (
    <Grid item xs={12} md={6}>
    <Card sx={{ maxWidth: 345, background: 'transparent', height: '100%', boxShadow: '2px 2px 6px rgba(0, 0, 0, 0.4)'}}>
      <CardActionArea>
      <CardMedia
  component='img'
  height='100%'
  image={car.image}
  alt={car.name}
  sx={{
    objectFit: 'contain',
    backgroundColor: 'transparent',
    backgroundClip: 'content-box',
    opacity: 0.8,
    '& img': {
      objectFit: 'contain',
      filter: 'brightness(0) invert(1)',
      width: '100%',
      height: '100%',
    },
  }}
/>

        <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="white">
  {car.name}
</Typography>
<Typography variant="body2" color="white">
  {car.description}
</Typography>
<Typography variant="h6" color="primary" sx={{ color: 'white' }}>
  {car.price} грн/день
</Typography>

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary"component={Link} to="/booking">
          Забронювати
        </Button>
      </CardActions>
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
    <div>
     <Tabs
  value={selectedCategory}
  onChange={handleCategoryChange}
  variant="scrollable"
  scrollButtons="auto"
  sx={{ margin: '0 auto' }} // додайте цей рядок
>
  <Tab label="Всі" value="all" />
  <Tab label="Економ" value="economy" />
  <Tab label="Комфорт" value="comfort" />
  <Tab label="VIP" value="vip" />
</Tabs>
      <Grid container spacing={2}>
  {filteredCars.map((car) => (
    <Grid item xs={12} sm={6} md={3} lg={4} key={car.id}>
      <CarCard key={car.id} car={car} />
    </Grid>
  ))}
</Grid>
    </div>
  );
}

export default App;
