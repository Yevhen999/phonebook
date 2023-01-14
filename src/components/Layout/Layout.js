import { AppBarr } from 'components/AppBar/AppBar';
// import { RiGameFill } from 'react-icons/ri';
import css from 'components/Contacts/Contacts.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/system';

const Layout = () => {
  return (
    <Container maxWidth="sm">
      <div>
        <div
          style={{
            border: '2px solid tomato',
            borderRadius: '5px',
            padding: '20px',
            // backgroundColor: 'yellow',
          }}
        >
          <div className={css.phonebookWrapper}>
            <AppBarr />
          </div>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </Container>
  );
};

export default Layout;
