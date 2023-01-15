import * as React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { AppBar, Container, Toolbar } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';

export const AppNav = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImportContactsIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
