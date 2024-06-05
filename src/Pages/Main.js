import React from 'react'
import Slider from 'react-slick'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Image from '../Images/drivemenow.png'
import fiesta from '../Images/fiesta.png'
import logan from '../Images/logan.png'
import peugeot from '../Images/peugeot.png'
import kia from '../Images/kia.png'
import corolla from '../Images/corolla.png'
import skoda from '../Images/skoda.png'
import X5M from '../Images/X5M.png'
import q7 from '../Images/q7.png'
import prado from '../Images/prado.png'
import '../Styles/Carousel.css'
import Grid from '@mui/material/Grid'
import { useAuth0 } from '@auth0/auth0-react'

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: `url(${Image})`,
  position: 'relative',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#FFFFFF',
  height: '740px',
  opacity: 0.9,
}

const textStyle = {
  fontSize: '62px',
  textAlign: 'center',
  lineHeight: '1.5em',
  marginBottom: '150px',
  textShadow: '3px 3px 5px rgba(0, 0, 0, 0.5)',
}

const styles = {
  container: {
    backgroundColor: '#33343f',
    padding: '50px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: '20px',
    marginBottom: '30px',
  },
  content: {
    marginLeft: '260px',
    fontSize: '18px',
    color: '#FFFFFF',
    width: '65%',
  },
}

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 2000,
  cssEase: 'linear',
}

function Container() {
  const { user } = useAuth0()
  localStorage.setItem('user', JSON.stringify(user))
  return (
    <Grid>
      <Grid item xs={12} md={6}>
        <Box sx={containerStyles}>
          <Typography sx={textStyle}>
            <h2>DRIVEMENOW: РАДІ ВАМ ЗАВЖДИ</h2>
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={styles.container}>
          <Typography sx={styles.heading}>DRIVEMENOW</Typography>
          <Typography sx={styles.content}>
            З 2023 року наша Компанія з оренди автомобілів є синонімом
            професіоналізму, відмінного обслуговування та розумних цін.
            <br />
            <span style={{ display: 'block', marginTop: '30px' }}>
              Співробітники компанії «DriveMeNow» поділяють думку про те, що,
              пропонуючи в оренду найякісніші та найдоступніші транспортні
              засоби, ми можемо змінити життя людей на краще. Якщо вам потрібна
              допомога з плануванням важливої поїздки, або просто потрібна
              порада щодо вибору автомобіля для вирішення конкретного завдання,
              заходьте до одного з наших офісів.
            </span>
          </Typography>
        </Box>
      </Grid>
      <Grid id="slider-container">
        <Slider {...settings}>
          <div className="imga">
            <img src={fiesta} alt="" />
          </div>
          <div className="imga">
            <img src={logan} alt="" />
          </div>
          <div className="imga">
            <img src={peugeot} alt="" />
          </div>
          <div className="imga">
            <img src={kia} alt="" />
          </div>
          <div className="imga">
            <img src={corolla} alt="" />
          </div>
          <div className="imga">
            <img src={skoda} alt="" />
          </div>
          <div className="imga">
            <img src={X5M} alt="" />
          </div>
          <div className="imga">
            <img src={q7} alt="" />
          </div>
          <div className="imga">
            <img src={prado} alt="" />
          </div>
        </Slider>
      </Grid>
    </Grid>
  )
}

export default Container
