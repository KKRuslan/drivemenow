import React, { useState } from 'react';
import { makeStyles} from '@mui/styles';
import { TextField, Button, Grid, Typography } from '@mui/material';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import GradeSharpIcon from '@mui/icons-material/GradeSharp';
import HandshakeIcon from '@mui/icons-material/Handshake';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ffffff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // Provide every color token (light, main, dark, and contrastText) when using
    // custom colors for props in Material UI's components.
    // Then you will be able to use it like this: `<Button color="custom">`
    // (For TypeScript, you need to add module augmentation for the `custom` value)
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.3,
  },
});

const useStyles = makeStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 400,
    marginTop: 100,
    marginLeft: 250,
    marginBottom: 200,
  },
});

const ContactForm = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <ThemeProvider theme={theme}>
      <TextField 
        label="Ім'я"
        required
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{ marginBottom: '40px' }}
      />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
      <TextField
        label="Номер телефона"
        type="tel"
        required
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
        style={{ marginBottom: '40px' }}
      />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
      <TextField
        label="Тема питання"
        required
        value={topic}
        onChange={(event) => setTopic(event.target.value)}
        style={{ marginBottom: '40px' }}
      />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
      <TextField 
        label="Ваше питання"
        required
        multiline
        rows={4}
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        style={{ marginBottom: '40px' }}
      />
      </ThemeProvider>
      <ThemeProvider theme={theme}>
       <Button type="submit" variant="contained" color="primary">
        Отправить
      </Button>
      </ThemeProvider>
    </form>
  );
};



const ContactPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <div>
          <HeadsetMicIcon ></HeadsetMicIcon>
          <Typography variant='h3'  mt={2} ml={15} fontSize='rem'>Клієнтська підтримка 24/7</Typography>
          <p>+38(097) 444-5-222</p>
          <p>customerservice@getmancar.com.ua</p>
          <GradeSharpIcon></GradeSharpIcon>
          <Typography variant='h3'  mt={2} ml={15} fontSize='rem'>Рекламні та інші пропозиції:</Typography>
          <p>reklama@getmancar.com.ua</p>
          <HandshakeIcon ></HandshakeIcon>
          <Typography variant='h3'  mt={2} ml={15} fontSize='rem'>Співпраця та інвестування:</Typography>
          <p>together@getmancar.com.ua</p>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div>
          <ContactForm />
        </div>
      </Grid>
    </Grid>
  );
};

export default ContactPage;
