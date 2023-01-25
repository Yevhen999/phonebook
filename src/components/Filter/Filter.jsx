import { Box, TextField, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filterSlice/selectors';
import { changeFilter } from 'redux/filterSlice/filter';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          marginBottom: 0,
          textAlign: 'center',
          padding: '12px 12px 0 12px',
          fontWeight: '700',
        }}
      >
        Contacts
      </Typography>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ textAlign: 'center' }}>
          <TextField
            id="standard-search"
            label="Find contacts by name"
            type="search"
            variant="standard"
            value={filter}
            onChange={onChangeFilter}
          />
        </Box>
      </Box>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
