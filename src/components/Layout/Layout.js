import { AppBar } from 'components/AppBar/AppBar';
import { RiGameFill } from 'react-icons/ri';
import css from 'components/Contacts/Contacts.module.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        color: '#010101',
      }}
    >
      <div
        style={{
          border: '2px solid tomato',
          borderRadius: '5px',
          padding: '20px',
          backgroundColor: 'yellow',
        }}
      >
        <div className={css.phonebookWrapper}>
          <AppBar />
          <RiGameFill
            size={25}
            style={{
              fill: 'tomato',
            }}
          />
          <h1>Phonebook</h1>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
