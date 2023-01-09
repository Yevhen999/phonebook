import { nanoid } from 'nanoid';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { GiRotaryPhone } from 'react-icons/gi';
import { HiUserCircle, HiUserAdd } from 'react-icons/hi';
import css from './Contacts.module.css';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice/operations';
import { selectContacts } from 'redux/selectors';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Too short').required('❌'),
  phone: yup.string().length(9, 'Format: xxx-xx-xx').required('❌'),
});

export const FormData = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);

  const nameInputId = nanoid(5);
  const numberInputId = nanoid(5);

  const initialValues = {
    name: '',
    phone: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    for (const contact of contacts) {
      if (contact.name.toLowerCase() === values.name.toLowerCase()) {
        alert(`${values.name} is already in contacts`);
        return;
      }
    }
    dispatch(addContact(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <Form>
        <div className={css.labelWrapper}>
          <HiUserCircle className={css.formIcon} />
          <label className={css.formLabel} htmlFor={nameInputId}>
            Name
          </label>
        </div>
        <Field
          className={css.formInputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nameInputId}
          placeholder="John Doe"
        />
        <ErrorMessage name="name" />
        <div className={css.labelWrapper}>
          <GiRotaryPhone className={css.formIcon} />
          <label className={css.formLabel} htmlFor={numberInputId}>
            Number
          </label>
        </div>
        <Field
          className={css.formInput}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={numberInputId}
          placeholder="xxx-xx-xx"
        />
        <ErrorMessage name="number" />
        <button className={css.btnSubmit} type="submit">
          <HiUserAdd size={11} />
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
