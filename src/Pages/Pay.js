import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { Container, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '100vh',
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    marginTop: '25vh',
  },
}))

export default function App() {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        className={classes.content}
      >
        <Grid item xs={12} sm={8} md={6}>
          <PayPalScriptProvider
            options={{
              'client-id':
                'ATm-1JrVHJKx1v86PIbVhQgPROyahGLdnsoegts9YliSO0oD0Vzxc9S78YMwnR8v9Fj5m5NsWq2TpXlF',
            }}
          >
            <PayPalButtons />
          </PayPalScriptProvider>
        </Grid>
      </Grid>
    </Container>
  )
}
