const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());

// Налаштування підключення до бази даних MySQL
const connection = mysql.createConnection({
  host: '127.0.0.1', 
  user: 'root', 
  password: '7845120', 
  database: 'cars_database' 
});

// Підключення до бази даних MySQL
connection.connect((error) => {
  if (error) {
    console.error('Помилка підключення до бази даних:', error);
  } else {
    console.log('Підключено до бази даних MySQL');
  }
});

// Маршрут для отримання списку автомобілів
app.get('/api/cars', (req, res) => {
  const query = 'SELECT * FROM cars'; 

  // Виконання запиту до бази даних
  connection.query(query, (error, results) => {
    if (error) {
      console.error('Помилка при вибірці даних:', error);
      res.status(500).json({ error: 'Помилка сервера' });
    } else {
      res.json(results);
    }
  });
});

// Маршрут для отримання інформації про конкретний автомобіль
app.get('/api/cars/:carId', (req, res) => {
  const carId = req.params.carId;
  const query = 'SELECT * FROM cars WHERE id = ?'; 

  // Виконання запиту до бази даних з параметром carId
  connection.query(query, [carId], (error, results) => {
    if (error) {
      console.error('Помилка при вибірці даних:', error);
      res.status(500).json({ error: 'Помилка сервера' });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: 'Автомобіль не знайдено' });
      } else {
        res.json(results[0]);
      }
    }
  });
});


// Запуск сервера
app.listen(3001, () => {
  console.log('Сервер запущено на порту 3001');
});
