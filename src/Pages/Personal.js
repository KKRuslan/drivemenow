import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button, TextField, Box, Modal, Typography, Grid } from '@mui/material'
import { styled } from '@mui/system'

const Profile = () => {
  const { user } = useAuth0()
  const [newEmail, setNewEmail] = useState(user.email)
  const [newName, setNewName] = useState(user.name)
  const [editMode, setEditMode] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [editedEmail, setEditedEmail] = useState(user.email)
  const [editedName, setEditedName] = useState(user.name)

  const handleEditClick = () => {
    setEditMode(true)
  }

  const handleCancelClick = () => {
    setNewEmail(editedEmail)
    setNewName(editedName)
    setEditMode(false)
  }

  const handleSaveClick = () => {
    setEditedEmail(newEmail)
    setEditedName(newName)
    setEditMode(false)
    setShowModal(true)
  }

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setShowModal(false)
      }, 1500)
    }
  }, [showModal])

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

  const StyledProfileButton = styled(Button)({
    marginTop: '1rem',
  })

  const StyledTextField = styled(TextField)({
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
          <img
            src={user.picture}
            alt={user.name}
            style={{ borderRadius: '50%', width: '150px', height: '150px' }}
          />
        </Grid>
        <Grid item xs={12}>
          {editMode ? (
            <div>
              <StyledTextField
                label="Name"
                value={newName}
                onChange={(event) => setNewName(event.target.value)}
                fullWidth
              />
              <StyledTextField
                label="Email"
                type="email"
                value={newEmail}
                onChange={(event) => setNewEmail(event.target.value)}
                fullWidth
              />
              <StyledProfileButton
                variant="contained"
                onClick={handleSaveClick}
                fullWidth
              >
                Зберегти
              </StyledProfileButton>
              <StyledProfileButton
                variant="outlined"
                onClick={handleCancelClick}
                fullWidth
              >
                Відмінити
              </StyledProfileButton>
            </div>
          ) : (
            <StyledProfileInfo>
              <StyledTypography variant="h4" gutterBottom>
                {newName}
              </StyledTypography>
              <StyledTypography variant="body1" gutterBottom>
                {newEmail}
              </StyledTypography>
              <StyledProfileButton
                variant="contained"
                onClick={handleEditClick}
              >
                Змінити дані
              </StyledProfileButton>
            </StyledProfileInfo>
          )}
        </Grid>
      </Grid>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            background: 'rgb(73, 69, 159)',
          }}
        >
          <Typography variant="h5" gutterBottom>
            Дані успішно змінені!
          </Typography>
        </Box>
      </Modal>
    </StyledProfileWrapper>
  )
}

export default Profile
