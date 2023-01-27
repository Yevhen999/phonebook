import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign: 'center',
          mt: '75px',
          mb: '35px',
        }}
      >
        <Typography variant="h4" component="h1">
          Welcome to phonebook manager
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <NavLink style={{ textDecoration: 'none' }} to="/login">
          <Button size="large" variant="contained">
            Get Started
          </Button>
        </NavLink>
      </Box>
    </Box>
  );
};

export default Home;
