import { Box, IconButton, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <Box 
    sx={{
        typography: 'body1',
      '& > :not(style) + :not(style)': {
        ml: 2,
      },    
    }}
    >
    <NavLink style={{textDecoration: 'none'}} to="/register">
      <IconButton  sx={{color: 'ButtonFace',"&:hover": { color: "lightblue" }}}>
    <Typography >Register</Typography>
    </IconButton>
      </NavLink>
            <NavLink style={{textDecoration: 'none'}} to="/login">
            <IconButton sx={{color: 'ButtonFace',"&:hover": { color: "lightblue" }}}>
    <Typography>Log in</Typography>
  </IconButton>
      </NavLink>
    </Box>
  );
};
