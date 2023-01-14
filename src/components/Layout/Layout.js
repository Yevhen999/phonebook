import { AppBarr } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/system';

const Layout = () => {
  return (
    <Container maxWidth="sm">
      <AppBarr />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;
