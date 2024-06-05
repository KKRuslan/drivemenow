import { useAuth0 } from '@auth0/auth0-react'
import { Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'

const Profile = () => {
  const { user } = useAuth0()

  const StyledProfileWrapper = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '250px',
    borderRadius: '8px',
    padding: '2rem',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.6)',
    maxWidth: '400px',
    margin: '0 auto',
  })

  const StyledProfileInfo = styled('div')({
    textAlign: 'center',
    marginBottom: '1rem',
  })

  const StyledTypography = styled(Typography)({
    marginBottom: '0.5rem',
    fontWeight: 'bold',
  })

  return (
    <StyledProfileWrapper sx={{ minHeight: '80vh' }}>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid item xs={12} textAlign="center">
          {user ? (
            <StyledProfileInfo>
              <img
                src={user.picture}
                alt=""
                style={{ borderRadius: '50%', width: '150px', height: '150px' }}
              />
              <StyledTypography>{user.name}</StyledTypography>
            </StyledProfileInfo>
          ) : (
            <></>
          )}
        </Grid>
      </Grid>
    </StyledProfileWrapper>
  )
}

export default Profile
