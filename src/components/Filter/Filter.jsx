import { Box, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from 'redux/filterSlice/selectors';
import { changeFilter } from 'redux/filterSlice/filter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
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
