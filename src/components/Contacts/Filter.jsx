import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/store';

const filterId = nanoid(5);

export const Filter = ({ filter }) => {
  const dispatch = useDispatch();
  const onChangeFilter = e => dispatch(changeFilter(e.target.value));

  return (
    <>
      <label
        style={{
          marginRight: '10px',
        }}
        htmlFor={filterId}
      >
        Find contacts by name
      </label>
      <input
        type="text"
        placeholder="🔍"
        id={filterId}
        value={filter}
        onChange={onChangeFilter}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
};
