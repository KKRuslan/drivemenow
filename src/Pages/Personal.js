import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, TextField, Box } from "@mui/material";

const Profile = () => {
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [newEmail, setNewEmail] = useState(user.email);
  const [newName, setNewName] = useState(user.name);
  const [newPhoneNumber, setNewPhoneNumber] = useState(user.phoneNumber);
  const [editMode, setEditMode] = useState(false);

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleCancelClick = () => {
    setEditMode(false);
  };

  const handleSaveClick = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch('/api/update-profile', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: newEmail,
          name: newName,
          phoneNumber: newPhoneNumber,
        }),
      });
      if (response.ok) {
        setEditMode(false);
      } else {
        console.error('Failed to update profile:', response);
      }
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      
      <Box minHeight="100vh">
        <img src={user.picture} alt={user.name} />
        {editMode ? (
          <div>
            <TextField 
              label="Name"
              value={newName}
              onChange={(event) => setNewName(event.target.value)}
            />
            <TextField 
              label="Email"
              type="email"
              value={newEmail}
              onChange={(event) => setNewEmail(event.target.value)}
            />
            <TextField 
              label="Phone Number"
              value={newPhoneNumber}
              onChange={(event) => setNewPhoneNumber(event.target.value)}
            />
            <input type="file" />
            <Button variant="contained" onClick={handleSaveClick}>Save</Button>
            <Button variant="contained" onClick={handleCancelClick}>Cancel</Button>
          </div>
        ) : (
          <div>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <button type="button" onClick={handleEditClick}>Edit</button>
          </div>
        )}
      </Box>
    )
  );
};

export default Profile;
