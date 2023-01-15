import { Box, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice/filterSlice';
import css from './Filter.module.css';

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <h2 className={css.title}>Contacts</h2>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className={css.textFieldWrapper}>
          <TextField
            id="standard-search"
            label="Find contacts by name"
            type="search"
            variant="standard"
            value={filter}
            onChange={onChangeFilter}
          />
        </div>
      </Box>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
