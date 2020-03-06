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

  const handleFont = num => {
    dispatch(CHANGE_FONTS(num));
  };

  const handleUppercase = e => {
    dispatch(TOGGLE_UPPERCASE());
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      {!!values.length && <p>{values.map(value => `${value} `)}</p>}
      <fieldset>
        {['Kalam', 'Marck Script', 'Source Sans Pro', 'Playfair Display'].map((font, index) => {
          return (
            <label key={index} className={`font-${index + 1}`}>
              <input type="checkbox" checked={fonts.includes(index + 1)} onChange={() => handleFont(index + 1)} />
              {font}
            </label>
          );
        })}
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
