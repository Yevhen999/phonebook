import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
// import css from './AppBar.module.css';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
// import { RiGameFill } from 'react-icons/ri';

export const AppBarr = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <ImportContactsIcon
            sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Phonebook
          </Typography>
          {/* <header className={css.header}> */}
          {/* <h1> */}
          {/* Phonebook{' '} */}
          {/* <span>
              <RiGameFill
                size={25}
                style={{
                  fill: 'tomato',
                }}
              />
            </span> */}
          {/* </h1> */}
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          {/* </header> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
