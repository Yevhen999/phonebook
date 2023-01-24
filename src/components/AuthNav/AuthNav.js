import { Box, IconButton, Typography } from '@mui/material';
import { AuthLink } from './AuthNav.styled';

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
    <AuthLink to="/register">
      <IconButton  sx={{color: 'ButtonFace',"&:hover": { color: "black" }}}>
    <Typography >Register</Typography>
    </IconButton>
      </AuthLink>
            <AuthLink to="/login">
            <IconButton sx={{color: 'ButtonFace'}}>
    <Typography>Log in</Typography>
  </IconButton>
      </AuthLink>
    </Box>
  );
};
