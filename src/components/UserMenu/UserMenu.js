import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Box, IconButton, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <Typography sx={{ fontWeight: '700px' }}>Welcome, {user.name}</Typography>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon fontSize="inherit" />
      </IconButton>
    </Box>
  );
};
