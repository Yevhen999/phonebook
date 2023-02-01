import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="on">
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
        <TextField
          id="outlined-email-input"
          label="Email"
          name="email"
          type="email"
          autoComplete="current-password"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
        <TextField
          id="outlined-password-input"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
        />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: '20px' }}>
        <Button type="submit" variant="outlined" size="large">
          Log In
        </Button>
      </Box>
    </form>
  );
};
