import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const handleFilter = ({ target: { value } }) => {
    dispatch(setFilter(value));
  };

  return (
    <div className="formWrapper">
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          className="form-control"
          onChange={handleFilter}
          value={filter}
        />
      </label>
    </div>
  );
};

export default Filter;
