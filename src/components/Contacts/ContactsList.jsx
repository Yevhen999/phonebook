import { ContactItem } from './ContactsItem';
import PropTypes from 'prop-types';

const ContactsList = ({ items }) => {
  // console.log(items);
  return (
    <ul>
      {items.map(({ id, text }) => (
        <ContactItem key={id} id={id} name={text.name} number={text.number} />
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  // items: PropTypes.arrayOf(
  //   PropTypes.exact({
  //     id: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired,
  //     number: PropTypes.string.isRequired,
  //   })
  // ),
  // deleteContact: PropTypes.func.isRequired,
};
