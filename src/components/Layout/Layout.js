import { AppBar } from 'components/AppBar/AppBar';
import { RiGameFill } from 'react-icons/ri';
import css from 'components/Contacts/Contacts.module.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@mui/system';

const Layout = () => {
  return (
    <Container maxWidth="sm">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          height: '100%',
          // color: '#010101',
        }}
      >
        <div
          style={{
            border: '2px solid tomato',
            borderRadius: '5px',
            padding: '20px',
            // backgroundColor: 'yellow',
          }}
        >
          <h1>
            Phonebook{' '}
            <span>
              <RiGameFill
                size={25}
                style={{
                  fill: 'tomato',
                }}
              />
            </span>
          </h1>
          <div className={css.phonebookWrapper}>
            <AppBar />
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
