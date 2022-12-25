import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

const filterId = nanoid(5);

export const Filter = ({ filter, onChange }) => {
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
        onChange={onChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
