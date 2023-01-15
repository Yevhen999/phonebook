import { AppNav } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/system';

const Layout = () => {
  return (
    <Container maxWidth="sm">
      <AppNav />
      <Suspense fallback={null}>
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Suspense>
    </Container>
  );
};

export default Layout;
