import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { IconButton, Typography } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <NavLink style={{ textDecoration: 'none' }} to="/">
        <IconButton
          sx={{
            color: 'ButtonFace',
            '&:hover': { color: 'lightblue' },
            mr: '10px',
          }}
        >
          <Typography>Home</Typography>
        </IconButton>
      </NavLink>
      {isLoggedIn && (
        <NavLink style={{ textDecoration: 'none' }} to="/contacts">
          <IconButton
            sx={{ color: 'ButtonFace', '&:hover': { color: 'lightblue' } }}
          >
            <Typography>Contacts</Typography>
          </IconButton>
        </NavLink>
      )}
    </>
  );
};
