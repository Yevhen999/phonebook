import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <IconButton
        aria-label="delete"
        size="small"
        onClick={() => dispatch(logOut())}
      >
        <LogoutIcon fontSize="inherit" />
      </IconButton>
    </div>
  );
};
