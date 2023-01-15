import { ContactItem } from '../ContactsItem/ContactsItem';
import PropTypes from 'prop-types';
import { List } from '@mui/material';

const ContactsList = ({ items }) => {
  return (
    <List>
      {items.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
