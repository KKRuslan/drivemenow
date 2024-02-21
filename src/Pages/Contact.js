import React, { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { TextField, Button, Grid, Typography } from '@mui/material'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'
import GradeSharpIcon from '@mui/icons-material/GradeSharp'
import HandshakeIcon from '@mui/icons-material/Handshake'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
    contrastThreshold: 3,
    tonalOffset: 0.3,
  },
})

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    marginTop: 100,
    marginLeft: 250,
    marginBottom: 200,
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 200,
    paddingTop: 100,
    '& > *': {
      marginTop: 20,
    },
  },
  icon: {
    fontSize: 60,
    marginRight: 10,
    verticalAlign: 'middle',
  },
  title: {
    display: 'inline-block',
    fontWeight: 'bold',
    fontSize: '1.8rem',
    marginLeft: 10,
    marginBottom: 20,
  },
  contact: {
    fontSize: '1.3rem',
    marginLeft: 10,
  },
})

const ContactForm = () => {
  const [data, setData] = useState({
    name: '',
    phone: '',
    topic: '',
    question: '',
  })
  const classes = useStyles()

  const handleSubmit = (event) => {
    event.preventDefault()
    alert(JSON.stringify(data))
  }
  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value })
  }

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <ThemeProvider theme={theme}>
          <TextField
            label="Ім'я"
            required
            value={data.name}
            onChange={(e) => handleInputChange(e, 'name')}
            style={{ marginBottom: '40px' }}
          />
          <TextField
            label="Номер телефона"
            required
            value={data.phone}
            onChange={(e) => handleInputChange(e, 'phone')}
            style={{ marginBottom: '40px' }}
          />
          <TextField
            label="Тема питання"
            required
            value={data.topic}
            onChange={(e) => handleInputChange(e, 'topic')}
            style={{ marginBottom: '40px' }}
          />
          <TextField
            label="Ваше питання"
            required
            multiline
            rows={4}
            value={data.question}
            onChange={(e) => handleInputChange(e, 'question')}
            style={{ marginBottom: '40px' }}
          />
          <Button type="submit" variant="contained" color="primary">
            Відправити
          </Button>
        </ThemeProvider>
      </form>
    </>
  )
}

const LeftColumn = () => {
  const classes = useStyles()
  return (
    <div className={classes.leftColumn}>
      <div>
        <HeadsetMicIcon className={classes.icon} />
        <Typography variant="h3" className={classes.title}>
          Клієнтська підтримка 24/7
        </Typography>
        <div className={classes.contact}>
          <p>+38(099) 999-9-999</p>
          <p>drivemenow@gmail.com</p>
        </div>
      </div>
      <div>
        <GradeSharpIcon className={classes.icon} />
        <Typography variant="h3" className={classes.title}>
          Рекламні та інші пропозиції:
        </Typography>
        <div className={classes.contact}>
          <p>drivemenow@gmail.com</p>
        </div>
      </div>
      <div>
        <HandshakeIcon className={classes.icon} />
        <Typography variant="h3" className={classes.title}>
          Співпраця та інвестування:
        </Typography>
        <div className={classes.contact}>
          <p>drivemenow@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

const ContactPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <LeftColumn />
      </Grid>
      <Grid item xs={12} md={6}>
        <div>
          <ContactForm />
        </div>
      </Grid>
    </Grid>
  )
}

export default ContactPage
