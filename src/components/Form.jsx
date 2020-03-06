import React, { useState } from 'react';
import {
  ADD_WORD,
  CHANGE_FONTS,
  TOGGLE_UPPERCASE,
  CLEAR_WORDS,
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

  const handleClear = e => {
    dispatch(CLEAR_WORDS());
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange}/>
      </form>
      {!!values.length && (
        <div>
          <span>{values.join(', ')}<button onClick={handleClear}>Clear</button></span>
        </div>
      )}
      <div>
        {['Kalam', 'Marck Script', 'Source Sans Pro', 'Playfair Display'].map((font, index) => {
          return (
            <span key={index} className={`font-${index + 1}`}>
              <input type="checkbox" checked={fonts.includes(index + 1)} onChange={() => handleFont(index + 1)} />
              {font}
            </span>
          );
        })}
      </div>
      <div>
        <span>
          <input type="checkbox" checked={allowUppercase} onChange={handleUppercase} />
          Allow uppercase
        </span>
      </div>
    </div>
  );
};

export default Form;
