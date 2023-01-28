import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
          id="outlined-username-input"
          label="Username"
          name="name"
          type="text"
          autoComplete="current-password"
        />
      </Box>
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
          Register
        </Button>
      </Box>
    </form>
  );
};
