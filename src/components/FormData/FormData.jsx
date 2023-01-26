import * as React from 'react';
import { useFormik } from 'formik';
// import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice/operations';
import { selectContacts } from 'redux/contactsSlice/selectors';
import { Box, Button, TextField } from '@mui/material';

// const schema = yup.object().shape({
//   name: yup.string().min(2, 'Too short').required(''),
//   number: yup.string().length(9, 'Format: xxx-xx-xx').required(''),
// });

export const FormData = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

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

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: handleSubmit,
  });

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <TextField
        value={formik.values.name}
        type="text"
        name="name"
        onChange={formik.handleChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="outlined-basic"
        label="name"
        variant="outlined"
        placeholder="John Doe"
      />
      <TextField
        value={formik.values.number}
        onChange={formik.handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="outlined-basic"
        label="number"
        variant="outlined"
        placeholder="xxx-xx-xx"
      />
      <Button variant="contained">Send</Button>
    </Box>
  );
};
