import React, { useState } from 'react';
import {
  ADD_WORD,
  CHANGE_FONTS,
  TOGGLE_UPPERCASE
} from '../reducers/actions';

const Form = ({ state, dispatch }) => {
  const [value, setValue] = useState('');
  const { values, fonts, allowUppercase } = state;

  const handleChange = e => {
    const { value } = e.target;
    setValue(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(ADD_WORD(value));
    setValue('');
  };

  const handleFont = str => {
    dispatch(CHANGE_FONTS(str));
  };

  const handleUppercase = e => {
    dispatch(TOGGLE_UPPERCASE());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      {!!values.length && <p>{values.map(value => `${value} `)}</p>}
      <fieldset>
        <label className="font-1">
          <input type="checkbox" checked={fonts.one} onChange={() => handleFont('one')} />
          Kalam
        </label>
        <label className="font-2">
          <input type="checkbox" checked={fonts.two} onChange={() => handleFont('two')} />
          Marck Script
        </label>
        <label className="font-3">
          <input type="checkbox" checked={fonts.three} onChange={() => handleFont('three')} />
          Source Sans Pro
        </label>
        <label className="font-4">
          <input type="checkbox" checked={fonts.four} onChange={() => handleFont('four')} />
          Playfair Display
        </label>
      </fieldset>
      <fieldset>
        <label className="font-4">
          <input type="checkbox" checked={allowUppercase} onChange={handleUppercase} />
          Allow uppercase
        </label>
      </fieldset>
    </form>
  );
};

export default Form;
