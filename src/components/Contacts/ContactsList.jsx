import { ContactItem } from './ContactsItem';
import PropTypes from 'prop-types';

const ContactsList = ({ items }) => {
  return (
    <ul>
      {items.map(({ id, name, phone, createdAt }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
    })
  ),
};
