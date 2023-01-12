import css from './Contacts.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/operations';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactName}>
        📞{name}: {number}
        <button className={css.btnDelete} onClick={handleDelete}>
          Delete
        </button>
      </p>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
