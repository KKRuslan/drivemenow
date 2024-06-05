import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: '#33343f',
        py: 6,
        color: 'white',
        position: 'absolute',
        width: '100%',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ xs: 'center', md: 'flex-start' }}
          spacing={{ xs: 3, md: 6 }}
        >
          <Box>
            <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
              DriveMeNow
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: 400 }}>
              Звільніть свій час та зручність з DriveMeNow - найкращою послугою
              каршерингу для вас та вашої родини. Наша мета забезпечити надійну
              та зручну транспортну послугу, яка допоможе вам досягти вашої мети
              зі швидкістю та комфортом.
            </Typography>
          </Box>
          <Box>
            <Stack spacing={1.5}>
              <Link href="/" color="inherit">
                Головна
              </Link>
              <Link href="/contact" color="inherit">
                Зв'язатися з нами
              </Link>
              <Link href="/cars" color="inherit">
                Наші автомобілі
              </Link>
            </Stack>
          </Box>
          <Box>
            <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
              <IconButton
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                color="inherit"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                color="inherit"
              >
                <InstagramIcon />
              </IconButton>
            </Stack>
            <Typography variant="body2" color="white">
              &copy; {new Date().getFullYear()} DRIVEMENOW
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
export default Footer
